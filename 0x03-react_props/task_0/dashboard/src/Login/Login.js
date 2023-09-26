import React, { Fragment } from 'react';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <button>OK</button>
        </div>
      </Fragment>
    );
  }
}

export default Login;
