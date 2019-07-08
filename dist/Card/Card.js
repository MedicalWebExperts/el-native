"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardMedia = exports.CardFooter = exports.CardBody = exports.CardHeader = exports.Card = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _propTypes = require("prop-types");

var _Theme = _interopRequireDefault(require("../Theme"));

var _ComposedRow = _interopRequireDefault(require("../ComposedRow/ComposedRow"));

var _Layout = require("../Layout/Layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = _Theme.default.getTheme();

var styles = theme.card;
var cardPropTypes = {
  /**
   * Gives the Card a raised style by adding shadow
   */
  raised: _propTypes.bool,

  /**
   * Custom styling for Card
   */
  style: _propTypes.object,

  /**
   * Children expected inside the Card.
   */
  children: _propTypes.node.isRequired
};
var cardHeaderPropTypes = {
  /**
   * Avatar shown in the left side of the CardHeader.
   */
  avatar: _propTypes.string,

  /**
   * Avatar size. Default: 'small'.
   */
  avatarSize: (0, _propTypes.oneOf)(['small', 'medium', 'large']),

  /**
   * Passing this prop instead of avatar, expects an Icon.
   */
  leftIcon: _propTypes.string,

  /**
   * Custom styles for the leftIcon.
   */
  leftIconStyle: _propTypes.object,

  /**
   * Custom style for CardHeader.
   */
  style: _propTypes.object,

  /**
   * Main title of CardHeader.
   */
  title: _propTypes.string,

  /**
   * Small text underneath the title.
   */
  subTitle: _propTypes.string,

  /**
   * This props expects an Icon that could lead to an action.
   */
  rightIcon: _propTypes.string,

  /**
   * Function to execute when rightIcon is pressed.
   */
  rightIconOnPress: _propTypes.func
};
var cardBodyPropTypes = {
  /**
   * Custom style for CardBody.
   */
  style: _propTypes.object,

  /**
   * Size in number for the flex property in CardBody.
   */
  size: _propTypes.number,

  /**
   * Children expected inside the CardBody.
   */
  children: _propTypes.node.isRequired
};
var cardFooterPropTypes = {
  /**
   * Expects an Icon to be shown at the left of CardFooter.
   */
  leftIcon: _propTypes.string,

  /**
   * Custom styles for leftIcon (mainly used for color).
   */
  leftIconStyle: _propTypes.object,

  /**
   * Size in number for the Icon. Default: 30.
   */
  leftIconSize: _propTypes.number,

  /**
   * Custom styles for CardFooter.
   */
  style: _propTypes.object,

  /**
   * Icon to show on the center of CardFooter. Is always small.
   */
  subTitleIcon: _propTypes.string,

  /**
   * Text to show at the right of the Icon.
   */
  subTitleText: _propTypes.string
};
var cardMediaPropTypes = {
  image: _propTypes.string,
  video: _propTypes.string,
  style: _propTypes.object
};
var cardDefaultProps = {
  raised: false,
  style: {}
};
var cardHeaderDefaultProps = {
  avatar: '',
  avatarSize: 'small',
  leftIcon: '',
  leftIconStyle: {},
  style: {},
  title: '',
  subTitle: '',
  rightIcon: '',
  rightIconOnPress: function rightIconOnPress() {}
};
var cardBodyDefaultProps = {
  style: {},
  size: null
};
var cardFooterDefaultProps = {
  leftIcon: '',
  leftIconStyle: {},
  leftIconSize: 30,
  style: {},
  subTitleIcon: '',
  subTitleText: ''
};
var cardMediaDefaultProps = {
  image: '',
  video: '',
  style: {}
};

var getStyles = function getStyles(_ref) {
  var style = _ref.style,
      raised = _ref.raised;

  var fullStyles = _objectSpread({}, styles.default);

  if (raised) {
    fullStyles = Object.assign(fullStyles, styles.raised);
  }

  if (style) {
    fullStyles = Object.assign(fullStyles, style);
  }

  return fullStyles;
};

var Card = function Card(props) {
  return _react.default.createElement(_reactNative.View, {
    style: getStyles({
      style: props.style,
      raised: props.raised
    }),
    elevation: props.raised && 8
  }, props.children);
};

exports.Card = Card;

var CardHeader = function CardHeader(props) {
  return _react.default.createElement(_ComposedRow.default, {
    avatar: props.avatar,
    avatarSize: props.avatarSize,
    leftIcon: props.leftIcon,
    leftIconStyle: props.leftIconStyle,
    style: props.style,
    title: props.title,
    subTitle: props.subTitle,
    rightIcon: props.rightIcon,
    rightIconOnPress: props.rightIconOnPress
  });
};

exports.CardHeader = CardHeader;

var CardBody = function CardBody(props) {
  return _react.default.createElement(_Layout.Row, {
    style: _objectSpread({}, styles.body, props.style),
    size: props.size
  }, props.children);
};

exports.CardBody = CardBody;

var CardFooter = function CardFooter(props) {
  return _react.default.createElement(_ComposedRow.default, {
    leftIcon: props.leftIcon,
    leftIconStyle: props.leftIconStyle,
    leftIconSize: props.leftIconSize,
    style: props.style,
    subTitleIcon: props.subTitleIcon,
    subTitleText: props.subTitleText
  });
};

exports.CardFooter = CardFooter;

var CardMedia = function CardMedia(props) {
  return _react.default.createElement(_Layout.Row, null, props.video ? _react.default.createElement(_reactNative.WebView, {
    source: {
      uri: props.video
    },
    style: _objectSpread({}, styles.media, props.style)
  }) : _react.default.createElement(_reactNative.Image, {
    source: {
      uri: props.image
    },
    style: _objectSpread({}, styles.media, props.style)
  }));
};

exports.CardMedia = CardMedia;
Card.propTypes = cardPropTypes;
CardHeader.propTypes = cardHeaderPropTypes;
CardBody.propTypes = cardBodyPropTypes;
CardFooter.propTypes = cardFooterPropTypes;
CardMedia.propTypes = cardMediaPropTypes;
Card.defaultProps = cardDefaultProps;
CardHeader.defaultProps = cardHeaderDefaultProps;
CardBody.defaultProps = cardBodyDefaultProps;
CardFooter.defaultProps = cardFooterDefaultProps;
CardMedia.defaultProps = cardMediaDefaultProps;