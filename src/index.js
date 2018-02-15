import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Routes />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
