"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _reactNative = require("react-native");

var _Theme = _interopRequireDefault(require("../Theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = _Theme.default.getTheme();

var styles = theme.typography;
var h1Proptypes = {
  /**
   * The prop "style" overrides the custom styles set in the component.
   */
  style: _propTypes.object,

  /**
   * The prop "color" defines the color of the text.
   */
  color: _propTypes.bool,

  /**
   * The prop "numberOfLines" receives a number which limits the lines shown
   * (an ellipsis will show at the end when truncated)
   */
  numberOfLines: _propTypes.number,

  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.node]).isRequired
};
var h1DefaultProps = {
  style: {},
  color: false,
  numberOfLines: null
};
var h2Proptypes = {
  /**
   * The prop "style" overrides the custom styles set in the component.
   */
  style: _propTypes.object,

  /**
   * The prop "color" defines the color of the text.
   */
  color: _propTypes.bool,

  /**
   * The prop "numberOfLines" receives a number which limits the lines shown
   * (an ellipsis will show at the end when truncated)
   */
  numberOfLines: _propTypes.number,

  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.node]).isRequired
};
var h2DefaultProps = {
  style: {},
  color: false,
  numberOfLines: null
};
var h3Proptypes = {
  /**
   * The prop "style" overrides the custom styles set in the component.
   */
  style: _propTypes.object,

  /**
   * The prop "color" defines the color of the text.
   */
  color: _propTypes.bool,

  /**
   * The prop "numberOfLines" receives a number which limits the lines shown
   * (an ellipsis will show at the end when truncated)
   */
  numberOfLines: _propTypes.number,

  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.node]).isRequired
};
var h3DefaultProps = {
  style: {},
  color: false,
  numberOfLines: null
};
var h4Proptypes = {
  /**
   * The prop "style" overrides the custom styles set in the component.
   */
  style: _propTypes.object,

  /**
   * The prop "color" defines the color of the text.
   */
  color: _propTypes.bool,

  /**
   * The prop "numberOfLines" receives a number which limits the lines shown
   * (an ellipsis will show at the end when truncated)
   */
  numberOfLines: _propTypes.number,

  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.node]).isRequired
};
var h4DefaultProps = {
  style: {},
  color: false,
  numberOfLines: null
};
var h5Proptypes = {
  /**
   * The prop "style" overrides the custom styles set in the component.
   */
  style: _propTypes.object,

  /**
   * The prop "color" defines the color of the text.
   */
  color: _propTypes.bool,

  /**
   * The prop "numberOfLines" receives a number which limits the lines shown
   * (an ellipsis will show at the end when truncated)
   */
  numberOfLines: _propTypes.number,

  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.node]).isRequired
};
var h5DefaultProps = {
  style: {},
  color: false,
  numberOfLines: null
};
var textProptypes = {
  /**
   * The prop "style" overrides the custom styles set in the component.
   */
  style: _propTypes.object,

  /**
   * The prop "numberOfLines" receives a number which limits the lines shown
   * (an ellipsis will show at the end when truncated)
   */
  numberOfLines: _propTypes.number,

  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.node]).isRequired
};
var textDefaultProps = {
  style: {},
  numberOfLines: null
};
/**
 * H1 component renders a RN <Text> component with custom styles.
 */

var H1 = function H1(props) {
  return _react.default.createElement(_reactNative.Text, {
    numberOfLines: props.numberOfLines,
    style: props.color ? _objectSpread({}, styles.h1Color, props.style) : _objectSpread({}, styles.h1, props.style)
  }, props.children);
};
/**
 * H2 component renders a RN <Text> component with custom styles.
 */


exports.H1 = H1;

var H2 = function H2(props) {
  return _react.default.createElement(_reactNative.Text, {
    numberOfLines: props.numberOfLines,
    style: props.color ? _objectSpread({}, styles.h2Color, props.style) : _objectSpread({}, styles.h2, props.style)
  }, props.children);
};
/**
 * H3 component renders a RN <Text> component with custom styles.
 */


exports.H2 = H2;

var H3 = function H3(props) {
  return _react.default.createElement(_reactNative.Text, {
    numberOfLines: props.numberOfLines,
    style: props.color ? _objectSpread({}, styles.h3Color, props.style) : _objectSpread({}, styles.h3, props.style)
  }, props.children);
};
/**
 * H4 component renders a RN <Text> component with custom styles.
 */


exports.H3 = H3;

var H4 = function H4(props) {
  return _react.default.createElement(_reactNative.Text, {
    numberOfLines: props.numberOfLines,
    style: props.color ? _objectSpread({}, styles.h4Color, props.style) : _objectSpread({}, styles.h4, props.style)
  }, props.children);
};
/**
 * H5 component renders a RN <Text> component with custom styles.
 */


exports.H4 = H4;

var H5 = function H5(props) {
  return _react.default.createElement(_reactNative.Text, {
    numberOfLines: props.numberOfLines,
    style: props.color ? _objectSpread({}, styles.h5Color, props.style) : _objectSpread({}, styles.h5, props.style)
  }, props.children);
};
/**
 * Text component renders a RN <Text> component with custom styles.
 */


exports.H5 = H5;

var TextTheme = function TextTheme(props) {
  return _react.default.createElement(_reactNative.Text, {
    numberOfLines: props.numberOfLines,
    style: _objectSpread({}, styles.text, props.style)
  }, props.children);
};

exports.Text = TextTheme;
H1.propTypes = h1Proptypes;
H1.defaultProps = h1DefaultProps;
H2.propTypes = h2Proptypes;
H2.defaultProps = h2DefaultProps;
H3.propTypes = h3Proptypes;
H3.defaultProps = h3DefaultProps;
H4.propTypes = h4Proptypes;
H4.defaultProps = h4DefaultProps;
H5.propTypes = h5Proptypes;
H5.defaultProps = h5DefaultProps;
TextTheme.propTypes = textProptypes;
TextTheme.defaultProps = textDefaultProps;