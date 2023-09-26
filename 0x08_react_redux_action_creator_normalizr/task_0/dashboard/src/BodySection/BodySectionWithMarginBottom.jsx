import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';
// import './bodySectionWithMargin.css';
import BodySection from './BodySection';

const styles = StyleSheet.create({
  BodySectionWithMarginBottom: {
    marginBottom: '40px'
  }
})

class BodySectionWithMarginBottom extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={css(styles.BodySectionWithMarginBottom)}>
        <BodySection {...this.props} />
      </div>
    )
  }
}

BodySectionWithMarginBottom.defaultProps = {
  title: "",
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};

export default BodySectionWithMarginBottom;
