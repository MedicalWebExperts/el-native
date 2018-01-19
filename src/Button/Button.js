/* eslint no-console: ["error", { allow: ["error"] }] */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';

import styles from './styles';

const propTypes = {
  style: PropTypes.object,
  disabled: PropTypes.bool,
  /**
   * Text to display for blindness accessibility features
   */
  accessibilityLabel: PropTypes.string,
  text: PropTypes.string,
  block: PropTypes.bool,
  transparent: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  /*
  processing: PropTypes.bool,
  iconRight: PropTypes.string,
  iconLeft: PropTypes.string,
  icon: PropTypes.string,
  */
  onPress: PropTypes.func.isRequired,
};

const defaultProps = {
  style: {},
  disabled: false,
  accessibilityLabel: '',
  block: false,
  outline: false,
  rounded: false,
  transparent: false,
  processing: PropTypes.bool,
  text: '',
  iconRight: PropTypes.string,
  iconLeft: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

const accessibilityTraits = ['button'];
let buttonStyles = styles.button;
let textStyles = styles.text;

const Button = (props) => {
  if (props.block) {
    buttonStyles = { ...buttonStyles, ...{ width: '100%' } };
  }
  if (props.transparent) {
    buttonStyles = { ...buttonStyles, ...{ backgroundColor: 'transparent', elevation: 0 } };
    textStyles = { ...textStyles, color: 'black' };
  }
  if (props.outline) {
    buttonStyles = { ...buttonStyles, ...{ backgroundColor: 'transparent', elevation: 1 } };
  }
  if (props.rounded) {
    buttonStyles = { ...buttonStyles, ...{ borderRadius: 15 } };
  }
  return (
    <Touchable
      disabled={props.disabled}
      onPress={props.onPress}
      accessibilityLabel={props.accessibilityLabel}
      accessibilityTraits={accessibilityTraits}
    >
      <View style={{ ...buttonStyles, ...props.style }}>
        <Text style={textStyles} disabled={props.disabled}>
          {props.text}
        </Text>
      </View>
    </Touchable>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
