import React, { Fragment } from 'react';
import close from '../assets/close.jpeg';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
		if (this.props.listNotifications.length < nextProps.listNotifications.length) {
			return true;
		}
		return false;
	};

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }
  render() {
    let { displayDrawer, listNotifications } = this.props;
    return (
      <div className="NotificationsComponent">
				<div className={css(style.menuItem)}>
					Your notifications
				</div>
        {
          displayDrawer &&
          <div className={css(style.notifications)}>
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
};

const style = StyleSheet.create({
  notifications: {
    position: "relative",
    padding: "20px",
    border: `rgb(233, 67, 67) dashed 1px`,
  },

  menuItem: {
	  textAlign: "right",
	  fontWeight: "bold",
  }
});

Notifications.protoTypes = {
	displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
	displayDrawer: true,
  listNotifications: [],
};

export default Notifications;
