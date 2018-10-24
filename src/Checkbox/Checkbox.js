import React from 'react';
import { bool, string, number, func } from 'prop-types';
import { Platform, TouchableOpacity } from 'react-native';
import Icon from '../Icon/Icon';

const propTypes = {
  /**
   * Color of the icon. Default: Theme white color.
   */
  color: string,
  /**
   * Size of the icon. Default: 16.
   */
  size: number,
  /**
   * Checkbox value Default: false.
   */
  checked: bool,
  /**
   * Function to be executed on press.
   */
  onPress: func,
};

const defaultProps = {
  color: 'grey',
  size: 32,
  checked: false,
  onPress: () => {},
};

const Checkbox = (props) => {
  const getName = checked =>
    `${Platform.OS === 'ios' ? 'ios' : 'md'}-${checked ? 'checkbox' : 'square'}-outline`;

  const iconProps = {
    name: getName(props.checked),
    size: props.size,
    color: props.color,
  };

  return (
    <TouchableOpacity onPress={props.onPress}>
      <Icon {...iconProps} />
    </TouchableOpacity>
  );
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
