import React, { Component } from 'react';
import App from '../App';
import Link from 'react-router-dom/Link';

class Home extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }
  render() {
    // calls the isAuthenticated method in authentication service
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="">
        {
          isAuthenticated() &&
          <div className="container column">
            <div className="header">
            <div className="nav-items">
              <Link to="/home/chat">Chat Component</Link>
              <Link to="/home/redux">Redux Test</Link>
              <Link to="/home/hotgrid">Hot Grid</Link>
            </div>
              <a
                style={{ cursor: 'pointer' }}
                onClick={this.logout}
              >
                Log Out
              </a>
            </div>

            <App />
          </div>
        }
        {
          !isAuthenticated() && (
            <div className="container column login-screen">
              <div className="login-container">
                <h5 className="login-title">React Test Collection</h5>
                <h5>
                  <a
                    style={{ cursor: 'pointer' }}
                    className="login-button"
                    onClick={this.login}
                  >
                    Log In
                  </a>
                  {' '}
                </h5>
              </div>
            </div>
          )
        }
      </div>
      );
    }
  }

  export default Home;