"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _Map = _interopRequireDefault(require("./Map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var apiKey = process.env.ELNATIVE_GOOGLE_MAPS_APIKEY || '';
var defaultProps = {
  latitude: -34.5844583,
  longitude: -58.4230539,
  apiKey: apiKey
};
describe('Snapshots', function () {
  it('should render default map', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Map.default, defaultProps));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render custom button', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Map.default, _extends({}, defaultProps, {
      button: _react.default.createElement(_reactNative.Text, null, "custom")
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should apply custom styles', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Map.default, _extends({}, defaultProps, {
      style: {
        container: {
          width: 50
        },
        button: {
          backgroundColor: 'yellow'
        }
      }
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should apply underlayColor', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Map.default, _extends({}, defaultProps, {
      underlayColor: "green"
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
describe('Interactions', function () {
  it('should execute onPress callback', function () {
    var props = _objectSpread({}, defaultProps, {
      onPress: jest.fn()
    });

    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Map.default, props));
    wrapper.find('TouchableHighlight').prop('onPress')();
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});