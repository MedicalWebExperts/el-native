"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _Ionicons = _interopRequireDefault(require("react-native-vector-icons/Ionicons"));

var _colors = _interopRequireDefault(require("../Theme/colors"));

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
   * What icon to show, see Icon Explorer app or one of the links above. Default: heart.
   */
  name: _propTypes.string
};
var defaultProps = {
  color: _colors.default.light,
  size: 16,
  name: 'ios-heart'
};

var Icon = function Icon(props) {
  return _react.default.createElement(_Ionicons.default, props);
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
var _default = Icon;
exports.default = _default;