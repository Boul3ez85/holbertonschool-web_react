import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return isHeader
    ? textSecondCell
      ? (
        <tr style={{ backgroundColor: 'rgb(222, 181, 181)', fontSize: '20px' }}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      )
      : (
        <tr style={{ backgroundColor: 'rgb(222, 181, 181)' }}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      )
    : (
      <tr style={{ backgroundColor: 'rgb(214, 210, 210)' }}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool, 
  textFirstCell: PropTypes.string, 
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ]),
}

CourseListRow.defaultProps = {
  isHeader: false, 
  textFirstCell: '', 
  textSecondCell: '',
}

export default CourseListRow;
