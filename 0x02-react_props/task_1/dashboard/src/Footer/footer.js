import React from 'react';
import { getFullYear, getFooterCopy } from '../utils';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
    </footer>
  );
};

export default Footer;
