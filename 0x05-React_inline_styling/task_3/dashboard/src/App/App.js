import React, { Fragment } from 'react';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js';
import BodySection from '../BodySection/BodySection.js';
import { StyleSheet, css } from 'aphrodite';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler(e) {
    let k = e.key;
    if (e.ctrlKey && k === 'h') {
      e.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  };

  keydownHandler() {
    document.addEventListener('keydown', this.eventHandler);
  };

  componentDidMount() {
    this.keydownHandler;
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.eventHandler);
  };

  render() {

    let { isLoggedIn } = this.props;

    let listOfCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    let i = 0;
    let listNotifications = [
      { id: i++, type: "default", value: "New course available" },
      { id: i++, type: "urgent", value: "New resume available" },
      { id: i++, type: "urgent", html: {__html: getLatestNotification()} }
    ];

    return (
      <Fragment>
        <div className={css(style.app)}>
          <div className={css(style.upperside)}>
            <Notifications listNotifications={listNotifications} />
            <Header />
          </div>
          {
            isLoggedIn === false &&
            <BodySectionWithMarginBottom tite="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          }
          {
            isLoggedIn === true &&
            <BodySectionWithMarginBottom tite="Course list">
              <CourseList listOfCourses={listOfCourses} />
            </BodySectionWithMarginBottom>
          }
          <BodySection title="News from the school">
            <p className={css(style.bodySection)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </BodySection>
          <Footer />
        </div>
      </Fragment>
    );  
  };
};

const style = StyleSheet.create({
  app: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    position: "relative",
    fontFamily: `Roboto, sans-serif`,
  },

  upperside: {
    width: "100%",
    justifyContent: "space-between",
    borderBottom: `#e1484c solid 3px`,
  },

  bodySection: {
    borderBottom: `#e1484c solid 3px`,
  },
});

App.propTypes = {
  logOut: PropTypes.func,
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
