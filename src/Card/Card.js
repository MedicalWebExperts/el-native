import React from 'react';
import { View } from 'react-native';
import { bool, object } from 'prop-types';

const propTypes = {
  raised: bool,
  style: object,
};
const defaultProps = {
  raised: true,
  style: {},
};

const Card = props => (
  <View style={[...styles.card, props.raised && ...styles.cardRaised, ...props.style]} />
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
