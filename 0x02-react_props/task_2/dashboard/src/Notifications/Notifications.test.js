import React from 'react';
import { render } from '@testing-library/react';
import { Notifications } from './Notifications';

describe('Notifications component', () => {
it('renders without crashing', () => {
const { container } = render(<Notifications />);
expect(container).toBeTruthy();
});

it('renders NotificationsItem elements', () => {
const { getByTestId } = render(<Notifications />);
expect(getByTestId('NotificationsItem')).toBeTruthy();
});

it('renders the right html for the first NotificationItem', () => {
const { getByTestId } = render(<Notifications />);
expect(getByTestId('NotificationsItem').innerHTML).toContain('New course available');
});
} );
