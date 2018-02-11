import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
// import '@appbaseio/reactivesearch/dist/css/style.min.css';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
