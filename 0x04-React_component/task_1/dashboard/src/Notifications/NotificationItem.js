import React from "react";
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  let itemLi;

  if (value) {
    itemLi= <li data-notification-type={type}>{value}</li>
  } else {
    <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>;
  }
  
  return itemLi;
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: {},
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

export default NotificationItem;
