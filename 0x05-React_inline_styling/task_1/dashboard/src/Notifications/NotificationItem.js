import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    
    let notificationStyle = (type === 'urgent') ? style.urgentNotif : style.defaultNotif;
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
}

const style = StyleSheet.create({
  defaultNotif: {
		color: 'blue',
	},
	urgentNotif: {
		color: 'red',
	},
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
