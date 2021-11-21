import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

class CourseList extends React.Component {
  render() {
    let { listOfCourses } = this.props;
    if (listOfCourses == null) {
      return (
        <div>No course available yet</div>
      );
    } else {
      return (
        <table className={css(style.table)}>
          <thead>
            <CourseListRow textFirstCell='Available courses' isHeader={true} />
            <CourseListRow textFirstCell='Course name' textSecondCell='Credit' />
          </thead>
          <tbody>
            {
              listOfCourses.map(course => {
                return (
                  <CourseListRow
                    key={course.id}
                    textFirstCell={course.name}
                    textSecondCell={course.credit}
                    isHeader={false}
                  />
                );
              })
            }
          </tbody>
        </table>
      );
    }
  }
};

const style = StyleSheet.create({
  table: {
    width: "90%",
    border: `1px solid lightgrey`,
    margin: "0 auto 200px auto",
  },
});


CourseList.propTypes = {
  listOfCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listOfCourses: []
}

export default CourseList;
