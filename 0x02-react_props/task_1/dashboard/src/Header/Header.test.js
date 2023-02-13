import React from 'react';
import { render, shallow } from '@testing-library/react';
import Header from './Header';

test('renders header component without crashing', () => {
  shallow(<Header />);
});

test('renders header component with img and h1 tags', () => {
  const { getByAltText, getByText } = render(<Header />);
  const headerImg = getByAltText(/logo/i);
  const headerTitle = getByText(/School dashboard/i);

  expect(headerImg).toBeInTheDocument();
  expect(headerTitle).toBeInTheDocument();
});
