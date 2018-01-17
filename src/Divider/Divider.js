import React from 'react';
import { string, oneOf } from 'prop-types';
import { StyleSheet, View } from 'react-native';

import colors from '../styles/colors';

const lineAccent = {
  none: '0%',
  short: '20%',
  medium: '40%',
  long: '60%',
};

const styles = StyleSheet.create({
  divider: {
    height: 3,
    backgroundColor: colors.primary,
  },
  dividerWrapper: {
    width: '100%',
    height: 0.5,
    backgroundColor: colors.lightgray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const propTypes = {
  /**
   * Color of the long thin line divider. Default: Theme primary color.
   */
  color: string,
  /**
   * Color of the short thick line divider. Default: Theme light gray color.
   */
  primaryColor: string,
  /**
   * Length of the short thick line divider. Default: none.
   */
  length: oneOf(['short', 'medium', 'long', 'none']),
};
const defaultProps = {
  color: colors.lightgray,
  primaryColor: null,
  length: 'none',
};

/**
 * Divider renders a thin View to separate content.
 */
const Divider = props => (
  <View style={[styles.dividerWrapper, props.color && { backgroundColor: props.color }]}>
    <View
      style={[
        styles.divider,
        props.primaryColor && { backgroundColor: props.primaryColor },
        { width: lineAccent[props.length] },
      ]}
    />
  </View>
);

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default Divider;
