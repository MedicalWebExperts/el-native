import React from 'react';
import { string, number } from 'prop-types';
import VectorIcon from 'react-native-vector-icons/Ionicons';

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
   * What icon to show, see Icon Explorer app or one of the links above. Default: heart.
   */
  name: string,
};

const defaultProps = {
  color: 'white',
  size: 16,
  name: 'ios-heart',
};

const Icon = props => <VectorIcon {...props} />;

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
