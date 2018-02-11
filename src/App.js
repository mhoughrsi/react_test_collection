import React, { Component } from 'react';
import logo from './logo.svg';
import Chat from './Chat';
import './App.css';
import {
  ReactiveBase,
  CategorySearch,
  RatingsFilter,
  ResultCard
} from '@appbaseio/reactivesearch';
// import history from './history';

// Todo on application : 
// React Routing - 4
// Redux - load data through reducer/actions.(required)
// Authentication, (required)
// CHAT (Socket.io), (required)

// also todo : implement a google map && search. (maybe)
// implement data visualization react framework. (required)
// connect nodejs to SQL Table and retrieve data that way. (required)
// unit test && integration test entire application. (required)
// implement typescript in project. (client side and server side) (required)
// create very responsive form validation on client. (required)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Chat />
      </div>
    );
  }
}

export default App;
