import React from 'react';
import { bool, func, object, string } from 'prop-types';
import { Switch as SwitchRN } from 'react-native';

import colors from '../Theme/colors';

const propTypes = {
  /**
   * Action to execute when the user toggles the switch.
   */
  onPress: func,
  /**
   * Custom style.
   */
  style: object,
  /**
   * Background color when the switch is turned on. Default: Theme primary color.
   */
  color: string,
  /**
   * Background color when the switch is turned off. Default: React Native's default grey color.
   */
  colorOff: string,
  /**
   * The value of the switch. If true the switch will be turned on. Default: false.
   */
  value: bool,
  /**
   * If true the user won't be able to toggle the switch. Default: false.
   */
  disabled: bool,
  /**
   * Color of the switch circle.
   */
  thumbTintColor: string,
};

const defaultProps = {
  onPress: null,
  style: {},
  /**
   * TODO: Replace with theme primary color.
   */
  color: colors.primary,
  colorOff: null,
  value: false,
  disabled: false,
  thumbTintColor: null,
};

/**
 * Boolean input.
 *
 * Requires a onPress callback that updates the `value` prop in order to reflect user actions.
 * If no callback is provided, the component will continue to render the value supplied.
 */
const Switch = props => (
  <SwitchRN
    style={props.style}
    onValueChange={props.onPress && typeof props.onPress === 'function' ? props.onPress : () => {}}
    onTintColor={props.color}
    tintColor={props.colorOff}
    value={props.value}
    disabled={props.disabled}
    thumbTintColor={props.thumbTintColor}
  />
);

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
