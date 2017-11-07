import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const propTypes = {
  children: PropTypes.node,
  gradientColors: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
  style: PropTypes.object,
};

const defaultProps = {
  children: undefined,
  gradientColors: [],
  locations: [0.3, 0.6, 1],
  style: {},
};

// locations has to have the same amount as colors, if not a warning is raised

function Gradient({ children, gradientColors, locations, style }) {
  const stylesCommon = style ? StyleSheet.flatten([styles, style]) : styles;
  const gradient = (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 1 }}
      end={{ x: 0.8, y: 1 }}
      locations={locations}
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
