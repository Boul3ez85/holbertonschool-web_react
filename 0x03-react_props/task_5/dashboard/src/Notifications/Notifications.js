import React, { Fragment } from 'react';
import './Notifications.css';
import close from '../assets/close.jpeg';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
  render() {
    let { displayDrawer, listNotifications } = this.props;
    return (
      <div className="NotificationsComponent">
				<div className="menuItem">
					Your notifications
				</div>
        {
          displayDrawer &&
          <div className="Notifications">
            {
              listNotifications.length === 0 &&
							<p>No new notification for now</p>
            }
            {
              listNotifications.length > 0 &&
              <Fragment>
                <p>Here is the list of notifications</p>
                <ul>
                  {
                    listNotifications.map((item) => {
                      return(
                        <NotificationItem
													key={item.id}
													type={item.type}
													value={item.value}
													html={item.html}
												/>
                      );
                    })
                  }
                </ul>
              </Fragment>
            }
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
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
	displayDrawer: false,
  listNotifications: []
};

export default Notifications;
