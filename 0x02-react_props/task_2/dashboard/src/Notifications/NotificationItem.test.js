import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import NotificationItem from './NotificationItem';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('NotificationItem component', () => {
  it('renders without crashing', () => {
    act(() => {
      render(<NotificationItem />, container);
    });
  });

  it('renders the correct html with type and value props', () => {
    act(() => {
      render(<NotificationItem type="default" value="test" />, container);
    });
    expect(container.querySelector('[data-notification-type="default"]').textContent).toBe('test');
  });

  it('renders the correct html with html prop', () => {
    act(() => {
      render(<NotificationItem html={{ __html: '<u>test</u>' }} />, container);
    });
    expect(container.querySelector('u').textContent).toBe('test');
  });
});
