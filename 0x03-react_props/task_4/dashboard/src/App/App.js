import React, { Fragment } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

function App( isLoggedIn ) {
  let loginComponent = undefined;
  isLoggedIn ? (loginComponent = <CourseList />) : (loginComponent = <Login />);
  return (
    <Fragment>
      <Notifications />
      <div className="App">
        <Header />
        { loginComponent }
        <Footer />
      </div>
    </Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
