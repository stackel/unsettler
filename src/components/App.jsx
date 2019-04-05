import React, { Component } from 'react';

import Stack from './Stack';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Stack onThrowout={this.onThrowout} />
    );
  }
}
