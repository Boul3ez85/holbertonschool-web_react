import React from 'react';
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import CourseList from '../CourseList/CourseList'
import Footer from '../Footer/Footer'
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils'
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import WithLogging from '../HOC/WithLogging';
import { StyleSheet, css } from 'aphrodite';
import newContext from './AppContext';
import {user, logOut} from './AppContext'

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
];

const styles = StyleSheet.create({
  App: {
    fontFamily: 'Roboto',
    margin: '0',
    padding: '0'
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user,
      logOut: logOut,
      listNotifications: listNotifications,
    };
  };

  handleKeydown = (e) => {
    let k = e.key;
    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  };

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: !this.state.displayDrawer });
    console.log('should display');
  }

  handleHideDrawer = () => {
    this.setState({ displayDrawer: !this.state.displayDrawer });
    console.log('should hide');
  }

  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeydown, false);
  };

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handleKeydown, false);
  };

  logIn = (email, password) => {
    this.setState({user: {
        email,
        password,
        isLoggedIn: true
      }
    });
  };

  logOut = () => {
    this.setState({ user });
  };

  markNotificationAsRead = (id) => {
    this.setState({
      listNotifications: this.state.listNotifications.filter(notif => {
        return notif.id !== id;
      }),
    });
  };

  render() {
    const {displayDrawer, user: {isLoggedIn}, user, logOut} = this.state;
    const contextValues = { user, logOut };
    return (
      <newContext.Provider value={contextValues}>
        <div className={css(styles.App)}>
          <Notifications
            handleHideDrawer={this.handleHideDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
            displayDrawer={displayDrawer}
            listNotifications={this.state.listNotifications} 
          />
          <Header />
          {
            !isLoggedIn ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn}/>
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            )
          }
          <BodySection title="News from the School">
            <p>Holberton School news goes here</p>
          </BodySection>
          <Footer />
        </div>
      </newContext.Provider>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}

export default App;
