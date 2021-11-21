import React from "react";
import PropTypes from 'prop-types';

class CourseListRow extends React.Component {
  render() {

    let { isHeader, textFirstCell, textSecondCell } = this.props;

    const rowBackgroundColor = {"background": "#f5f5f5ab"};
    const headerBackgroundColor = {"backgroundColor": "#deb5b545"}
    let changeColor;
    if (isHeader) {
      changeColor = headerBackgroundColor;
    } else {
      changeColor = rowBackgroundColor;
    }

    if (isHeader === true && textSecondCell == null) {
      return (
        <tr style={changeColor}>
          <th colSpan={2}>{textFirstCell}</th>
        </tr>
      );
    } else if (isHeader === true && textSecondCell != null) {
      return (
        <tr style={changeColor}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    } else if (isHeader === false) {
      return (
        <tr style={changeColor}>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </tr>
      );
    }
  }
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default CourseListRow;
