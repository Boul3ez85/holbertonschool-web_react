import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function NotificationItem({ type, html, value, markAsRead, id }) {
  // Define the styles using Aphrodite
  const styles = StyleSheet.create({
    default: {
      color: 'blue',
    },
    urgent: {
      color: 'red',
    },
    li: {
      cursor: 'pointer',
    },
  });

  const handleClick = () => {
    markAsRead(id);
  };

  if (type === 'default') {
    return (
      <li
        className={css(styles.default, styles.li)}
        data-notification-type={type}
        onClick={handleClick}
      >
        {value}
      </li>
    );
  } else if (type === 'urgent' && html !== undefined) {
    return (
      <li
        className={css(styles.urgent, styles.li)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={handleClick}
      />
    );
  } else {
    return (
      <li
        className={css(styles.urgent, styles.li)}
        data-notification-type={type}
        onClick={handleClick}
      >
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string
}

NotificationItem.defaultProps = {
  type: 'default',
  value: ''
}

export default NotificationItem;
