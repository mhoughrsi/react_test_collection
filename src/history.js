import createHistory from 'history/createBrowserHistory';
// import { createHistory } from 'react-router-dom';
 
export default createHistory({
  basename: process.env.NODE_ENV === 'development' ? '' : '/reactivesearch-auth0-example'
});