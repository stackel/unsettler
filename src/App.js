import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AppComponent from './components/App'

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact component={AppComponent}/>
      </Router>
    );
  }
}

export default App;
