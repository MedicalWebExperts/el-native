/* eslint no-console: ["error", { allow: ["error"] }] */
import React from 'react';
import PropTypes from 'prop-types';
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
  backgroundStyles: PropTypes.object,
  /**
   * The object to overwrite the text styles
   */
  textStyles: PropTypes.object,
  /**
   * Represent as a disabled
   */
  disabled: PropTypes.bool,
  /**
   * Text to display for blindness accessibility features
   */
  accessibilityLabel: PropTypes.string,
  /**
   * The label of the button
   */
  text: PropTypes.string,
  /**
   * Display as a block, with 100% of width
   */
  block: PropTypes.bool,
  /**
   * No background and no borders
   */
  transparent: PropTypes.bool,
  /**
   * Display just the borders
   */
  outline: PropTypes.bool,
  /**
   * Dimensions of the rounded button
   */
  roundedDimensions: PropTypes.number,
  /**
   * Shows an spinner
   */
  processing: PropTypes.bool,
  /**
   * The name of the icon that will be placed on the right
   */
  iconRight: PropTypes.string,
  /**
   * The name of the icon that will be placed on the left
   */
  iconLeft: PropTypes.string,
  /**
   * The name of the icon
   */
  icon: PropTypes.string,
  /**
   * The callback function
   */
  onPress: PropTypes.func.isRequired,
};

const defaultProps = {
  backgroundStyles: {},
  textStyles: {},
  disabled: false,
  accessibilityLabel: '',
  block: false,
  outline: false,
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
  const { text, disabled, icon, iconLeft, iconRight, processing } = props;
  let buttonStyles = styles.default;

  if (props.block) {
    buttonStyles = { ...buttonStyles, ...{ width: '100%' } };
  }
  if (props.transparent) {
    buttonStyles = { ...buttonStyles, ...{ backgroundColor: 'transparent', elevation: 0 } };
    textStyles = { ...textStyles };
  }
  if (props.outline) {
    buttonStyles = { ...buttonStyles, ...{ backgroundColor: 'transparent', elevation: 1 } };
  }
  if (props.disabled) {
    buttonStyles = { ...buttonStyles, ...styles.disabled };
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
