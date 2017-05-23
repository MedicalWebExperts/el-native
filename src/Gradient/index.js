import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const propTypes = {
  children: PropTypes.node,
  gradientColors: PropTypes.array.isRequired,
  style: PropTypes.object,
};

const defaultProps = {
  children: undefined,
  gradientColors: [],
  style: {},
};


function Gradient({ children, gradientColors, style }) {
  const stylesCommon = style ? StyleSheet.flatten([styles, style]) : styles;
  const gradient = (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 1 }}
      end={{ x: 0.8, y: 1 }}
      locations={[0.3, 0.6, 1]}
      style={stylesCommon.container}
    >
      {children}
    </LinearGradient>
  );
  return gradient;
}

Gradient.propTypes = propTypes;
Gradient.defaultProps = defaultProps;

export default Gradient;
