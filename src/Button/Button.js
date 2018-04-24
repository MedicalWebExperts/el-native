/* eslint no-console: ["error", { allow: ["error"] }] */
import React from 'react';
import { bool, string, func, number, object } from 'prop-types';
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import Icon from '../Icon/Icon';

import Theme from '../Theme';

const theme = Theme.getTheme();
const styles = theme.button;

const propTypes = {
  /**
   * The object to overwrite the background styles
   */
  backgroundStyles: object,
  /**
   * The object to overwrite the text styles
   */
  textStyles: object,
  /**
   * The object to overwrite the disabled styles
   */
  disabledStyles: object,
  /**
   * Represent as a disabled
   */
  disabled: bool,
  /**
   * Text to display for blindness accessibility features
   */
  accessibilityLabel: string,
  /**
   * The label of the button
   */
  text: string,
  /**
   * Display as a block, with 100% of width
   */
  block: bool,
  /**
   * No background and no borders
   */
  transparent: bool,
  /**
   * Display just the borders
   */
  outline: bool,
  /**
   * Color for the borders (outline only)
   */
  outlineColor: string,
  /**
   * Dimensions of the rounded button
   */
  roundedDimensions: number,
  /**
   * Shows an spinner
   */
  processing: bool,
  /**
   * The name of the icon that will be placed on the right
   */
  iconRight: string,
  /**
   * The name of the icon that will be placed on the left
   */
  iconLeft: string,
  /**
   * The name of the icon
   */
  icon: string,
  /**
   * The callback function
   */
  onPress: func.isRequired,
};

const defaultProps = {
  backgroundStyles: {},
  textStyles: {},
  disabledStyles: {},
  disabled: false,
  accessibilityLabel: '',
  block: false,
  outline: false,
  outlineColor: theme.colors.primary,
  roundedDimensions: 0,
  transparent: false,
  processing: false,
  text: '',
  iconRight: '',
  iconLeft: '',
  icon: '',
  onPress: null,
};

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

const accessibilityTraits = ['button'];

let textStyles = styles.text;

const renderProcessing = (text, txtStyles) => (
  <View style={styles.iconWrapper}>
    <ActivityIndicator size="small" color={txtStyles.color} />
    {!!text && <Text style={[txtStyles, styles.textWithIconLeft]}>{text}</Text>}
  </View>
);

const renderText = (text, disabled, txtStyles) => (
  <Text style={txtStyles} disabled={disabled}>
    {text}
  </Text>
);

const renderIconLeft = (text, disabled, txtStyles, icon) => (
  <View style={styles.iconWrapper}>
    <Icon color={txtStyles.color} size={txtStyles.fontSize} name={icon} />
    <Text style={[txtStyles, styles.textWithIconLeft]} disabled={disabled}>
      {text}
    </Text>
  </View>
);

const renderIconRight = (text, disabled, txtStyles, icon) => (
  <View style={styles.iconWrapper}>
    <Text style={[txtStyles, styles.textWithIconRight]} disabled={disabled}>
      {text}
    </Text>
    <Icon color={txtStyles.color} size={txtStyles.fontSize} name={icon} />
  </View>
);

const renderContent = (text, disabled, icon, iconLeft, iconRight, txtStyles, processing) => {
  if (processing) {
    return renderProcessing(text, txtStyles);
  }
  if (iconLeft) {
    return renderIconLeft(text, disabled, txtStyles, iconLeft);
  }
  if (iconRight) {
    return renderIconRight(text, disabled, txtStyles, iconRight);
  }
  if (!icon) {
    return renderText(text, disabled, txtStyles);
  }

  return (
    <View style={{ padding: txtStyles.padding }}>
      <Icon color={txtStyles.color} size={txtStyles.fontSize} name={icon} />
    </View>
  );
};

const Button = (props) => {
  const {
    text, disabled, icon, iconLeft, iconRight, processing,
  } = props;
  let buttonStyles = styles.default;
  let containerStyles = styles.container;

  if (props.block) {
    buttonStyles = { ...buttonStyles, width: '100%' };
    containerStyles = { ...containerStyles, width: '100%' };
  }
  if (props.transparent) {
    buttonStyles = { ...buttonStyles, ...styles.transparent };
    textStyles = { ...textStyles };
  }
  if (props.outline) {
    buttonStyles = { ...buttonStyles, ...styles.outline, borderColor: props.outlineColor };
    textStyles = { ...textStyles, color: props.outlineColor };
  }
  if (props.disabled) {
    buttonStyles = { ...buttonStyles, ...styles.disabled, ...props.disabledStyles };
    textStyles = { ...textStyles, ...styles.disabledText };
  }
  if (props.roundedDimensions) {
    buttonStyles = {
      ...buttonStyles,
      ...{
        width: props.roundedDimensions,
        height: props.roundedDimensions,
        borderRadius: parseInt(props.roundedDimensions / 2, 10),
      },
    };
  }
  return (
    <Touchable
      disabled={props.disabled}
      onPress={props.onPress}
      accessibilityLabel={props.accessibilityLabel}
      accessibilityTraits={accessibilityTraits}
      style={containerStyles}
    >
      <View style={{ ...buttonStyles, ...props.backgroundStyles }}>
        {renderContent(
          text,
          disabled,
          icon,
          iconLeft,
          iconRight,
          { ...textStyles, ...props.textStyles },
          processing,
        )}
      </View>
    </Touchable>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
