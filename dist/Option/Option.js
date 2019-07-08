"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNative = require("react-native");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

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

var OptionStyles = theme.option;
var propTypes = {
  spaced: _propTypes.default.bool,
  style: _propTypes.default.object,
  selected: _propTypes.default.bool,
  label: _propTypes.default.string,
  iconStyles: _propTypes.default.object,
  labelStyles: _propTypes.default.object,
  onPress: _propTypes.default.func,
  id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  iconRight: _propTypes.default.bool,
  optionGroup: _propTypes.default.bool
};
var defaultProps = {
  optionGroup: false,
  spaced: false,
  iconRight: false,
  style: {},
  selected: false,
  label: '',
  iconStyles: {},
  labelStyles: {},
  onPress: null,
  id: 0
};
var Touchable = _reactNative.Platform.OS === 'android' ? _reactNative.TouchableNativeFeedback : _reactNative.TouchableOpacity;

var Option =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Option, _React$Component);

  function Option() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Option);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Option)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      selected: _this.props.selected
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeState", function () {
      _this.setState({
        selected: !_this.state.selected
      }, function () {
        return typeof _this.props.onPress === 'function' && _this.props.onPress(_this.state.selected, _this.props.id);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnPress", function () {
      if (_this.props.optionGroup && !_this.state.selected) {
        _this.changeState();
      }

      if (!_this.props.optionGroup) {
        _this.changeState();
      }
    });

    return _this;
  }

  _createClass(Option, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selected !== this.state.selected) {
        this.setState({
          selected: nextProps.selected
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var iconName = this.state.selected ? 'md-radio-button-on' : 'md-radio-button-off';

      if (_reactNative.Platform.OS === 'ios') {
        iconName = this.state.selected ? 'ios-radio-button-on' : 'ios-radio-button-off';
      }

      var iconStyles = _objectSpread({}, OptionStyles.icon, this.props.iconStyles);

      var labelStyles = _objectSpread({}, OptionStyles.label, this.props.labelStyles);

      if (this.props.iconRight) {
        iconStyles = _objectSpread({}, iconStyles, OptionStyles.iconRight);
      }

      var spaced = this.props.spaced ? {
        justifyContent: 'space-between'
      } : {};
      return _react.default.createElement(Touchable, {
        onPress: this.handleOnPress
      }, _react.default.createElement(_reactNative.View, {
        style: [OptionStyles.default, this.props.style, spaced]
      }, !this.props.iconRight && _react.default.createElement(_Icon.default, {
        name: iconName,
        style: iconStyles
      }), _react.default.createElement(_reactNative.Text, {
        style: labelStyles
      }, this.props.label), this.props.iconRight && _react.default.createElement(_Icon.default, {
        name: iconName,
        style: iconStyles
      })));
    }
  }]);

  return Option;
}(_react.default.Component);

Option.propTypes = propTypes;
Option.defaultProps = defaultProps;
var _default = Option;
exports.default = _default;