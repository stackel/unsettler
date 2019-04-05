import React, { Component } from 'react';

import Stack from './Stack';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="pa3 mt2 mw6 center h-100">
        <h1 className="white sans-serif tc  b f2 fw4"> Unsettler </h1>
        <Stack onThrowout={this.onThrowout} />
      </div>
    );
  }
}
