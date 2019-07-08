"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Typography = require("./Typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  style: {},
  color: false,
  children: 'Hi there!'
};
var textProps = {
  style: {},
  children: 'Hi there!'
};
describe('H1 Snapshots', function () {
  it('should render an H1', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Typography.H1, props));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an H1 with color', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Typography.H1, _extends({}, props, {
      color: true
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should apply custom styles to H1', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Typography.H1, _extends({}, props, {
      style: {
        color: 'green'
      }
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
describe('H2 Snapshots', function () {
  it('should render an H2', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Typography.H2, props));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an H2 with color', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Typography.H2, _extends({}, props, {
      color: true
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should apply custom styles to H2', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Typography.H2, _extends({}, props, {
      style: {
        color: 'green'
      }
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
describe('H3 Snapshots', function () {
  it('should render an H3', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Typography.H3, props));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an H3 with color', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Typography.H3, _extends({}, props, {
      color: true
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should apply custom styles to H3', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Typography.H3, _extends({}, props, {
      style: {
        color: 'green'
      }
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
describe('H4 Snapshots', function () {
  it('should render an H4', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Typography.H4, props));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an H4 with color', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Typography.H4, _extends({}, props, {
      color: true
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should apply custom styles to H4', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Typography.H4, _extends({}, props, {
      style: {
        color: 'green'
      }
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
describe('H5 Snapshots', function () {
  it('should render an H5', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Typography.H5, props));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an H5 with color', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Typography.H5, _extends({}, props, {
      color: true
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should apply custom styles to H5', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Typography.H5, _extends({}, props, {
      style: {
        color: 'green'
      }
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
describe('Text Snapshots', function () {
  it('should render an Text', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Typography.Text, textProps));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Text with color', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Typography.Text, _extends({}, textProps, {
      color: true
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should apply custom styles to Text', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Typography.Text, _extends({}, textProps, {
      style: {
        color: 'green'
      }
    })));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});