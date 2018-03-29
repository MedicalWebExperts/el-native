/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const Component = ({ text }, { theme }) => <Text style={{ color: theme.color }}>{text}</Text>;

Component.contextTypes = {
  theme: PropTypes.shape({
    color: PropTypes.string,
  }),
};

export default Component;
