/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const Component = ({ text }, { theme }) => <Text style={theme.color}>{text}</Text>;

Component.contextTypes = {
  theme: PropTypes.object,
};

export default Component;
