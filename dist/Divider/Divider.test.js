"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Divider = _interopRequireDefault(require("./Divider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customColor = 'darkgray';
var customPrimaryColor = 'aquamarine';
describe('Divider Snapshots', function () {
  it('should render a simple Divider ', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Divider.default, null));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a short Divider', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Divider.default, {
      accentLength: "short"
    }));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a medium Divider', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Divider.default, {
      accentLength: "medium"
    }));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a long Divider', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Divider.default, {
      accentLength: "long"
    }));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a Divider with custom colors', function () {
    // eslint-disable-next-line
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Divider.default, {
      color: customColor,
      primaryColor: customPrimaryColor
    }));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});