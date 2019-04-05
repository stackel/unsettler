import React, { Component } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
// import PropTypes from 'prop-types';
import Swing from 'react-swing';

import { vacancies } from '../resources/mockedData';
import Card from './Card';

export default class Stack extends Component {
  constructor(props) {
    super(props);
    this.state = { stack: vacancies };
  }

  onThrowout = (e) => {
    console.log(e);
  }

  render() {
    const { stack } = this.state;

    return (
      <Swing
        className="relative"
        throwout={this.onThrowout}
      >
        {
          stack.map(vacancy => (
            <div className="absolute ba bg-white pa5" key={vacancy.id}>
              <span className="db f3 sans-serif">
                {vacancy.title}
              </span>
              <span className="db f4 sans-serif">
                {vacancy.employer}
              </span>
              <span className="db f4 dark-gray sans-serif">
                {vacancy.municipality}
              </span>
            </div>
          ))
        }
      </Swing>
    );
  }
}

Stack.propTypes = {
};
