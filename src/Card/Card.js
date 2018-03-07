import React from 'react';
import { WebView, Image, View } from 'react-native';
import { bool, object, string, func, number, node, oneOf } from 'prop-types';

import Theme from '../Theme';
import ComposedRow from '../ComposedRow/ComposedRow';
import { Row } from '../Layout/Layout';

const theme = Theme.getTheme();
const styles = theme.card;

const cardPropTypes = {
  /**
   * Gives the Card a raised style by adding shadow
   */
  raised: bool,
  /**
   * Custom styling for Card
   */
  style: object, // eslint-disable-line react/no-unused-prop-types
  /**
   * Children expected inside the Card.
   */
  children: node.isRequired,
};

const cardHeaderPropTypes = {
  /**
   * Avatar shown in the left side of the CardHeader.
   */
  avatar: string,
  /**
   * Avatar size. Default: 'small'.
   */
  avatarSize: oneOf(['small', 'medium', 'large']),
  /**
   * Passing this prop instead of avatar, expects an Icon.
   */
  leftIcon: string,
  /**
   * Custom styles for the leftIcon.
   */
  leftIconStyle: object,
  /**
   * Custom style for CardHeader.
   */
  style: object,
  /**
   * Main title of CardHeader.
   */
  title: string,
  /**
   * Small text underneath the title.
   */
  subTitle: string,
  /**
   * This props expects an Icon that could lead to an action.
   */
  rightIcon: string,
  /**
   * Function to execute when rightIcon is pressed.
   */
  rightIconOnPress: func,
};

const cardBodyPropTypes = {
  /**
   * Custom style for CardBody.
   */
  style: object,
  /**
   * Size in number for the flex property in CardBody.
   */
  size: number,
  /**
   * Children expected inside the CardBody.
   */
  children: node.isRequired,
};

const cardFooterPropTypes = {
  /**
   * Expects an Icon to be shown at the left of CardFooter.
   */
  leftIcon: string,
  /**
   * Custom styles for leftIcon (mainly used for color).
   */
  leftIconStyle: object,
  /**
   * Size in number for the Icon. Default: 30.
   */
  leftIconSize: number,
  /**
   * Custom styles for CardFooter.
   */
  style: object,
  /**
   * Icon to show on the center of CardFooter. Is always small.
   */
  subTitleIcon: string,
  /**
   * Text to show at the right of the Icon.
   */
  subTitleText: string,
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
  subTitleIcon: '',
  subTitleText: '',
};

const cardMediaDefaultProps = {
  image: '',
  video: '',
  style: {},
};

const getStyles = (props) => {
  let fullStyles = { ...styles.default };
  if (props.raised) {
    fullStyles = Object.assign(fullStyles, styles.raised);
  }
  if (props.style) {
    fullStyles = Object.assign(fullStyles, props.style);
  }
  return fullStyles;
};

const Card = props => (
  <View style={getStyles(props)} elevation={props.raised && 8}>
    {props.children}
  </View>
);

const CardHeader = props => (
  <ComposedRow
    avatar={props.avatar}
    avatarSize={props.avatarSize}
    leftIcon={props.leftIcon}
    leftIconStyle={props.leftIconStyle}
    style={props.style}
    title={props.title}
    subTitle={props.subTitle}
    rightIcon={props.rightIcon}
    rightIconOnPress={props.rightIconOnPress}
  />
);

const CardBody = props => (
  <Row style={{ ...styles.body, ...props.style }} size={props.size}>
    {props.children}
  </Row>
);

const CardFooter = props => (
  <ComposedRow
    leftIcon={props.leftIcon}
    leftIconStyle={props.leftIconStyle}
    leftIconSize={props.leftIconSize}
    style={props.style}
    subTitleIcon={props.subTitleIcon}
    subTitleText={props.subTitleText}
  />
);

const CardMedia = props => (
  <Row>
    {props.video ? (
      <WebView source={{ uri: props.video }} style={{ ...styles.media, ...props.style }} />
    ) : (
      <Image source={{ uri: props.image }} style={{ ...styles.media, ...props.style }} />
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
