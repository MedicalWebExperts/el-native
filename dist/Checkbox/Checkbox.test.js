"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _colors = _interopRequireDefault(require("../Theme/colors"));

var _tests = require("../utils/tests");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Checkbox', function () {
  it('should render a Checkbox with cutom styles', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Checkbox.default, {
      color: _colors.default.primary
    }));
    expect(wrapper.find('Icon').props().color).toBeTruthy();
  });
  it('should render a Checkbox with custom size', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Checkbox.default, {
      size: 30
    }));
    expect(wrapper.find('Icon').props().size).toBeTruthy();
  });
  it('should render an Icon', function () {
    (0, _tests.shouldHaveComponent)(_react.default.createElement(_Checkbox.default, {
      onPress: function onPress() {
        return null;
      }
    }), _Icon.default);
  });
  test('should call the onPress', function () {
    (0, _tests.shouldSimulateOnPress)(_react.default.createElement(_Checkbox.default, {
      onPress: function onPress() {
        return null;
      }
    }));
  });
});