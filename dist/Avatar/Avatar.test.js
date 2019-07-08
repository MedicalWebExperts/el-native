"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Avatar = _interopRequireDefault(require("./Avatar"));

var _tests = require("../utils/tests");

var _Theme = _interopRequireDefault(require("../Theme"));

var _colors = _interopRequireDefault(require("../Theme/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = _Theme.default.getTheme();

var styles = theme.avatar;
var imageUrl = 'https://wallscover.com/images/gunther-wallpaper-2.jpg';
describe('Avatar', function () {
  it('should render a default Avatar', function () {
    var defaultStyles = styles.default;
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Avatar.default, {
      source: imageUrl
    }));
    (0, _tests.shouldHaveStyles)(wrapper, _objectSpread({}, defaultStyles));
  });
  it('should be square', function () {
    var defaultStyles = styles.default;
    var squareStyles = styles.avatarSquare;
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Avatar.default, {
      source: imageUrl,
      square: true
    }));
    expect(wrapper.props().square).toBeTruthy();
    (0, _tests.shouldHaveStyles)(wrapper, _objectSpread({}, defaultStyles, squareStyles));
  });
  it('should be large', function () {
    var defaultStyles = styles.default;
    var largeStyles = styles.avatarLarge;
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Avatar.default, {
      source: imageUrl,
      size: "large"
    }));
    (0, _tests.shouldHaveStyles)(wrapper, _objectSpread({}, defaultStyles, largeStyles));
  });
  it('should be small', function () {
    var defaultStyles = styles.default;
    var smallStyles = styles.avatarSmall;
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Avatar.default, {
      source: imageUrl,
      size: "small"
    }));
    (0, _tests.shouldHaveStyles)(wrapper, _objectSpread({}, defaultStyles, smallStyles));
  });
  it('should be bordered', function () {
    var defaultStyles = styles.default;
    var customStyles = {
      borderColor: _colors.default.primary,
      borderWidth: 2
    };
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Avatar.default, {
      source: imageUrl,
      borderColor: _colors.default.primary,
      borderThickness: 2
    }));
    (0, _tests.shouldHaveStyles)(wrapper, _objectSpread({}, defaultStyles, customStyles));
  });
});