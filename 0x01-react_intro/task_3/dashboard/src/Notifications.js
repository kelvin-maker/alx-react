import React from 'react';
import closeIcon from './close-icon.png'; //import the close-icon.png image
import {getLatestNotification} from './utils'
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
<li data-priority="default">New course available</li>
<li data-priority="urgent">New resume available</li>
<li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
</ul>
</div>
);
}
