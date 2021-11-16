import React, { Component, Fragment, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOutHandler = this.logOutHandler.bind(this);
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener('keydown', this.logOutHandler);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener('keydown', this.logOutHandler);
    }
  }

  logOutHandler(event) {
    if(event.ctrlkey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render () {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];
    const { isLoggedIn } = this.props;
    return (
      <Fragment>
        <Notifications listNotifications={listNotifications} />
        <Header />
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        <Footer />
      </Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => undefined,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
