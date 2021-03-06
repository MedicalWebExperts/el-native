"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _propTypes = require("prop-types");

var _Option = _interopRequireDefault(require("../Option/Option"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  iconRight: _propTypes.bool,
  spaced: _propTypes.bool,
  style: _propTypes.object,
  options: _propTypes.array.isRequired,
  iconStyles: _propTypes.object,
  labelStyles: _propTypes.object,
  onChange: _propTypes.func,
  selected: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.number])
};
var defaultProps = {
  iconRight: false,
  spaced: false,
  style: {},
  onChange: function onChange() {
    return null;
  },
  iconStyles: {},
  labelStyles: {},
  selected: -1
};

var OptionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OptionGroup, _React$Component);

  function OptionGroup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OptionGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OptionGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      selected: _this.props.selected || -1
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePress", function (selected, id) {
      if (selected) {
        _this.setState({
          selected: id
        });

        _this.props.onChange(id);
      }
    });

    return _this;
  }

  _createClass(OptionGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.warn(this.props.selected);
      return _react.default.createElement(_reactNative.View, null, this.props.options.map(function (e) {
        return _react.default.createElement(_Option.default, {
          key: e.id,
          onPress: _this2.handlePress,
          id: e.id,
          label: e.label,
          selected: _this2.state.selected === e.id,
          iconStyles: _this2.props.iconStyles,
          labelStyles: _this2.props.labelStyles,
          style: _this2.props.style,
          spaced: _this2.props.spaced,
          iconRight: _this2.props.iconRight,
          optionGroup: true
        });
      }));
    }
  }]);

  return OptionGroup;
}(_react.default.Component);

OptionGroup.propTypes = propTypes;
OptionGroup.defaultProps = defaultProps;
var _default = OptionGroup;
exports.default = _default;