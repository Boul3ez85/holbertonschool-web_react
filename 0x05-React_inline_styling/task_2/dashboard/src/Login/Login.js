import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(style.appBody)}>
      <p className={css(style.title)}>Login to access the full dashboard</p>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
      <button>OK</button>
    </div>
  );
};

const style = StyleSheet.create({
  appBody: {
    height: "360px",
  },

  title: {
    padding: "30px",
  }
})

export default Login;
