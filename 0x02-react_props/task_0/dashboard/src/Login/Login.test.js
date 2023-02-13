import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

test('renders login component', () => {
  const { getByText } = render(<Login />);
  const loginElement = getByText(/Login to access the full dashboard/i);
  expect(loginElement).toBeInTheDocument();
});
