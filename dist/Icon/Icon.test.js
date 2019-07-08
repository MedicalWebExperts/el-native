"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customProps = {
  color: 'aquamarine',
  size: 14,
  name: "".concat(_reactNative.Platform.OS === 'ios' ? 'ios' : 'md', "-beer")
};
describe('Icon Snapshots', function () {
  it('should render a simple Icon', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Icon.default, null));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a custom Icon', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Icon.default, customProps));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});