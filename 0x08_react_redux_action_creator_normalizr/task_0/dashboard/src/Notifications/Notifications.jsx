import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
  constructor(props) {
    super(props)
  }
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length >
        this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  render() {
    return (
      <>
        <div className="menuItem" onClick={() => this.props.handleDisplayDrawer()}>Your notifications</div>
        {
          this.props.displayDrawer === true ? (
            <div className='root-notifications'>
              {this.props.listNotifications.length > 0 ? (
                <>
                  <p>Here is the list of notifications</p>
                  <button
                    onClick={() => this.props.handleHideDrawer()}
                    aria-label='Close'
                  >
                    <img src={closeIcon} alt='close icon' />
                  </button>
                  <ul>
                    {this.props.listNotifications.map(notification => (
                      <NotificationItem
                        key={notification.id}
                        id={notification.id}
                        type={notification.type}
                        value={notification.value}
                        html={notification.html}
                        markAsRead={this.markAsRead}
                      />
                    ))}
                  </ul>
                </>
              ) : (
                <p>No new notification for now</p>
              )}
            </div>
          ) :
          (null)
        }
      </>
    )
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  markAsRead: PropTypes.func,
}

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
  markAsRead: () => {},
}

export default Notifications;
