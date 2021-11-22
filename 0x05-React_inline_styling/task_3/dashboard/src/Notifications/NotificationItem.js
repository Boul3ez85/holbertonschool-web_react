import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;

    let notificationStyle;
    if (type === "urgent") {
      notificationStyle = style.urgentNotif;
    } else if (type === "default") {
      notificationStyle = style.defaultNotif;
    }
    
    return (
      <Fragment>
	      {
		      html !== undefined &&
			    <li className={css(notificationStyle)} onClick={() => markAsRead(id)} data-priority-type={type} dangerouslySetInnerHTML={html} />
		    }
		    {
		      html === undefined &&
			    <li className={css(notificationStyle)} onClick={() => markAsRead(id)} data-priority-type={type}>{value}</li>
	    	}
      </Fragment>
    );
  }
};

const style = StyleSheet.create({
  urgentNotif: {
    color: "red",
    listStyle: "none",
    padding: "10px 8px",
    borderBottom: `2px solid black`,
    fontSize: "20px",
  },
  defaultNotif: {
    color: "blue",
    listStyle: "none",
    padding: "10px 8px",
    borderBottom: `2px solid black`,
    fontSize: "20px",
  }
})

NotificationItem.propTypes = {
  html: PropTypes.shape({
	__html: PropTypes.string
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
}

export default NotificationItem;
