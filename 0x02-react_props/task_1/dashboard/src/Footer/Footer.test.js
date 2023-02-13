import React from 'react';
import { render, shallow } from '@testing-library/react';
import Footer from './Footer';

test('renders footer component', () => {
  const { getByText } = render(<Footer />);
  const footerElement = getByText(/Copyright/i);
  expect(footerElement).toBeInTheDocument();

  const wrapper = shallow(<Footer />);
  expect(wrapper).toBeDefined();
});
