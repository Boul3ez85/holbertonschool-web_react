import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';
import newContext from "../App/AppContext";

const styles = StyleSheet.create({
  Footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vh',
    borderTop: '5px red solid',
  },
  FooterParag: {
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontSize: '1.3rem',
    padding: '20px 20px 20px 40px',
  }
})


function Footer() {
  return (
    <newContext.Consumer>
      {(context) => {
        return (
          <div className={css(styles.Footer)}>
            <p className={css(styles.FooterParag)}>
              Copyright {getFullYear()} - {getFooterCopy(true)}
            </p>
            {context.user.isLoggedIn && <a href="#">Contact us</a>}
          </div>
        );
      }}
    </newContext.Consumer>
  );
}

export default Footer;
