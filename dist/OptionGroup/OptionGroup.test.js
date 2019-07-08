"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _OptionGroup = _interopRequireDefault(require("./OptionGroup"));

var _Option = _interopRequireDefault(require("../Option/Option"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = [{
  id: 1,
  label: 'one'
}, {
  id: 2,
  label: 'two'
}, {
  id: 3,
  label: 'three'
}];
describe('OptionGroup', function () {
  it('should render a list of Options', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_OptionGroup.default, {
      options: options
    }));
    expect(wrapper.find(_Option.default)).toHaveLength(options.length);
  });
  it('should render the label', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_OptionGroup.default, {
      options: options
    }));
    expect(wrapper.find(_Option.default).first().props().label).toBe(options[0].label);
  });
});