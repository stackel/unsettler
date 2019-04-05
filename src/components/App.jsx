import React, { Component } from 'react';

import Stack from './Stack';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="pa3 mt5  mw6 center h-100">
        <Stack onThrowout={this.onThrowout} />
      </div>
    );
  }
}
