import React from 'react';
import { View } from 'react-native';
import { bool, object } from 'prop-types';

import Theme from '../Theme';
import ComposedRow from '../ComposedRow/ComposedRow';

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

const CardHeader = props => (
  <ComposedRow avatar={props.avatar} rowStyle title subTitle rightIcon rightIconOnPress />
);

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
CardHeader.propTypes = propTypes;
CardBody.propTypes = propTypes;
CardFooter.propTypes = propTypes;
Card.defaultProps = defaultProps;
CardHeader.defaultProps = defaultProps;
CardBody.defaultProps = defaultProps;
CardFooter.defaultProps = defaultProps;

export default { Card, CardHeader, CardBody, CardFooter };
