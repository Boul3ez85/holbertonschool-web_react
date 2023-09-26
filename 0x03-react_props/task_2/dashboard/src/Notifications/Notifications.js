import React from 'react';
import './Notifications.css';
import close from '../assets/close.jpeg';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

export default function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type='default' value='New course available' />
        <NotificationItem type='urgent' value='New resume available' />
        <NotificationItem type="urgent" html={{__html: getLatestNotification()}} />
      </ul>
      <button
        aria-label="Close"
        type="button"
        onClick={ () => console.log('Close button has been clicked') }
        style={{display: 'inline-block',
                position: 'absolute',
                top: '20px',
                right: '20px',
                borderStyle: 'none',
                outline: 'none',
                cursor: 'pointer'}}>
        <img src={close} alt='close' style={{width: '10px', height: '10px'}} />
      </button>
    </div>
  );
}
