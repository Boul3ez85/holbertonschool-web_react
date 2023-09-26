import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton_logo.jpg';
import newContext from '../App/AppContext';

const styles = StyleSheet.create({
  Header: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  HeaderHeading: {
    color: '#e1003c',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    margin: '0',
  },
  HeaderLogo: {
    height: '30vmin',
    pointerEvents: 'none',
  }
})

class Header extends React.Component {

  static contextType = newContext;
  constructor(props) {
    super(props);
  }

  render () {
    const { user, logOut } = this.context;
    return (
      <div className={css(styles.AppHeader)}>
        <img src={logo} className={css(styles.AppLogo)} alt="holberton logo" />
        <h1 className={css(styles.AppHeaderH)}>School Dashboard</h1>
        { user.isLoggedIn && 
          <div className={css(styles.WelcomeMessage)} id="logoutSection">
            Welcome <b>{user.email}</b> <a href="" onClick={logOut}>(logout)</a>
          </div>
        }
      </div>
    )
  }
}

export default Header;
