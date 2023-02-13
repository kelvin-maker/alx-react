import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils';

export const Notifications = () => {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button style={{ float: 'right' }} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
        <img src={closeIcon} alt="close button" />
      </button>
      <p>Notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem html={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
};

