import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

import App from './App';
import Header from './Header';
import Login from './Login';
import Notifications from './Notifications';
import Footer from './Footer';

test('renders components without crashing', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/School dashboard/i);
  const loginElement = getByText(/Login to access the full dashboard/i);
  const notificationsElement = getByText(/Notifications/i);
  const footerElement = getByText(/Copyright/i);
  expect(headerElement).toBeInTheDocument();
  expect(loginElement).toBeInTheDocument();
  expect(notificationsElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});
