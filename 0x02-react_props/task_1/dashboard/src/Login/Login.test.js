import React from 'react';
import { render, shallow } from '@testing-library/react';
import Login from './Login';

test('renders login component without crashing', () => {
  shallow(<Login />);
});

test('renders the form and the input elements of the login component', () => {
  const { getByText, getByLabelText } = render(<Login />);
  const loginElement = getByText(/Login to access the full dashboard/i);
  const emailInput = getByLabelText(/Email/i);
  const passwordInput = getByLabelText(/Password/i);
  const submitButton = getByText(/Submit/i);
  expect(loginElement).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
