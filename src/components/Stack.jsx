import React, { Component } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
// import PropTypes from 'prop-types';
import Swing from 'react-swing';

import { vacancies } from '../resources/mockedData';
// import Card from './Card';
const THROW_SENSITIVITY = 0.7;

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
              id={vacancy.id}
              className="absolute w-100 ba bg-white pv6 ph4"
              key={vacancy.id}
            >
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
