import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  'AppBody': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '50vh',
  },
  
 'AppBodyP': {
    fontFamily: 'Roboto',
    fontSize: '1rem',
  },
  
  'AppBodyForm': {
    margin: '20px 0',
    fontSize: '1rem',
    fontFamily: 'Roboto',
  },
  
  'AppBodyFormLabel': {
    paddingRight: '10px',
  },
  
  'AppBodyFormButton': {
    cursor: 'pointer',
    width: '40px',
    ':hover': {
      border: 'gold 2px solid',
    }
  },
  
  'email': {
    marginRight:'10px',
  },

  'password': {
    marginRight: '10px'
  },

  'small': {
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '115px',
      width: '80%',
      marginRight: '5px',
    }
  }
});


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      enableSubmit: false,
      email: '',
      password: '',
    };
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  handleChangeEmail = (e) => {
    const { password } = this.state;
    const enableSubmit = e.target.value !== '' && password !== '';
    this.setState({ email: e.target.value, enableSubmit });
  }

  handleChangePassword = (e) => {
    const { email } = this.state;
    const enableSubmit = email !== '' && e.target.value !== '';
    this.setState({ password: e.target.value, enableSubmit });
  }

  render() {
    const {email, password, enableSubmit} = this.state;
    return (
      <div className={css(styles.AppBody)}>
        <p className={css(styles.AppBodyP)}>Login to access the full dashboard</p>
        <div className={css(styles.small)}>
          <form onSubmit={this.handleLoginSubmit}>
            <label className={css(styles.AppBodyFormLabel)} htmlFor="email">Email</label>
            <input 
              onChange={this.handleChangeEmail} 
              className={css(styles.email)} 
              type="email"
              name="user_email" 
              id="email" 
              value={email}
            />
            <label className={css(styles.AppBodyFormLabel)} htmlFor="password">Password</label>
            <input 
              onChange={this.handleChangePassword} 
              className={css(styles.password)} 
              type="text" 
              name="user_password" 
              id="password" 
              value={password} 
            />
            <input
              disabled={!enableSubmit}
              className={css(styles.AppBodyFormButton)}
              value="OK" 
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;