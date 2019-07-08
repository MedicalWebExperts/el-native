"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldHaveStyles = exports.shouldSimulateOnPress = exports.shouldHaveComponent = exports.shouldHaveText = void 0;

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEquivalent = function isEquivalent(a, b) {
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  if (aProps.length !== bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i += 1) {
    var propName = aProps[i];

    if (!Object.is(a[propName], b[propName])) {
      return false;
    }
  }

  return true;
};

var shouldHaveStyles = function shouldHaveStyles(componentWithStyles, styles) {
  expect(isEquivalent(componentWithStyles.props().style, styles)).toBeTruthy();
};

exports.shouldHaveStyles = shouldHaveStyles;

var shouldHaveText = function shouldHaveText(mainComponent, text) {
  var wrapper = (0, _enzyme.shallow)(mainComponent);
  return expect(wrapper.contains(text)).toBeTruthy();
};

exports.shouldHaveText = shouldHaveText;

var shouldHaveComponent = function shouldHaveComponent(mainComponent, component) {
  var wrapper = (0, _enzyme.shallow)(mainComponent);
  return expect(wrapper.find(component)).toHaveLength(1);
};

exports.shouldHaveComponent = shouldHaveComponent;

var shouldSimulateOnPress = function shouldSimulateOnPress(mainComponent) {
  var cb = jest.fn();

  var cloned = _react.default.cloneElement(mainComponent, {
    onPress: cb
  });

  var wrapper = (0, _enzyme.shallow)(cloned);
  wrapper.simulate('press');
  expect(cb).toHaveBeenCalledTimes(1);
};

exports.shouldSimulateOnPress = shouldSimulateOnPress;