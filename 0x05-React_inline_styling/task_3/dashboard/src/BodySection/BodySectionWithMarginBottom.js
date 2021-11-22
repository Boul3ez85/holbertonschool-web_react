import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends React.Component {
  constructor(props) {
		super(props);
	}

  render() {
    return(
      <div className={css(style.BodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

const style = StyleSheet.create({
  BodySectionWithMargin: {
      marginBottom: '40px',
  },
});


BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node
}

export default BodySectionWithMarginBottom;