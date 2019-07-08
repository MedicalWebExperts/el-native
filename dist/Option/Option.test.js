"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Option = _interopRequireDefault(require("./Option"));

var _tests = require("../utils/tests");

var _Theme = _interopRequireDefault(require("../Theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = _Theme.default.getTheme();

var styles = theme.option;
describe('Option', function () {
  it('should render a text', function () {
    (0, _tests.shouldHaveText)(_react.default.createElement(_Option.default, {
      label: "text"
    }), 'text');
  });
  it('should have icon styles', function () {
    var customStyles = {
      color: 'red'
    };
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Option.default, {
      label: "text",
      iconStyles: customStyles
    }));
    (0, _tests.shouldHaveStyles)(wrapper.find('Icon'), _objectSpread({}, styles.icon, customStyles));
  });
  test('should call the onPress', function () {
    (0, _tests.shouldSimulateOnPress)(_react.default.createElement(_Option.default, {
      label: "text",
      onPress: function onPress() {
        return null;
      }
    }));
  });
});