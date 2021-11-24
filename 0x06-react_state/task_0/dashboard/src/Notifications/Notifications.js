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
		return (
      nextProps.listNotifications.length >
        this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
	};

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }
  render() {
    let { displayDrawer,
          listNotifications,
          handleDisplayDrawer,
          handleHideDrawer } = this.props;
    return (
      <div className="NotificationsComponent">
				<div 
          className={css(style.menuItem)}
          onClick={handleDisplayDrawer}
        >
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
                <ul className={css(style.itemList)}>
                  {
                    listNotifications.map((item) => {
                      return(
                        <NotificationItem
													key={item.id}
													type={item.type}
													value={item.value}
													html={item.html}
                          markAsRead={this.markAsRead}
												/>
                      );
                    })
                  }
                </ul>
              </Fragment>
            }
            <button
              onClick={handleHideDrawer}
              aria-label="Close"
              style={{display: 'inline-block',
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
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

const opacity = {
	'0%': {
		opacity: .5,
	},
	'50%': {
		opacity: .75,
	},
	'100%': {
		opacity: 1,
	},
};

const buttonAnimation = {
	'0%': {
		transform: 'translateY(0)',
	},
	'50%': {
			transform: 'translateY(-10px)',
	},
	'100%': {
			transform: 'translateY(0)',
	},
};

const style = StyleSheet.create({
  notifications: {
    position: "relative",
    padding: "20px",
    padding: '6px 12px',
    margin: '12px 0',
    border: `#e1484c dashed 1px`,
    fontSize: "20px",
    '@media (max-width: 900px)': {
      width: "100%",
      backgroundColor: 'white',
      display: 'block',
      border: "none",
      padding: "10px 8px",
    }
  },

  menuItem: {
	  textAlign: "right",
	  fontWeight: "bold",
    pointer: 'cursor',
		':hover': {
			animationName: [opacity, buttonAnimation],
			animationDuration: '1s, .5s',
			animationIterationCount: '3',
		},
  },

  itemList: {
    paddingLeft: "5px",
    fontSize: "20px",
  }
});

Notifications.protoTypes = {
	displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
	displayDrawer: true,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
