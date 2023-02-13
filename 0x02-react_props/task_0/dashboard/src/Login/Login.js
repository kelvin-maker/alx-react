import React, { Fragment } from 'react';
import './Login.css';

const Login = () => {
  return (
    <Fragment>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" onClick={(e) => e.target.select()} />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" onClick={(e) => e.target.select()} />
      <br />
      <button>OK</button>
    </Fragment>
  );
};

export default Login;
