"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _reactNative = require("react-native");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * Color of the icon. Default: Theme white color.
   */
  color: _propTypes.string,

  /**
   * Size of the icon. Default: 16.
   */
  size: _propTypes.number,

  /**
   * Checkbox value Default: false.
   */
  checked: _propTypes.bool,

  /**
   * Function to be executed on press.
   */
  onPress: _propTypes.func
};
var defaultProps = {
  color: 'grey',
  size: 32,
  checked: false,
  onPress: function onPress() {}
};

var Checkbox = function Checkbox(props) {
  var getName = function getName(checked) {
    return "".concat(_reactNative.Platform.OS === 'ios' ? 'ios' : 'md', "-").concat(checked ? 'checkbox' : 'square', "-outline");
  };

  var iconProps = {
    name: getName(props.checked),
    size: props.size,
    color: props.color
  };
  return _react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: props.onPress
  }, _react.default.createElement(_Icon.default, iconProps));
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
var _default = Checkbox;
exports.default = _default;