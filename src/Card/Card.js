import React from 'react';
import { View } from 'react-native';
import { bool, object } from 'prop-types';

import Theme from '../Theme';

const theme = Theme.getTheme();
const styles = theme.card;

const propTypes = {
  raised: bool,
  style: object,
};
const defaultProps = {
  raised: false,
  style: {},
};

const CardHeader = props =>
  props.avatar && <Avatar style={[styles.card, props.raised && styles.cardRaised, props.style]} />;

const CardBody = props => (
  <View
    style={[styles.card, props.raised && styles.cardRaised, props.style]}
    elevation={props.raised && 8}
  />
);

const CardFooter = props => (
  <View
    style={[styles.card, props.raised && styles.cardRaised, props.style]}
    elevation={props.raised && 8}
  />
);

const Card = props => (
  <View
    style={[styles.card, props.raised && styles.cardRaised, props.style]}
    elevation={props.raised && 8}
  />
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
