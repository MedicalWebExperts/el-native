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

var styles = theme.avatar;
var propTypes = {
  /**
   * The prop "square" is a boolean that when present makes the Avatar squared.
   * In abscence the shape will be rounded.
   */
  square: _propTypes.bool,

  /**
   * The prop "size" offers 3 custom sizes to choose from. In abscence the default is medium.
   * The other sizes available are "large" and "small"
   */
  size: (0, _propTypes.oneOf)(['large', 'medium', 'small']),

  /**
   * The prop "borderColor" defines the color of the border.
   * This prop will not work without the "borderThickness" prop present.
   */
  borderColor: _propTypes.string,

  /**
   * The prop "borderThickness" determines the width of the border of the Avatar.
   * Expects a number. The default is 0.
   */
  borderThickness: _propTypes.number,

  /**
   * The prop "placeholder" can be used as a default image if no image is present in "source" prop.
   */
  placeholder: (0, _propTypes.oneOfType)([_propTypes.number, _propTypes.object]),

  /**
   * The prop "source" is the main prop, and expects a string or a uri to show the image in Avatar.
   */
  source: _propTypes.string
};
var defaultProps = {
  square: false,
  size: 'medium',
  borderColor: '',
  borderThickness: 0,
  placeholder: {},
  source: ''
};

var getSize = function getSize(size) {
  if (size === 'large') {
    return styles.avatarLarge;
  } else if (size === 'small') {
    return styles.avatarSmall;
  }

  return styles.default;
};

var getStyles = function getStyles(props) {
  var fullStyles = _objectSpread({}, styles.default);

  if (props.borderThickness) {
    fullStyles = Object.assign(fullStyles, {
      borderWidth: props.borderThickness
    });
  }

  if (props.borderColor) {
    fullStyles = Object.assign(fullStyles, {
      borderColor: props.borderColor
    });
  }

  if (props.size) {
    fullStyles = Object.assign(fullStyles, getSize(props.size));
  }

  if (props.square) {
    fullStyles = Object.assign(fullStyles, styles.avatarSquare);
  }

  return fullStyles;
};
/**
 * Avatar component is a wrapper over RN <Image> with custom styles
 * applied and with an interface that let users change certain props with ease.
 */


var Avatar = function Avatar(props) {
  return _react.default.createElement(_reactNative.Image, {
    source: props.source ? {
      uri: props.source
    } : props.placeholder,
    style: getStyles(props),
    borderThickness: props.borderThickness,
    borderColor: props.borderColor,
    square: props.square,
    size: props.size
  });
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;
var _default = Avatar;
exports.default = _default;