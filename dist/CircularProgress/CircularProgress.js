"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _propTypes = require("prop-types");

var _reactNativeLinearGradient = _interopRequireDefault(require("react-native-linear-gradient"));

var _Typography = require("../Typography/Typography");

var _Theme = _interopRequireDefault(require("../Theme"));

var _colors = _interopRequireDefault(require("../Theme/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = _Theme.default.getTheme();

var baseStyles = theme.circularProgress;
var propTypes = {
  size: _propTypes.number.isRequired,
  border: _propTypes.number,
  backgroundColor: _propTypes.string.isRequired,
  text: _propTypes.string,
  innerText: _propTypes.string,
  textColor: _propTypes.string,
  colors: _propTypes.array.isRequired
};
var defaultProps = {
  border: 20,
  textColor: null,
  text: null,
  innerText: null
};

var getStyles = function getStyles(_ref) {
  var size = _ref.size,
      border = _ref.border,
      textColor = _ref.textColor;
  baseStyles.linearGradient = _objectSpread({}, baseStyles.linearGradient, {
    height: size,
    width: size,
    borderRadius: size * 0.5
  });
  baseStyles.innerView = _objectSpread({}, baseStyles.innerView, {
    height: size - border,
    width: size - border,
    borderRadius: (size - border) * 0.5
  });
  baseStyles.innerText = {
    fontSize: size * 0.3,
    color: textColor || _colors.default.text
  };
  baseStyles.outerText = {
    fontSize: size * 0.1,
    color: textColor || _colors.default.text
  };
  return baseStyles;
};

var CircularProgress = function CircularProgress(props) {
  var size = props.size,
      border = props.border,
      textColor = props.textColor;
  var styles = getStyles({
    size: size,
    border: border,
    textColor: textColor
  }); // Magic to work on android with only 1 color in array.

  var colors = props.colors.length > 1 ? props.colors : [].concat(_toConsumableArray(props.colors), _toConsumableArray(props.colors));
  return _react.default.createElement(_reactNative.View, {
    style: styles.wrapper
  }, _react.default.createElement(_reactNativeLinearGradient.default, {
    colors: colors,
    style: styles.linearGradient
  }, _react.default.createElement(_reactNative.View, {
    style: [styles.innerView, {
      backgroundColor: props.backgroundColor
    }]
  }, props.innerText && _react.default.createElement(_Typography.H1, {
    style: styles.innerText
  }, props.innerText))), props.text && _react.default.createElement(_reactNative.View, {
    style: styles.textWrapper
  }, _react.default.createElement(_Typography.H1, {
    style: styles.outerText
  }, props.text)));
};

CircularProgress.propTypes = propTypes;
CircularProgress.defaultProps = defaultProps;
var _default = CircularProgress;
exports.default = _default;