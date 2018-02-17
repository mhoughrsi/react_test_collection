import React, { Component } from 'react';
import logo from './style/logo.svg';
import './style/App.css';
import {
  ReactiveBase,
  CategorySearch,
  RatingsFilter,
  ResultCard
} from '@appbaseio/reactivesearch';

import { Switch, Route } from 'react-router'
import Link from 'react-router-dom/Link';


import Chat from './websockets/Chat';
import ReduxTest from './containers/redux_test_comp';
import HotGrid from './containers/hotgrid';
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
        {/* <Link to="/home/chat">Chat Component</Link>
        <Link to="/home/redux">Redux Test</Link> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
        <Switch>
          <Route path="/home/chat" component={Chat} />
          <Route path="/home/redux" component={ReduxTest} />
          <Route path="/home/hotgrid" component={HotGrid} />
        </Switch>
        {/* <Chat /> */}
        {/* <ReduxTest /> */}
      </div>
    );
  }
}

export default App;
