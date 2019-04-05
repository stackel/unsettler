import React, { Component } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
// import PropTypes from 'prop-types';
import Swing from 'react-swing';
import axios from 'axios';

const THROW_SENSITIVITY = 0.7;

export default class Stack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: [],
      thrownCards: [],
      firstLoad: true,
      education: /* {
        title: 'Byggteknik inriktning betongarbetare',
        id: '115183',
      } */ null,
    };
  }

  componentDidMount = () => {
    this.getNewVacations();
  }

  getNewVacations = () => {
    const { thrownCards, firstLoad } = this.state;

    const ratings = thrownCards.filter(card => card.vacancy.jobId !== 'WELCOME').map(thrownCard => (`{ jobId:"${thrownCard.vacancy.jobId}", rating:${thrownCard.direction === Swing.DIRECTION.RIGHT ? 'THUMBS_UP' : 'THUMBS_DOWN'}}`
    )).join(',');

    const query = `{ recommendedJobs(ratings:[${ratings}]) { jobId headline companyName}}`;

    console.log(query);
    axios.post('https://unsettler.azurewebsites.net/graphql', { query }).then((response) => {
      const recommendedJobs = response.data.data.recommendedJobs;
      if (firstLoad) {
        recommendedJobs.push({ jobId: 'WELCOME', headline: 'Unsettler', companyName: 'Hitta och nå ditt drömyrke genom att swipa höger och vänster.... ' });
      }
      this.setState({
        stack: recommendedJobs,
        firstLoad: false,
      });
    }, (error) => {
      console.error(error);
    });
  }

  onThrowout = (e) => {
    const { stack } = this.state;
    const stackCopy = [...stack];

    const index = stackCopy.map(vacancy => vacancy.jobId).indexOf(e.target.id);

    if (index !== -1) {
      stackCopy.splice(index, 1);
      this.setState({ stack: stackCopy });
      this.setState(prevState => ({
        thrownCards: [...prevState.thrownCards,
          { vacancy: stack[index], direction: e.throwDirection }],
      }));
    }

    if (stackCopy.length <= 0) {
      this.getNewVacations();
    }
  }

  render() {
    const { stack, education } = this.state;
    console.log(stack);

    if (education) {
      const url = `https://www.arbetsformedlingen.se/For-arbetssokande/Stod-och-ersattning/Sok-arbetsmarknadsutbildningar.html?cmd=visa&utbildningId=${education.id}`;
      return (
        <div>
          <span className="db sans-serif f4 tc white tc"> Vi rekommenderar denna utbilning</span>
          <span className="db white tc sans-serif f2 b mt4">{education.title}</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="db tc sans-serif b mt4 white"
            href={url}
          >
            Läs mer
          </a>
          <div className="tc mt5">
            <a
              href="/"
              className=" button ph4 pv2 bg-white af-blue br3 link dim sans-serif b f4 pointer"
            >
              Börja om
            </a>
          </div>
        </div>
      );
    }
    if (!stack.length) {
      return <p className="tc sans-serif f3 b white"> loading</p>;
    }
    return (
      <div>

        {
        stack.length && (
        <Swing
          className="relative center"
          throwout={this.onThrowout}
          config={{
            throwOutConfidence: (xOffset, yOffset, element) => {
              const xConfidence = Math.min(Math.abs(xOffset) / element.offsetWidth
                   + THROW_SENSITIVITY, 1);
              const yConfidence = Math.min(Math.abs(yOffset) / element.offsetHeight
                   + THROW_SENSITIVITY, 1);

              return Math.max(xConfidence, yConfidence);
            },
          }}
        >
          {
                stack.map(vacancy => (
                  vacancy.jobId !== 'WELCOME'
                    ? (
                      <div
                        id={vacancy.jobId}
                        className="absolute relative min-height-card w-100 ba br4 bw3 b--af-green bg-light-gray pv6 ph4"
                        key={vacancy.jobId}
                      >
                        <span className="db f3 sans-serif">
                          {vacancy.headline}
                        </span>
                        <span className="db f4 sans-serif">
                          {vacancy.companyName}
                        </span>
                        <div className="absolute bottom-0 left-0 w-100 f1 pa3 ">
                          <span className="fl" role="img" aria-label="Thumbs down fr">&#128078;</span>
                          <span className="fr" role="img" aria-label="Thumbs up fl">&#128077;</span>
                        </div>
                      </div>
                    )
                    : (
                      <div
                        id={vacancy.jobId}
                        className="absolute relative min-height-card w-100 ba br4 bw3 b--af-green bg-light-gray pv6 ph4"
                        key={vacancy.jobId}
                      >
                        <span className="db tc f2 b sans-serif">
                          {vacancy.headline}
                        </span>
                        <span className="db f4 lh-copy mt2 sans-serif">
                          {'Välj de yrken som intresserar dig och få förslag på utbildningar som hjälper dig till drömjobbet'}
                          <span className="db b tc mt3">Swipea höger eller vänster</span>
                        </span>
                        <div className="absolute bottom-0 left-0 w-100 f1 pa3 ">
                          <span className="fl" role="img" aria-label="Thumbs up">&#128077;</span>
                          <span className="fr" role="img" aria-label="Thumbs up">&#128077;</span>
                        </div>
                      </div>
                    )
                ))
            }
        </Swing>
        )

      }
      </div>
    );
  }
}

Stack.propTypes = {
};
