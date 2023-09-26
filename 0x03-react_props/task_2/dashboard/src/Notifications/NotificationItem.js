import React, { Fragment } from "react";

class NotificationItem extends React.Component {
  render() {
    const { type, html, value } = this.props;
    return (
      <Fragment>
        {
					html !== undefined &&
					<li
						data-priority-type={type}
						dangerouslySetInnerHTML={html}
					/>
				}
				{
					html === undefined &&
					<li
						data-priority-type={type}
					>
						{value}
					</li>
				}
      </Fragment>
    );
  }
}

export default NotificationItem;
