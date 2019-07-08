"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _reactNative = require("react-native");

var _colors = _interopRequireDefault(require("../Theme/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * Action to execute when the user toggles the switch.
   */
  onPress: _propTypes.func,

  /**
   * Custom style.
   */
  style: _propTypes.object,

  /**
   * Background color when the switch is turned on. Default: Theme primary color.
   */
  color: _propTypes.string,

  /**
   * Background color when the switch is turned off. Default: React Native's default grey color.
   */
  colorOff: _propTypes.string,

  /**
   * The value of the switch. If true the switch will be turned on. Default: false.
   */
  value: _propTypes.bool,

  /**
   * If true the user won't be able to toggle the switch. Default: false.
   */
  disabled: _propTypes.bool,

  /**
   * Color of the switch circle.
   */
  thumbTintColor: _propTypes.string
};
var defaultProps = {
  onPress: null,
  style: {},

  /**
   * TODO: Replace with theme primary color.
   */
  color: _colors.default.primary,
  colorOff: null,
  value: false,
  disabled: false,
  thumbTintColor: null
};
/**
 * Boolean input.
 *
 * Requires a onPress callback that updates the `value` prop in order to reflect user actions.
 * If no callback is provided, the component will continue to render the value supplied.
 */

var Switch = function Switch(props) {
  return _react.default.createElement(_reactNative.Switch, {
    style: props.style,
    onValueChange: props.onPress && typeof props.onPress === 'function' ? props.onPress : function () {},
    onTintColor: props.color,
    tintColor: props.colorOff,
    value: props.value,
    disabled: props.disabled,
    thumbTintColor: props.thumbTintColor
  });
};

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;
var _default = Switch;
exports.default = _default;