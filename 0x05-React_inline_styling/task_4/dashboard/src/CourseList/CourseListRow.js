import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class CourseListRow extends React.Component {
  render() {
    let { isHeader, textFirstCell, textSecondCell } = this.props;

    if (isHeader === true && textSecondCell == null) {
      return (
        <tr className={css(style.headerColor)}>
          <th className={css(style.rowStyle)} colSpan={2}>{textFirstCell}</th>
        </tr>
      );
    } else if (isHeader === true && textSecondCell != null) {
      return (
        <tr className={css(style.bodyColor)}>
          <th className={css(style.rowStyle)}>{textFirstCell}</th>
          <th className={css(style.rowStyle)}>{textSecondCell}</th>
        </tr>
      );
    } else if (isHeader === false) {
      return (
        <tr className={css(style.bodyColor)}>
          <td className={css(style.rowStyle)}>{textFirstCell}</td>
          <td className={css(style.rowStyle)}>{textSecondCell}</td>
        </tr>
      );
    }
  }
};

const style = StyleSheet.create({
  headerColor: {
    backgroundColor: "#deb5b545",
  },
  bodyColor: {
    backgroundColor: "#f5f5f5ab",
  },
  rowStyle: {
    borderBottom: `2px solid lightgrey`,
  }
})

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
