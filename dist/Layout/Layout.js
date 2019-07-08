"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = exports.Grid = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: (0, _propTypes.oneOfType)([_propTypes.array, _propTypes.object]).isRequired
};
var defaultProps = {};
var pressPropTypes = {
  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: (0, _propTypes.oneOfType)([_propTypes.array, _propTypes.object]).isRequired,

  /**
   * The prop "onPress" makes the component tappable and also is the function to be executed
   * on press.
   */
  onPress: _propTypes.func
};
var pressDefaultProps = {
  onPress: function onPress() {}
};
/**
 * HoC (High order Component). Receives the props and a type. Depending on the type,
 * it will render a Row or a Col, and depending on the props a View or a TouchableOpacity.
 */

var createChild = function createChild(props, type) {
  var prepareRootProps = function prepareRootProps() {
    var style = _objectSpread({
      flex: props.size || (props.style && props.style.width ? 0 : 1),
      flexDirection: type
    }, props.style);

    return style;
  };

  var renderView = function renderView() {
    return _react.default.createElement(_reactNative.View, {
      style: prepareRootProps()
    }, props.children);
  };

  var renderTouchableOpacity = function renderTouchableOpacity() {
    return _react.default.createElement(_reactNative.TouchableOpacity, {
      onPress: props.onPress,
      style: prepareRootProps()
    }, props.children);
  };

  var renderComponent = function renderComponent() {
    return props.onPress ? renderTouchableOpacity() : renderView();
  };

  renderView.propTypes = propTypes;
  renderView.defaultProps = defaultProps;
  renderTouchableOpacity.propTypes = pressPropTypes;
  renderTouchableOpacity.defaultProps = pressDefaultProps;
  return renderComponent();
};
/**
 * Row component, uses createChild to render a Row.
 */


var Row = function Row(props) {
  return createChild(props, 'row');
};
/**
 * Col component, uses createChild to render a Col.
 */


exports.Row = Row;

var Col = function Col(props) {
  return createChild(props, 'column');
};
/**
 * Grid component, expects childs, that could be Row or Col components.
 */


exports.Col = Col;

var Grid = function Grid(props) {
  var ifRow = function ifRow() {
    return !!props.children && (Array.isArray(props.children) && props.children[0].type === Row || props.children.type === Row);
  };

  var style = _objectSpread({
    flex: 1,
    flexDirection: ifRow() ? 'column' : 'row',
    height: '100%',
    width: '100%'
  }, props.style);

  var renderView = function renderView() {
    return _react.default.createElement(_reactNative.View, {
      style: style
    }, props.children);
  };

  renderView.propTypes = propTypes;
  renderView.defaultProps = defaultProps;
  return renderView();
};

exports.Grid = Grid;
Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;