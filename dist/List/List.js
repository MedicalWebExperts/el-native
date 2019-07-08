"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * Data to populate the List
   */
  data: _propTypes.array.isRequired,

  /**
   * Used as an index for ordering
   */
  keyExtractor: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.number]),

  /**
   * ListFooterComponent expects a component to render at the end of the list. Usefull
   * to show a spinner on loading
   */
  ListFooterComponent: _propTypes.node,

  /**
   * Function to execute when onRefresh action is being triggered
   */
  onRefresh: _propTypes.func,

  /**
   * Function to execute when the List is come to an end. Useful for pagination
   */
  onEndReached: _propTypes.func,

  /**
   * Number of miliseconds to trigger onEndReached once List come to an end.
   */
  onEndReachedThreshold: _propTypes.number,

  /**
   * Indices to render sticky headers
   */
  stickyHeaderIndices: _propTypes.array,

  /**
   * Function to execute to show each Row of the List
   */
  renderItem: _propTypes.func
};
var defaultProps = {
  keyExtractor: null,
  ListFooterComponent: null,
  onRefresh: function onRefresh() {},
  onEndReached: function onEndReached() {},
  onEndReachedThreshold: 0,
  stickyHeaderIndices: [],
  renderItem: function renderItem() {}
};

var List = function List(props) {
  return _react.default.createElement(_reactNative.FlatList, {
    data: props.data,
    keyExtractor: props.keyExtractor,
    ListFooterComponent: function ListFooterComponent() {
      return props.ListFooterComponent;
    },
    onRefresh: props.onRefresh,
    onEndReached: props.onEndReached,
    onEndReachedThreshold: props.onEndReachedThreshold,
    stickyHeaderIndices: props.stickyHeaderIndices,
    renderItem: props.renderItem,
    refreshing: !!props.onRefresh
  });
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;
var _default = List;
exports.default = _default;