import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(style.appBody)}>
      <p className={css(style.title)}>Login to access the full dashboard</p>
      <div className={css(style.fieldBox)}>
        <label htmlFor="email">Email</label>
        <input className={css(style.inputBox)} type="email" id="email" />
      </div>
      <div className={css(style.fieldBox)}>
        <label htmlFor="password">Password</label>
        <input className={css(style.inputBox)} type="password" id="password" />
      </div>
      <div>
        <button>OK</button>
      </div>
    </div>
  );
};

const style = StyleSheet.create({
  appBody: {
    height: "360px",
  },

  title: {
    padding: "30px",
  },

  inputBox: {
    margin: '10px',
  },

  fieldBox: {
		display: "inline",
    maxWidth: "250px",
		'@media (max-width: 900px)': {
      display: "flex",
			flexDirection: "column",
		},
	},
})

export default Login;
