import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

class CourseList extends React.Component {
  render() {
    let { listOfCourses } = this.props;
    if (listOfCourses == null) {
      return (
        <div>No course available yet</div>
      );
    } else {
      return (
        <table id='course-list'>
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

CourseList.propTypes = {
  listOfCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listOfCourses: []
}

export default CourseList;
