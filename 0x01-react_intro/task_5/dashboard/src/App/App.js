import React from 'react';
import logo from "../assets/Holberton Logo.jpg";
import './App.css';
import { getFullYear, getFooterCopy, getLatestNotification } from '../utils';
import { Notifications } from '../Notifications/Notifications';

function App() {
  return (
    <div>
      <Notifications />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" onClick={(e) => e.target.select()}/>
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" onClick={(e) => e.target.select()}/>
        <br />
      <button>OK</button>
     </div>
      <div className="line"></div>
      <footer className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
      </footer>
     
    </div>
  );
}

export default App;
