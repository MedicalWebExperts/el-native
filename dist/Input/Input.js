"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _reactNative = require("react-native");

var _Theme = _interopRequireDefault(require("../Theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = _Theme.default.getTheme();

var styles = theme.input;
var propTypes = {
  /**
   * Shows a placeholder with the provided value.
   */
  placeholder: _propTypes.string,

  /**
   * This prop expects a function that will be executed when the user types.
   */
  onChangeText: _propTypes.func,

  /**
   * Shows the Input as a Text Area.
   */
  multiline: _propTypes.bool,

  /**
   * Determines the number of lines of the Text Area. The default is 4.
   */
  numberOfLines: _propTypes.number,

  /**
   * Boolean that allows the Input to autocorrect the text user is typing, defaulted to "false".
   */
  autoCorrect: _propTypes.bool,

  /**
   * If "false" the Input will be readonly. The default is "true".
   */
  editable: _propTypes.bool,

  /**
   * Selects text on focus with this prop. Default is "false".
   */
  selectTextOnFocus: _propTypes.bool,

  /**
   * Boolean that gives an error styling and conditions the errorText to be present.
   */
  error: _propTypes.bool,

  /**
   * Shows a provided text under the Input to give more clarity on the kind of error.
   */
  errorText: _propTypes.string,

  /**
   * Prop for custom styling.
   */
  style: _propTypes.object,

  /**
   * Predefined shapes, our customized Inputs. It could be one of "underline", "squared" or
   * "rounded". The default is "underline".
   */
  type: (0, _propTypes.oneOf)(['underline', 'squared', 'rounded']),

  /**
   * Prop for changing the placeholder color.
   */
  placeholderTextColor: _propTypes.string,

  /**
   * Function to be executed when input is focused.
   */
  onFocus: _propTypes.func,

  /**
   * Value of the Input
   */
  value: _propTypes.string,

  /**
   * Type of the keyboard
   */
  keyboardType: _propTypes.string,

  /**
   * Maximum characters allowed
   */
  maxLength: _propTypes.number,

  /**
   * Sets the return key to the label. (Ex. "search")
   */
  returnKeyType: _propTypes.string,

  /**
   * Callback that is called when text input ends.
   */
  onEndEditing: _propTypes.func,
  errorLabel: _propTypes.bool
};
var defaultProps = {
  placeholder: 'Placeholder text',
  onChangeText: function onChangeText() {},
  multiline: false,
  numberOfLines: 4,
  autoCorrect: false,
  editable: true,
  selectTextOnFocus: false,
  error: false,
  errorText: 'Error text',
  style: {},
  type: 'underline',
  placeholderTextColor: theme.colors.text,
  onFocus: function onFocus() {},
  value: '',
  keyboardType: 'default',
  maxLength: 200,
  returnKeyType: _reactNative.Platform.OS === 'android' ? 'none' : 'default',
  onEndEditing: function onEndEditing() {
    return null;
  },
  errorLabel: true
};

var defaultStyles = function defaultStyles(error, type) {
  var customStyles = styles.base;

  if (error) {
    customStyles = _objectSpread({}, customStyles, styles.error);
  }

  if (type) {
    switch (type) {
      case 'rounded':
        return _objectSpread({}, customStyles, styles.rounded);

      case 'squared':
        return _objectSpread({}, customStyles, styles.squared);

      default:
        return customStyles;
    }
  }

  return customStyles;
};
/**
 * Input component is a wrapper over React Native Input with 3 predefined styles added
 * and the possibility of further customizing.
 */


var Input = function Input(props) {
  var placeholder = props.placeholder,
      multiline = props.multiline,
      numberOfLines = props.numberOfLines,
      autoCorrect = props.autoCorrect,
      editable = props.editable,
      selectTextOnFocus = props.selectTextOnFocus,
      error = props.error,
      errorText = props.errorText,
      style = props.style,
      placeholderTextColor = props.placeholderTextColor,
      onFocus = props.onFocus,
      value = props.value,
      onChangeText = props.onChangeText,
      type = props.type,
      keyboardType = props.keyboardType,
      maxLength = props.maxLength,
      returnKeyType = props.returnKeyType,
      onEndEditing = props.onEndEditing;
  return _react.default.createElement(_reactNative.View, {
    style: styles.container
  }, _react.default.createElement(_reactNative.TextInput, {
    value: value,
    placeholder: placeholder,
    onChangeText: onChangeText,
    multiline: multiline,
    numberOfLines: numberOfLines,
    autoCorrect: autoCorrect,
    editable: editable,
    selectTextOnFocus: selectTextOnFocus,
    style: [defaultStyles(error, type), style],
    placeholderTextColor: placeholderTextColor,
    underlineColorAndroid: "transparent",
    onFocus: onFocus,
    keyboardType: keyboardType,
    maxLength: maxLength,
    returnKeyType: returnKeyType,
    onEndEditing: onEndEditing
  }), props.errorLabel && _react.default.createElement(_reactNative.Text, {
    style: styles.errorText
  }, error && !!errorText && errorText));
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
var _default = Input;
exports.default = _default;