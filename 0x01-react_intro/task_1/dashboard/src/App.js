import React from 'react';
import logo from './Holberton Logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="line"></div>
      <footer className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
      </footer>

    </div>
  );
}

export default App;
