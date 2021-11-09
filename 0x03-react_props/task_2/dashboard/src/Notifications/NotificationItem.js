import React from "react";
import { ReactDOM } from "react-dom";

function NotificationItem({ type, html, value }) {
  let itemLi;

  if (!value) {
    itemLi = <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>;
  } else {
    itemLi = (
      <li data-notification-type={type}>{value}</li>
    );
  }
  
  return itemLi;
};

export default NotificationItem;
