import React from "react";
import PropTypes from 'prop-types';

class CourseListRow extends React.Component {
  render() {
    let { isHeader, textFirstCell, textSecondCell } = this.props;
    let backgroundRowColor = isHeader ? { "backgroundColor": "#deb5b545" } : { "backgroundColor": "#f5f5f5ab" }
    if (isHeader === true && textSecondCell == null) {
      return (
        <tr style={backgroundRowColor}>
          <th colSpan={2}>{textFirstCell}</th>
        </tr>
      );
    } else if (isHeader === true && textSecondCell != null) {
      return (
        <tr style={backgroundRowColor}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    } else if (isHeader === false) {
      return (
        <tr style={backgroundRowColor}>
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
