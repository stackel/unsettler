import React, { Component } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
// import PropTypes from 'prop-types';
import Swing from 'react-swing';
import axios from 'axios';

import { vacancies } from '../resources/mockedData';
// import Card from './Card';
const THROW_SENSITIVITY = 0.7;

export default class Stack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: [],
      thrownCards: [],
    };
  }

  componentDidMount = () => {
    this.getNewVacations();
  }

  getNewVacations = () => {
    /* {
    recommendedJobs(ratings: [{jobId: "sfa", rating: THUMBS_DOWN},
     {jobId: "sfa", rating: THUMBS_DOWN}]) {
    workId
    headline
    companyName
    }
  } */
    const { thrownCards } = this.state;

    console.log(thrownCards.map(thrownCard => ({ id: thrownCard.workId })));

    const query = '{ recommendedJobs(ratings: []) { workId headline companyName}}';
    axios.post('https://unsettler.azurewebsites.net/graphql', { query }).then((response) => {
      this.setState({
        stack: response.data.data.recommendedJobs,
      });
    }, (error) => {
      console.error(error);
    });
  }

  onThrowout = (e) => {
    console.log(e);
    const { stack } = this.state;
    const stackCopy = [...stack];
    const index = stackCopy.map(vacancy => vacancy.workId).indexOf(e.target.id);

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
    const { stack, thrownCards } = this.state;
    if (!stack.length) {
      return <p> loading</p>;
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
                  <div
                    id={vacancy.workId}
                    className="absolute w-100 ba bg-white pv6 ph4"
                    key={vacancy.workId}
                  >
                    <span className="db f3 sans-serif">
                      {vacancy.headline}
                    </span>
                    <span className="db f4 sans-serif">
                      {vacancy.companyName}
                    </span>
                  </div>
                ))
              }
        </Swing>
        )

      }

        <div className="absolute bottom-0">
          {
            thrownCards.map(card => (
              <div key={card.vacancy.workId}>
                <span className="f5 sans-serif">{card.vacancy.headline}</span>
                <span className="f5 sans-serif">
                  {`  You Swiped ${card.direction.toString().slice(-6)}`}
                </span>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

Stack.propTypes = {
};
