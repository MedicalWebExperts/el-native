import React from 'react';
import { WebView, Image, View } from 'react-native';
import { bool, object, string, func, number, node } from 'prop-types';

import Theme from '../Theme';
import ComposedRow from '../ComposedRow/ComposedRow';
import { Row } from '../Layout/Layout';

const theme = Theme.getTheme();
const styles = theme.card;

const cardPropTypes = {
  raised: bool,
  style: object,
  children: node.isRequired,
};

const cardHeaderPropTypes = {
  avatar: string,
  avatarSize: string,
  leftIcon: string,
  leftIconStyle: object,
  style: object,
  title: string,
  subTitle: string,
  rightIcon: string,
  rightIconOnPress: func,
};

const cardBodyPropTypes = {
  style: object,
  size: number,
  children: node.isRequired,
};

const cardFooterPropTypes = {
  leftIcon: string,
  leftIconStyle: object,
  leftIconSize: number,
  style: object,
  centerIcon: string,
  centerText: string,
};

const cardMediaPropTypes = {
  image: string,
  video: string,
  style: object,
};

const cardDefaultProps = {
  raised: false,
  style: {},
};

const cardHeaderDefaultProps = {
  avatar: '',
  avatarSize: 'small',
  leftIcon: '',
  leftIconStyle: {},
  style: {},
  title: '',
  subTitle: '',
  rightIcon: '',
  rightIconOnPress: () => {},
};

const cardBodyDefaultProps = {
  style: {},
  size: null,
};

const cardFooterDefaultProps = {
  leftIcon: '',
  leftIconStyle: {},
  leftIconSize: 30,
  style: {},
  centerIcon: '',
  centerText: '',
};

const cardMediaDefaultProps = {
  image: '',
  video: '',
  style: {},
};

const Card = props => (
  <View
    style={[styles.card, props.raised && styles.cardRaised, props.style]}
    elevation={props.raised && 8}
  >
    {props.children}
  </View>
);

const CardHeader = props => (
  <ComposedRow
    avatar={props.avatar}
    avatarSize={props.avatarSize}
    leftIcon={props.leftIcon}
    leftIconStyle={props.leftIconStyle}
    rowStyle={props.style}
    title={props.title}
    subTitle={props.subTitle}
    rightIcon={props.rightIcon}
    rightIconOnPress={props.rightIconOnPress}
  />
);

const CardBody = props => (
  <Row style={props.style} size={props.size}>
    {props.children}
  </Row>
);

const CardFooter = props => (
  <ComposedRow
    leftIcon={props.leftIcon}
    leftIconStyle={props.leftIconStyle}
    leftIconSize={props.leftIconSize}
    rowStyle={props.style}
    subTitleIcon={props.centerIcon}
    subTitleText={props.centerText}
  />
);

const CardMedia = props => (
  <Row>
    {props.video ? (
      <WebView
        source={{ uri: props.video }}
        style={{ ...styles.media, ...props.style }}
      />
    ) : (
      <Image
        source={{ uri: props.image }}
        style={{ ...styles.media, ...props.style }}
      />
    )}
  </Row>
);

Card.propTypes = cardPropTypes;
CardHeader.propTypes = cardHeaderPropTypes;
CardBody.propTypes = cardBodyPropTypes;
CardFooter.propTypes = cardFooterPropTypes;
CardMedia.propTypes = cardMediaPropTypes;

Card.defaultProps = cardDefaultProps;
CardHeader.defaultProps = cardHeaderDefaultProps;
CardBody.defaultProps = cardBodyDefaultProps;
CardFooter.defaultProps = cardFooterDefaultProps;
CardMedia.defaultProps = cardMediaDefaultProps;

export { Card, CardHeader, CardBody, CardFooter, CardMedia };
