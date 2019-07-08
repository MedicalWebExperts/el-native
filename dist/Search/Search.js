"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _index = require("../index");

var _Theme = _interopRequireDefault(require("../Theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = _Theme.default.getTheme();

var styles = theme.search;
var propTypes = {
  handleSearch: _propTypes.default.func,
  keys: _propTypes.default.array,
  dataList: _propTypes.default.array.isRequired,
  filters: _propTypes.default.object,
  placeholder: _propTypes.default.string,
  inputStyles: _propTypes.default.object,
  cancelIconStyles: _propTypes.default.object,
  labelStyle: _propTypes.default.object,
  labelStyleActive: _propTypes.default.object,
  labelTextStyle: _propTypes.default.object,
  labelTextStyleActive: _propTypes.default.object,
  placeholderTextColor: _propTypes.default.string,
  filtersLabels: _propTypes.default.object
};
var defaultProps = {
  handleSearch: function handleSearch() {
    return null;
  },
  keys: [],
  filters: {},
  placeholder: 'Search',
  inputStyles: {},
  cancelIconStyles: {},
  labelStyle: {},
  labelStyleActive: {},
  labelTextStyle: {},
  labelTextStyleActive: {},
  placeholderTextColor: '#999',
  filtersLabels: {}
};

var Search =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    var _this;

    _classCallCheck(this, Search);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEndEditing", function () {
      _this.handleSearch();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (value) {
      _this.setState({
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "searchByFilters", function (list, filters, selectedFilters) {
      var selectedFiltersName = Object.keys(selectedFilters).filter(function (k) {
        return selectedFilters[k];
      });

      if (!selectedFiltersName.length) {
        return list;
      }

      var findValueInMany = function findValueInMany(values, comparator) {
        if (values.indexOf(',') === -1) {
          return values.replace(/ /g, '') === comparator.replace(/ /g, '');
        }

        var names = values.split(',');
        return names.indexOf(comparator.replace(/ /g, '')) !== -1 || names.indexOf(" ".concat(comparator)) !== -1 || names.indexOf("".concat(comparator, " ")) !== -1;
      };

      var filteredList = list.filter(function (e) {
        return selectedFiltersName.every(function (currentFilterName) {
          return (// eslint-disable-next-line
            filters[currentFilterName].some(function (filterObject) {
              return filterObject.value && findValueInMany(e[currentFilterName], filterObject.name);
            })
          );
        });
      });
      return filteredList;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "searchByKeys", function (list, keys, patt) {
      return list.filter(function (listElement) {
        return keys.some(function (k) {
          return patt.test(listElement[k]);
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "search", function (list, value, keys) {
      var regValues = value.split(' ').join('|');
      var patt = new RegExp(regValues, 'i');
      var _this$state = _this.state,
          filters = _this$state.filters,
          selectedFilters = _this$state.selectedFilters;
      var result = list;
      result = _this.searchByFilters(list, filters, selectedFilters);

      if (value && keys) {
        return _this.searchByKeys(result, keys, patt);
      }

      if (value === '') {
        return result;
      }

      return result.filter(function (e) {
        return patt.test(e);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSearch", function () {
      var value = _this.state.value;

      var result = _this.search(_this.props.dataList, value, _this.props.keys);

      _this.props.handleSearch(result);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cleanInput", function () {
      _this.setState({
        value: ''
      }, function () {
        return _this.handleSearch();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOpenFilter", function (f) {
      _this.setState({
        modalVisible: true,
        selectedFilter: f
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleApplyFilters", function (filters) {
      var selected = filters.find(function (e) {
        return e.value;
      });

      _this.setState(function (prevState) {
        return {
          modalVisible: false,
          selectedFilters: _objectSpread({}, prevState.selectedFilters, _defineProperty({}, prevState.selectedFilter, !!selected))
        };
      }, function () {
        _this.handleSearch();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderFilterLabel", function (f, i) {
      var defaultStyles = _objectSpread({}, styles.label, _this.props.labelStyle);

      var onStyles = _objectSpread({}, styles.labelOn, _this.props.labelStyleActive);

      var bgStyles = _this.state.selectedFilters[f] ? _objectSpread({}, defaultStyles, onStyles) : defaultStyles;

      var defaultTextStyle = _objectSpread({}, styles.labelText, _this.props.labelTextStyle);

      var onTextStyles = _objectSpread({}, styles.labelTextOn, _this.props.labelTextStyleActive);

      var textStyles = _this.state.selectedFilters[f] ? _objectSpread({}, defaultTextStyle, onTextStyles) : defaultTextStyle;
      return _react.default.createElement(_index.Button, {
        onPress: function onPress() {
          return _this.handleOpenFilter(f);
        },
        key: i,
        backgroundStyles: bgStyles,
        textStyles: textStyles,
        outline: true,
        text: _this.props.filtersLabels[f].label
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderModal", function (visible, filters) {
      return _react.default.createElement(_index.FilterModal, {
        modalVisible: visible,
        title: _this.props.filtersLabels[_this.state.selectedFilter].modalTitle,
        filters: filters,
        applyFilters: _this.handleApplyFilters
      });
    });

    var _selectedFilters = {};
    Object.keys(_this.props.filters).forEach(function (e) {
      return Object.assign(_selectedFilters, _defineProperty({}, e, false));
    });
    _this.state = {
      value: '',
      modalVisible: false,
      filters: _this.props.filters,
      selectedFilters: _selectedFilters
    };
    return _this;
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_reactNative.View, null, _react.default.createElement(_reactNative.View, {
        style: styles.wrapper
      }, _react.default.createElement(_index.Input, {
        placeholder: this.props.placeholder,
        type: "squared",
        onChangeText: function onChangeText(text) {
          return _this2.handleChange(text);
        },
        value: this.state.value,
        style: _objectSpread({}, styles.input, this.props.inputStyles),
        onEndEditing: this.onEndEditing,
        returnKeyType: "search",
        errorLabel: false,
        placeholderTextColor: this.props.placeholderTextColor
      }), this.state.value !== '' && _react.default.createElement(_reactNative.View, {
        style: styles.cancelButtonWrapper
      }, _react.default.createElement(_index.Button, {
        onPress: this.cleanInput,
        icon: "ios-close",
        transparent: true,
        textStyles: _objectSpread({}, styles.cancelButtonIcon, this.props.cancelIconStyles),
        backgroundStyles: styles.cancelButton
      }))), _react.default.createElement(_reactNative.View, {
        style: styles.wrapper
      }, Object.keys(this.state.filters).map(function (e, i) {
        return _this2.renderFilterLabel(e, i);
      })), this.state.selectedFilter && this.renderModal(this.state.modalVisible, this.state.filters[this.state.selectedFilter]));
    }
  }]);

  return Search;
}(_react.default.Component);

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;
var _default = Search;
exports.default = _default;