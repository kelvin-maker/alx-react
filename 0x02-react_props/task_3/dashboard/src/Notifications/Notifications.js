import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils';
import './Notifications.css';

export const Notifications = () => {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button style={{ float: 'right' }} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
        <img src={closeIcon} alt="close button" />
      </button>
      <p>Notifications</p>
      <ul>
        <NotificationItem priority="default" value="New course available" />
        <NotificationItem priority="urgent" value="New resume available" />
        <NotificationItem priority="default" html={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
};
