"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Input = _interopRequireDefault(require("./Input"));

var _colors = _interopRequireDefault(require("../Theme/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  placeholder: 'Placeholder text',
  onChangeText: function onChangeText() {},
  multiline: false,
  numberOfLines: 4,
  autoCorrect: false,
  editable: false,
  selectTextOnFocus: false,
  error: false,
  errorText: 'Error text',
  style: {},
  type: 'underline',
  placeholderTextColor: _colors.default.textColor,
  keyboardType: 'default'
};
var customStyle = {
  borderColor: _colors.default.primary
};
describe('Input Snapshots', function () {
  it('should render an Input default', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Input.default, props));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Input default with error', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Input.default, _extends({}, props, {
      error: true
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Input with custom styling', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Input.default, _extends({}, props, {
      style: customStyle
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a squared Input', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Input.default, _extends({}, props, {
      style: customStyle,
      type: "squared"
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a squared Input with error', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Input.default, _extends({}, props, {
      style: customStyle,
      type: "squared",
      error: true
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a rounded Input', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Input.default, _extends({}, props, {
      style: customStyle,
      type: "rounded"
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a rounded Input with error', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Input.default, _extends({}, props, {
      style: customStyle,
      type: "rounded",
      error: true
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a Text Area Input', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Input.default, _extends({}, props, {
      style: customStyle,
      placeholder: "Text Area",
      multiline: true,
      numberOfLines: 8
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});