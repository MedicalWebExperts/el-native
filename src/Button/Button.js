/* eslint no-console: ["error", { allow: ["error"] }] */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Styles from './styles';

const propTypes = {
  style: PropTypes.object,
  /*
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  size: PropTypes.oneOf("large", "medium", "small"),
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  transparent: PropTypes.bool,
  processing: PropTypes.bool,
  text: PropTypes.string,
  iconRight: PropTypes.string,
  iconLeft: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  */
};

const defaultProps = {
  style: {},
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  size: PropTypes.oneOf('large', 'medium', 'small'),
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  transparent: PropTypes.bool,
  processing: PropTypes.bool,
  text: PropTypes.string,
  iconRight: PropTypes.string,
  iconLeft: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

/**
 * Map component description.
 */
export default function Button(props) {
  return <View style={{ ...Styles.container, ...props.style.container }} />;
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
