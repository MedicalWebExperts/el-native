"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _Switch = _interopRequireDefault(require("./Switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global describe it expect jest:true */
describe('Switch Snapshots', function () {
  it('should render a Switch', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Switch.default, null));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a Switch toggled on', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Switch.default, {
      value: true
    }));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a Switch disabled', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Switch.default, {
      disabled: true
    }));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a Switch disabled toggled on', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Switch.default, {
      disabled: true,
      value: true
    }));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a Switch with custom color', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Switch.default, {
      color: "#FAFAFA"
    }));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
describe('Interactions', function () {
  it('should execute onPress callback', function () {
    var props = {
      onPress: jest.fn()
    };
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Switch.default, props));
    wrapper.prop('onValueChange')();
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});