"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _Avatar = _interopRequireDefault(require("../Avatar/Avatar"));

var _Layout = require("../Layout/Layout");

var _Typography = require("../Typography/Typography");

var _Theme = _interopRequireDefault(require("../Theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = _Theme.default.getTheme();

var styles = theme.composedRow;
var propTypes = {
  /**
   * Custom styling for ComposedRow
   */
  style: _propTypes.object,

  /**
   * Function to execute when ComposedRow is pressed
   */
  onPress: _propTypes.func,

  /**
   * Avatar image to show on the left of the ComposedRow
   */
  avatar: _propTypes.string,

  /**
   * Size of the Avatar in string. Default: "medium".
   */
  avatarSize: (0, _propTypes.oneOf)(['small', 'medium', 'large']),

  /**
   * When present expects a string indicating which icon to show on the left (instead of Avatar).
   */
  leftIcon: _propTypes.string,

  /**
   * Custom styles for leftIcon (mainly used for color)
   */
  leftIconStyle: _propTypes.object,

  /**
   * Size of leftIcon in number. Default: 40
   */
  leftIconSize: _propTypes.number,

  /**
   * Main text of ComposedRow
   */
  title: _propTypes.string,

  /**
   * Secondary text of ComposedRow
   */
  subTitle: _propTypes.string,

  /**
   * Little Icon shown under the subtitle
   */
  subTitleIcon: _propTypes.string,

  /**
   * Custom styles for subTitleIcon
   */
  subTitleIconStyle: _propTypes.object,

  /**
   * Small font text shown under subtitle and right to subTitleIcon
   */
  subTitleText: _propTypes.string,

  /**
   * Big action Icon shown on the extreme right of ComposedRow
   */
  rightIcon: _propTypes.string,

  /**
   * Custom style for rightIcons
   */
  rightIconStyle: _propTypes.object,

  /**
   * Function to execute when rightIcon is pressed
   */
  rightIconOnPress: _propTypes.func,

  /**
   * Small font text shown below rightIcon
   */
  rightText: _propTypes.string
};
var defaultProps = {
  style: {},
  onPress: function onPress() {},
  avatar: '',
  avatarSize: 'medium',
  leftIcon: '',
  title: '',
  subTitle: '',
  subTitleIcon: '',
  subTitleText: '',
  rightIcon: '',
  rightIconOnPress: function rightIconOnPress() {},
  rightText: '',
  leftIconStyle: {},
  leftIconSize: 40,
  subTitleIconStyle: {},
  rightIconStyle: {}
};

var ComposedRow = function ComposedRow(props) {
  return _react.default.createElement(_Layout.Row, {
    style: props.style,
    onPress: props.onPress
  }, (!!props.avatar || !!props.leftIcon) && _react.default.createElement(_Layout.Col, {
    size: 1,
    style: styles.centeredContent
  }, !!props.avatar && _react.default.createElement(_Avatar.default, {
    source: props.avatar,
    size: props.avatarSize
  }), !!props.leftIcon && _react.default.createElement(_Icon.default, {
    style: props.leftIconStyle,
    size: props.leftIconSize,
    name: props.leftIcon
  })), (!!props.title || !!props.subTitle || !!props.subTitleIcon || !!props.subTitleText) && _react.default.createElement(_Layout.Col, {
    size: 3
  }, !!props.title && _react.default.createElement(_Layout.Row, {
    size: 2,
    style: styles.leftContent
  }, _react.default.createElement(_Typography.H2, {
    numberOfLines: 1
  }, props.title)), !!props.subTitle && _react.default.createElement(_Layout.Row, {
    size: 3,
    style: styles.leftContent
  }, _react.default.createElement(_Typography.H4, null, props.subTitle)), (!!props.subTitleIcon || !!props.subTitleText) && _react.default.createElement(_Layout.Row, {
    size: 2,
    style: styles.leftContent
  }, !!props.subTitleIcon && _react.default.createElement(_Layout.Col, {
    size: 1
  }, _react.default.createElement(_Icon.default, {
    style: props.subTitleIconStyle,
    size: 20,
    name: props.subTitleIcon
  })), !!props.subTitleText && _react.default.createElement(_Layout.Col, {
    size: 6
  }, _react.default.createElement(_Typography.H5, null, props.subTitleText)))), (!!props.rightIcon || !!props.rightText) && _react.default.createElement(_Layout.Col, {
    size: 1
  }, !!props.rightIcon && _react.default.createElement(_Layout.Row, {
    style: _objectSpread({}, styles.centeredContent, {
      alignItems: props.rightText ? 'flex-end' : 'center'
    })
  }, !!props.rightIcon && !!props.rightIconOnPress && _react.default.createElement(_Button.default, {
    style: props.rightIconStyle,
    transparent: true,
    onPress: props.rightIconOnPress,
    icon: props.rightIcon
  })), !!props.rightText && _react.default.createElement(_Layout.Row, {
    style: _objectSpread({}, styles.centeredContent, {
      alignItems: props.rightIcon ? 'flex-start' : 'center'
    })
  }, !!props.rightText && _react.default.createElement(_Typography.H5, {
    numberOfLines: 1
  }, props.rightText))));
};

ComposedRow.propTypes = propTypes;
ComposedRow.defaultProps = defaultProps;
var _default = ComposedRow;
exports.default = _default;