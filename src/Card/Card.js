import React from 'react';
import { WebView, Image, View } from 'react-native';
import { bool, object, string, func, number } from 'prop-types';

import Theme from '../Theme';
import ComposedRow from '../ComposedRow/ComposedRow';
import { Row } from '../Layout/Layout';

const theme = Theme.getTheme();
const styles = theme.card;

const cardPropTypes = {
  raised: bool,
  style: object,
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
};

const cardFooterPropTypes = {
  avatar: string,
  avatarSize: string,
  leftIcon: string,
  leftIconStyle: object,
  style: object,
  centerIcon: string,
  centerText: string,
  rightIcon: string,
  rightIconOnPress: func,
};

const cardMediaPropTypes = {
  image: string,
  video: string,
};

const cardDefaultProps = {
  raised: false,
  style: {},
};

const cardHeaderDefaultProps = {
  avatar: '',
  avatarSize: '',
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
  avatar: '',
  avatarSize: '',
  leftIcon: '',
  leftIconStyle: {},
  style: {},
  centerIcon: '',
  centerText: '',
  rightIcon: '',
  rightIconOnPress: () => {},
};

const cardMediaDefaultProps = {
  image: '',
  video: '',
};

const Card = props => (
  <View
    style={[styles.card, props.raised && styles.cardRaised, props.style]}
    elevation={props.raised && 8}
  />
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

const CardBody = props => <Row style={props.style} size={props.size} />;

const CardFooter = props => (
  <ComposedRow
    avatar={props.avatar}
    avatarSize={props.avatarSize}
    leftIcon={props.leftIcon}
    leftIconStyle={props.leftIconStyle}
    rowStyle={props.style}
    subTitleIcon={props.centerIcon}
    subTitleText={props.centerText}
    rightIcon={props.rightIcon}
    rightIconOnPress={props.rightIconOnPress}
  />
);

const CardMedia = props => (
  <Row>
    {!!props.video &&
      !props.image && <WebView source={{ uri: props.video }} style={styles.webView} />}
    {!!props.image && !props.video && <Image style={styles.image} source={{ uri: props.image }} />}
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

export default { Card, CardHeader, CardBody, CardFooter, CardMedia };
