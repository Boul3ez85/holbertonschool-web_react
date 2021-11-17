import React from 'react';
import './Notifications.css';
import close from '../assets/close.jpeg';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

class Notifications extends React.Component {
  render() {
    let { displayDrawer } = this.props;
    return (
      <div className="NotificationsComponent">
				<div className="menuItem">
					Your notifications
				</div>
        {
          displayDrawer &&
          <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
              <NotificationItem type='default' value='New course available' />
              <NotificationItem type='urgent' value='New resume available' />
              <NotificationItem type="urgent" html={{__html: getLatestNotification()}} />
            </ul>
            <button
              onClick={() => console.log('Close button has been clicked') }
              aria-label="Close"
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
        }
      </div>
    );
  }
}

Notifications.protoTypes = {
	displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
	displayDrawer: false,
};

export default Notifications;
