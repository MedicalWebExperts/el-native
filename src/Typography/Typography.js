import React from 'react';
import { object, bool, string } from 'prop-types';
import { Text } from 'react-native';

import Styles from './styles';

const h1Proptypes = {
  /**
   * The prop "style" overrides the custom styles set in the component.
   */
  style: object,
  /**
   * The prop "color" defines the color of the text.
   */
  color: bool,
  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: string.isRequired,
};
const h1DefaultProps = {
  style: {},
  color: false,
};
const h2Proptypes = {
  /**
   * The prop "style" overrides the custom styles set in the component.
   */
  style: object,
  /**
   * The prop "color" defines the color of the text.
   */
  color: bool,
  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: string.isRequired,
};
const h2DefaultProps = {
  style: {},
  color: false,
};
const h3Proptypes = {
  /**
   * The prop "style" overrides the custom styles set in the component.
   */
  style: object,
  /**
   * The prop "color" defines the color of the text.
   */
  color: bool,
  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: string.isRequired,
};
const h3DefaultProps = {
  style: {},
  color: false,
};
const h4Proptypes = {
  /**
   * The prop "style" overrides the custom styles set in the component.
   */
  style: object,
  /**
   * The prop "color" defines the color of the text.
   */
  color: bool,
  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: string.isRequired,
};
const h4DefaultProps = {
  style: {},
  color: false,
};
const h5Proptypes = {
  /**
   * The prop "style" overrides the custom styles set in the component.
   */
  style: object,
  /**
   * The prop "color" defines the color of the text.
   */
  color: bool,
  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: string.isRequired,
};
const h5DefaultProps = {
  style: {},
  color: false,
};
const textProptypes = {
  /**
   * The prop "style" overrides the custom styles set in the component.
   */
  style: object,
  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: string.isRequired,
};
const textDefaultProps = {
  style: {},
};

/**
 * H1 component renders a RN <Text> component with custom styles.
 */
const H1 = props => (
  <Text
    style={props.color ? { ...Styles.h1Color, ...props.style } : { ...Styles.h1, ...props.style }}
  >
    {props.children}
  </Text>
);
/**
 * H2 component renders a RN <Text> component with custom styles.
 */
const H2 = props => (
  <Text
    style={props.color ? { ...Styles.h2Color, ...props.style } : { ...Styles.h2, ...props.style }}
  >
    {props.children}
  </Text>
);
/**
 * H3 component renders a RN <Text> component with custom styles.
 */
const H3 = props => (
  <Text
    style={props.color ? { ...Styles.h3Color, ...props.style } : { ...Styles.h3, ...props.style }}
  >
    {props.children}
  </Text>
);
/**
 * H4 component renders a RN <Text> component with custom styles.
 */
const H4 = props => (
  <Text
    style={props.color ? { ...Styles.h4Color, ...props.style } : { ...Styles.h4, ...props.style }}
  >
    {props.children}
  </Text>
);
/**
 * H5 component renders a RN <Text> component with custom styles.
 */
const H5 = props => (
  <Text
    style={props.color ? { ...Styles.h5Color, ...props.style } : { ...Styles.h5, ...props.style }}
  >
    {props.children}
  </Text>
);
/**
 * Text component renders a RN <Text> component with custom styles.
 */
const TextTheme = props => <Text style={{ ...Styles.text, ...props.style }}>{props.children}</Text>;

H1.propTypes = h1Proptypes;
H1.defaultProps = h1DefaultProps;
H2.propTypes = h2Proptypes;
H2.defaultProps = h2DefaultProps;
H3.propTypes = h3Proptypes;
H3.defaultProps = h3DefaultProps;
H4.propTypes = h4Proptypes;
H4.defaultProps = h4DefaultProps;
H5.propTypes = h5Proptypes;
H5.defaultProps = h5DefaultProps;
TextTheme.propTypes = textProptypes;
TextTheme.defaultProps = textDefaultProps;

export { H1, H2, H3, H4, H5, TextTheme as Text };
