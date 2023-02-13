import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders footer component', () => {
  const { getByText } = render(<Footer />);
  const footerElement = getByText(/Copyright/i);
  expect(footerElement).toBeInTheDocument();
});
