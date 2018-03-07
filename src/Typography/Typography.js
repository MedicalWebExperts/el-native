import React from 'react';
import { object, bool, string, number } from 'prop-types';
import { Text } from 'react-native';

import Theme from '../Theme';

const theme = Theme.getTheme();
const styles = theme.typography;

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
   * The prop "numberOfLines" receives a number which limits the lines shown
   * (an ellipsis will show at the end when truncated)
   */
  numberOfLines: number,
  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: string.isRequired,
};
const h1DefaultProps = {
  style: {},
  color: false,
  numberOfLines: null,
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
   * The prop "numberOfLines" receives a number which limits the lines shown
   * (an ellipsis will show at the end when truncated)
   */
  numberOfLines: number,
  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: string.isRequired,
};
const h2DefaultProps = {
  style: {},
  color: false,
  numberOfLines: null,
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
   * The prop "numberOfLines" receives a number which limits the lines shown
   * (an ellipsis will show at the end when truncated)
   */
  numberOfLines: number,
  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: string.isRequired,
};
const h3DefaultProps = {
  style: {},
  color: false,
  numberOfLines: null,
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
   * The prop "numberOfLines" receives a number which limits the lines shown
   * (an ellipsis will show at the end when truncated)
   */
  numberOfLines: number,
  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: string.isRequired,
};
const h4DefaultProps = {
  style: {},
  color: false,
  numberOfLines: null,
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
   * The prop "numberOfLines" receives a number which limits the lines shown
   * (an ellipsis will show at the end when truncated)
   */
  numberOfLines: number,
  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: string.isRequired,
};
const h5DefaultProps = {
  style: {},
  color: false,
  numberOfLines: null,
};
const textProptypes = {
  /**
   * The prop "style" overrides the custom styles set in the component.
   */
  style: object,
  /**
   * The prop "numberOfLines" receives a number which limits the lines shown
   * (an ellipsis will show at the end when truncated)
   */
  numberOfLines: number,
  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: string.isRequired,
};
const textDefaultProps = {
  style: {},
  numberOfLines: null,
};

/**
 * H1 component renders a RN <Text> component with custom styles.
 */
const H1 = props => (
  <Text
    numberOfLines={props.numberOfLines}
    style={props.color ? { ...styles.h1Color, ...props.style } : { ...styles.h1, ...props.style }}
  >
    {props.children}
  </Text>
);
/**
 * H2 component renders a RN <Text> component with custom styles.
 */
const H2 = props => (
  <Text
    numberOfLines={props.numberOfLines}
    style={props.color ? { ...styles.h2Color, ...props.style } : { ...styles.h2, ...props.style }}
  >
    {props.children}
  </Text>
);
/**
 * H3 component renders a RN <Text> component with custom styles.
 */
const H3 = props => (
  <Text
    numberOfLines={props.numberOfLines}
    style={props.color ? { ...styles.h3Color, ...props.style } : { ...styles.h3, ...props.style }}
  >
    {props.children}
  </Text>
);
/**
 * H4 component renders a RN <Text> component with custom styles.
 */
const H4 = props => (
  <Text
    numberOfLines={props.numberOfLines}
    style={props.color ? { ...styles.h4Color, ...props.style } : { ...styles.h4, ...props.style }}
  >
    {props.children}
  </Text>
);
/**
 * H5 component renders a RN <Text> component with custom styles.
 */
const H5 = props => (
  <Text
    numberOfLines={props.numberOfLines}
    style={props.color ? { ...styles.h5Color, ...props.style } : { ...styles.h5, ...props.style }}
  >
    {props.children}
  </Text>
);
/**
 * Text component renders a RN <Text> component with custom styles.
 */
const TextTheme = props => (
  <Text numberOfLines={props.numberOfLines} style={{ ...styles.text, ...props.style }}>
    {props.children}
  </Text>
);

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
