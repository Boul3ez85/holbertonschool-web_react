import React, { Fragment } from "react";
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    return (
      <Fragment>
	      {
		      html !== undefined &&
			    <li onClick={() => markAsRead(id)} data-priority-type={type} dangerouslySetInnerHTML={html} />
		    }
		    {
		      html === undefined &&
			    <li onClick={() => markAsRead(id)} data-priority-type={type}>{value}</li>
	    	}
      </Fragment>
    );
  }
}

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
