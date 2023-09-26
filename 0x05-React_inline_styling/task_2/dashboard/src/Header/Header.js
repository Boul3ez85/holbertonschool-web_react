import React from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <div className={css(style.header)}>
      <img className={css(style.image)} src={logo} />
      <h1 className={css(style.heading)}>School dashboard</h1>
    </div>
  );
};

const style = StyleSheet.create({
  header: {
    display: "flex",
    position: "relative",
  },

  image: {
    height: "30vmin",
  },

  heading: {
    position: "absolute",
    color: "#e1484c",
    top: "30%",
    left: "190px",
    whiteSpace: "nowrap",
  },
})

export default Header;
