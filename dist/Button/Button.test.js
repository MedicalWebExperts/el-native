"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _enzyme = require("enzyme");

var _Button = _interopRequireDefault(require("./Button"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _tests = require("../utils/tests");

var _Theme = _interopRequireDefault(require("../Theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = _Theme.default.getTheme();

var styles = theme.button;
describe('Button', function () {
  it('should render a text', function () {
    (0, _tests.shouldHaveText)(_react.default.createElement(_Button.default, {
      onPress: function onPress() {
        return null;
      },
      text: "LOGIN"
    }), 'LOGIN');
  });
  it('should be disabled', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
      onPress: function onPress() {
        return null;
      },
      text: "LOGIN",
      disabled: true
    }));
    expect(wrapper.props().disabled).toBeTruthy();
  });
  it('should have disabled styles', function () {
    var defaultStyles = styles.default;
    var disabledStyles = styles.disabled;
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
      onPress: function onPress() {
        return null;
      },
      text: "LOGIN",
      disabled: true
    }));
    (0, _tests.shouldHaveStyles)(wrapper.find(_reactNative.View), _objectSpread({}, defaultStyles, disabledStyles));
  });
  it('should have background styles', function () {
    var defaultStyles = styles.default;
    var bgStyles = {
      backgroundColor: 'red'
    };
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
      onPress: function onPress() {
        return null;
      },
      text: "LOGIN",
      backgroundStyles: bgStyles
    }));
    (0, _tests.shouldHaveStyles)(wrapper.find(_reactNative.View), _objectSpread({}, defaultStyles, bgStyles));
  });
  it('should be block', function () {
    var defaultStyles = styles.default;
    var blockStyles = {
      width: '100%'
    };
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
      onPress: function onPress() {
        return null;
      },
      text: "LOGIN",
      block: true
    }));
    (0, _tests.shouldHaveStyles)(wrapper.find(_reactNative.View), _objectSpread({}, defaultStyles, blockStyles));
  });
  it('should be transparent', function () {
    var defaultStyles = styles.default;
    var transparentStyles = {
      backgroundColor: 'transparent',
      borderWidth: 0,
      elevation: 0
    };
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
      onPress: function onPress() {
        return null;
      },
      text: "LOGIN",
      transparent: true
    }));
    (0, _tests.shouldHaveStyles)(wrapper.find(_reactNative.View), _objectSpread({}, defaultStyles, transparentStyles));
  });
  it('should be outlined', function () {
    var defaultStyles = styles.default;

    var customStyles = _objectSpread({}, styles.outline, {
      borderColor: theme.colors.primary
    });

    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
      onPress: function onPress() {
        return null;
      },
      text: "LOGIN",
      outline: true
    }));
    (0, _tests.shouldHaveStyles)(wrapper.find(_reactNative.View), _objectSpread({}, defaultStyles, customStyles));
  });
  it('should be rounded', function () {
    var roundedDimensions = 40;
    var defaultStyles = styles.default;
    var customStyles = {
      width: roundedDimensions,
      height: roundedDimensions,
      borderRadius: parseInt(roundedDimensions / 2, 10)
    };
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
      onPress: function onPress() {
        return null;
      },
      text: "LOGIN",
      roundedDimensions: 40
    }));
    (0, _tests.shouldHaveStyles)(wrapper.find(_reactNative.View), _objectSpread({}, defaultStyles, customStyles));
  });
  it('should render an Icon', function () {
    (0, _tests.shouldHaveComponent)(_react.default.createElement(_Button.default, {
      onPress: function onPress() {
        return null;
      },
      icon: "ios-basketball"
    }), _Icon.default);
  });
  it('should render an Left Icon', function () {
    (0, _tests.shouldHaveComponent)(_react.default.createElement(_Button.default, {
      onPress: function onPress() {
        return null;
      },
      iconLeft: "ios-basketball"
    }), _Icon.default);
  });
  it('should render an Right Icon', function () {
    (0, _tests.shouldHaveComponent)(_react.default.createElement(_Button.default, {
      onPress: function onPress() {
        return null;
      },
      iconRight: "ios-basketball"
    }), _Icon.default);
  });
  test('should call the onPress', function () {
    (0, _tests.shouldSimulateOnPress)(_react.default.createElement(_Button.default, {
      onPress: function onPress() {
        return null;
      }
    }));
  });
});