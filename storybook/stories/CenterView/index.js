import React from 'react';
import { oneOfType, number, object } from 'prop-types';
import { View } from 'react-native';
import style from './style';

const propTypes = {
  children: oneOfType([number, object]),
  style: oneOfType([number, object]),
};

const defaultProps = {
  children: null,
  style: {},
};

const CenterView = props => <View style={[style.main, props.style]}>{props.children}</View>;

CenterView.propTypes = propTypes;
CenterView.defaultProps = defaultProps;

export default CenterView;
