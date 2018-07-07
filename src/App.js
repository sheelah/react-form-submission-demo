import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FeedbackForm from './components/FeedbackForm';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FeedbackForm env={this.props.env} />
      </div>
    );
  }
}

App.propTypes = {
  env: PropTypes.object.isRequired
};

export default App;
