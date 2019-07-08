"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _reactNative = require("react-native");

var _Theme = _interopRequireDefault(require("../Theme"));

var _Switch = _interopRequireDefault(require("../Switch/Switch"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _Layout = require("../Layout/Layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = _Theme.default.getTheme();

var styles = theme.filterModal;
var colors = theme.colors;

var FilterModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FilterModal, _React$Component);

  _createClass(FilterModal, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var selectAll = nextProps.filters.every(function (e) {
        return e.value;
      });
      return _objectSpread({}, prevState, {
        filters: nextProps.filters,
        selectAll: selectAll
      });
    }
  }]);

  function FilterModal(props) {
    var _this;

    _classCallCheck(this, FilterModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterModal).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateFilter", function (filter, value) {
      var filters = _this.state.filters;
      filters[filters.indexOf(filter)].value = value;

      _this.setState({
        filters: filters
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateSelectAll", function (value, filters) {
      filters.forEach(function (filter) {
        return _this.updateFilter(filter, value);
      });

      _this.setState(function (prevState) {
        return {
          selectAll: !prevState.selectAll
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClose", function (filters) {
      filters.forEach(function (filter) {
        return _this.updateFilter(filter, false);
      });

      _this.props.applyFilters(_this.state.filters);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleApplyFilters", function () {
      _this.props.applyFilters(_this.state.filters);
    });

    _this.state = {
      selectAll: false,
      filters: props.filters
    };
    return _this;
  }

  _createClass(FilterModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          modalVisible = _this$props.modalVisible;
      var _this$state = this.state,
          selectAll = _this$state.selectAll,
          filters = _this$state.filters;
      return _react.default.createElement(_reactNative.Modal, {
        animationType: "slide",
        visible: modalVisible,
        onRequestClose: function onRequestClose() {
          return _this2.handleClose(filters);
        }
      }, _react.default.createElement(_Layout.Col, {
        style: styles.wrapper
      }, _react.default.createElement(_Layout.Row, {
        style: _objectSpread({}, styles.row, styles.titleWrapper)
      }, _react.default.createElement(_reactNative.Text, {
        style: styles.title
      }, title), _react.default.createElement(_Button.default, {
        onPress: function onPress() {
          return _this2.handleClose(filters);
        },
        icon: "ios-close",
        textStyles: styles.buttonText,
        transparent: true
      })), _react.default.createElement(_reactNative.ScrollView, {
        style: styles.innerWrapper,
        showsVerticalScrollIndicator: false
      }, _react.default.createElement(_Layout.Row, {
        style: styles.row
      }, _react.default.createElement(_reactNative.Text, {
        style: _objectSpread({}, styles.text, styles.selectAll)
      }, "Select All"), _react.default.createElement(_Switch.default, {
        color: colors.primary,
        value: selectAll,
        onPress: function onPress(value) {
          return _this2.updateSelectAll(value, filters);
        },
        styles: styles.switch
      })), filters.length && filters.map(function (filter, i) {
        return (// eslint-disable-next-line
          _react.default.createElement(_Layout.Row, {
            key: i,
            style: styles.row
          }, _react.default.createElement(_reactNative.Text, {
            style: _objectSpread({}, styles.text, styles.filter),
            numberOfLines: 1
          }, filter.name), _react.default.createElement(_Switch.default, {
            color: colors.primary,
            value: filter.value,
            onPress: function onPress(value) {
              return _this2.updateFilter(filter, value);
            },
            styles: styles.switch
          }))
        );
      }), _react.default.createElement(_Layout.Row, {
        style: styles.extraRow
      })), _react.default.createElement(_reactNative.View, {
        style: styles.button
      }, _react.default.createElement(_Button.default, {
        onPress: this.handleApplyFilters,
        block: true,
        text: "APPLY FILTERS"
      }))));
    }
  }]);

  return FilterModal;
}(_react.default.Component);

_defineProperty(FilterModal, "propTypes", {
  title: _propTypes.string.isRequired,
  filters: _propTypes.array.isRequired,
  modalVisible: _propTypes.bool.isRequired,
  applyFilters: _propTypes.func.isRequired
});

var _default = FilterModal;
exports.default = _default;