"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _reactNative = require("react-native");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _Theme = _interopRequireDefault(require("../Theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = _Theme.default.getTheme();

var styles = theme.button;
var propTypes = {
  /**
   * The object to overwrite the background styles
   */
  backgroundStyles: _propTypes.object,

  /**
   * The object to overwrite the text styles
   */
  textStyles: _propTypes.object,

  /**
   * The object to overwrite the disabled styles
   */
  disabledStyles: _propTypes.object,

  /**
   * The object to overwrite the disabled text styles
   */
  disabledTextStyles: _propTypes.object,

  /**
   * Represent as a disabled
   */
  disabled: _propTypes.bool,

  /**
   * Text to display for blindness accessibility features
   */
  accessibilityLabel: _propTypes.string,

  /**
   * The label of the button
   */
  text: _propTypes.string,

  /**
   * Display as a block, with 100% of width
   */
  block: _propTypes.bool,

  /**
   * No background and no borders
   */
  transparent: _propTypes.bool,

  /**
   * Display just the borders
   */
  outline: _propTypes.bool,

  /**
   * Color for the borders (outline only)
   */
  outlineColor: _propTypes.string,

  /**
   * Dimensions of the rounded button
   */
  roundedDimensions: _propTypes.number,

  /**
   * Shows an spinner
   */
  processing: _propTypes.bool,

  /**
   * The name of the icon that will be placed on the right
   */
  iconRight: _propTypes.string,

  /**
   * The name of the icon that will be placed on the left
   */
  iconLeft: _propTypes.string,

  /**
   * The name of the icon
   */
  icon: _propTypes.string,

  /**
   * The callback function
   */
  onPress: _propTypes.func.isRequired
};
var defaultProps = {
  backgroundStyles: {},
  textStyles: {},
  disabledStyles: {},
  disabledTextStyles: {},
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
  icon: ''
};
var Touchable = _reactNative.Platform.OS === 'android' ? _reactNative.TouchableNativeFeedback : _reactNative.TouchableOpacity;
var accessibilityTraits = ['button'];
var textStyles = styles.text;

var renderProcessing = function renderProcessing(text, txtStyles) {
  return _react.default.createElement(_reactNative.View, {
    style: styles.iconWrapper
  }, _react.default.createElement(_reactNative.ActivityIndicator, {
    size: "small",
    color: txtStyles.color
  }), !!text && _react.default.createElement(_reactNative.Text, {
    style: [txtStyles, styles.textWithIconLeft]
  }, text));
};

var renderText = function renderText(text, disabled, txtStyles) {
  return _react.default.createElement(_reactNative.Text, {
    style: txtStyles,
    disabled: disabled
  }, text);
};

var renderIconLeft = function renderIconLeft(text, disabled, txtStyles, icon) {
  return _react.default.createElement(_reactNative.View, {
    style: styles.iconWrapper
  }, _react.default.createElement(_Icon.default, {
    color: txtStyles.color,
    size: txtStyles.fontSize,
    name: icon
  }), _react.default.createElement(_reactNative.Text, {
    style: [txtStyles, styles.textWithIconLeft],
    disabled: disabled
  }, text));
};

var renderIconRight = function renderIconRight(text, disabled, txtStyles, icon) {
  return _react.default.createElement(_reactNative.View, {
    style: styles.iconWrapper
  }, _react.default.createElement(_reactNative.Text, {
    style: [txtStyles, styles.textWithIconRight],
    disabled: disabled
  }, text), _react.default.createElement(_Icon.default, {
    color: txtStyles.color,
    size: txtStyles.fontSize,
    name: icon
  }));
};

var renderContent = function renderContent(text, disabled, icon, iconLeft, iconRight, txtStyles, processing) {
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

  return _react.default.createElement(_reactNative.View, {
    style: {
      padding: txtStyles.padding
    }
  }, _react.default.createElement(_Icon.default, {
    color: txtStyles.color,
    size: txtStyles.fontSize,
    name: icon
  }));
};

var Button = function Button(props) {
  var text = props.text,
      disabled = props.disabled,
      icon = props.icon,
      iconLeft = props.iconLeft,
      iconRight = props.iconRight,
      processing = props.processing;
  var buttonStyles = styles.default;
  var containerStyles = styles.container;

  if (props.block) {
    buttonStyles = _objectSpread({}, buttonStyles, {
      width: '100%'
    });
    containerStyles = _objectSpread({}, containerStyles, {
      width: '100%'
    });
  }

  if (props.transparent) {
    buttonStyles = _objectSpread({}, buttonStyles, styles.transparent);
    textStyles = _objectSpread({}, textStyles);
  }

  if (props.outline) {
    buttonStyles = _objectSpread({}, buttonStyles, styles.outline, {
      borderColor: props.outlineColor
    });
    textStyles = _objectSpread({}, textStyles);
  }

  if (props.disabled) {
    buttonStyles = _objectSpread({}, buttonStyles, styles.disabled, props.disabledStyles);
    textStyles = _objectSpread({}, textStyles, styles.disabledText, props.disabledTextStyles);
  }

  if (props.roundedDimensions) {
    buttonStyles = _objectSpread({}, buttonStyles, {
      width: props.roundedDimensions,
      height: props.roundedDimensions,
      borderRadius: parseInt(props.roundedDimensions / 2, 10)
    });
  }

  return _react.default.createElement(Touchable, {
    disabled: props.disabled,
    onPress: props.onPress,
    accessibilityLabel: props.accessibilityLabel,
    accessibilityTraits: accessibilityTraits,
    style: containerStyles
  }, _react.default.createElement(_reactNative.View, {
    style: _objectSpread({}, buttonStyles, props.backgroundStyles)
  }, renderContent(text, disabled, icon, iconLeft, iconRight, _objectSpread({}, textStyles, props.textStyles), processing)));
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
var _default = Button;
exports.default = _default;