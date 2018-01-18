import React from 'react';
import { oneOfType, number, object } from 'prop-types';
import { View } from 'react-native';
import style from './style';

const CenterView = props => <View style={[style.main, props.style]}>{props.children}</View>;
CenterView.propTypes = {
  children: oneOfType([number, object]),
  style: oneOfType([number, object]),
};
CenterView.defaultProps = {
  children: null,
  style: {},
};

export default CenterView;
