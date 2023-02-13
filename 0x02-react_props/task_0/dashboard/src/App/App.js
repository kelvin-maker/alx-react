import React, { Fragment } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import { Notifications } from '../Notifications/Notifications';

function App() {
  return (
    <Fragment>
      <Notifications />
      <Header />
      <div className="App-body">
        <Login />
      </div>
      <div className="line"></div>
      <Footer />
    </Fragment>
  );
}

export default App;

