import React from 'react';
import { View } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { node } from 'prop-types';

const PropTypes = {
  children: node.isRequired,
};

const LG = props => <View {...props}>{props.children}</View>;
// const LG = props => <LinearGradient {...props}>{props.children}</LinearGradient>;

LG.propTypes = PropTypes;

export default LG;
