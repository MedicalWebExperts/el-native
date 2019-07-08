"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Layout = require("./Layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  children: []
};
var childProps = {
  children: [],
  onPress: function onPress() {}
};
describe('Layout Snapshots', function () {
  it('should render a Grid with Cols', function () {
    var elements = _react.default.createElement(_Layout.Grid, props, _react.default.createElement(_Layout.Col, _extends({}, childProps, {
      style: {
        backgroundColor: 'pink'
      }
    })), _react.default.createElement(_Layout.Col, _extends({}, childProps, {
      style: {
        backgroundColor: 'red'
      },
      size: 2
    })), _react.default.createElement(_Layout.Col, _extends({}, childProps, {
      style: {
        backgroundColor: 'yellow'
      },
      size: 3
    })));

    var component = _reactTestRenderer.default.create(elements);

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a Grid with Rows', function () {
    var elements = _react.default.createElement(_Layout.Grid, props, _react.default.createElement(_Layout.Row, _extends({}, childProps, {
      style: {
        backgroundColor: 'pink'
      }
    })), _react.default.createElement(_Layout.Row, _extends({}, childProps, {
      style: {
        backgroundColor: 'pink'
      },
      size: 2
    })), _react.default.createElement(_Layout.Row, _extends({}, childProps, {
      style: {
        backgroundColor: 'pink'
      },
      size: 3
    })));

    var component = _reactTestRenderer.default.create(elements);

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Grid with Combined Rows and Cols', function () {
    var elements = _react.default.createElement(_Layout.Grid, null, _react.default.createElement(_Layout.Row, childProps, _react.default.createElement(_Layout.Col, _extends({}, childProps, {
      style: {
        backgroundColor: 'pink'
      }
    })), _react.default.createElement(_Layout.Col, _extends({}, childProps, {
      style: {
        backgroundColor: 'pink'
      },
      size: 2
    })), _react.default.createElement(_Layout.Col, _extends({}, childProps, {
      size: 3
    }), _react.default.createElement(_Layout.Row, _extends({}, childProps, {
      style: {
        backgroundColor: 'pink'
      }
    })), _react.default.createElement(_Layout.Row, _extends({}, childProps, {
      style: {
        backgroundColor: 'pink'
      }
    })))), _react.default.createElement(_Layout.Row, childProps, _react.default.createElement(_Layout.Col, _extends({}, childProps, {
      style: {
        backgroundColor: 'pink'
      }
    })), _react.default.createElement(_Layout.Col, _extends({}, childProps, {
      style: {
        backgroundColor: 'pink'
      },
      size: 2
    })), _react.default.createElement(_Layout.Col, _extends({}, childProps, {
      style: {
        backgroundColor: 'pink'
      },
      size: 3
    }))));

    var component = _reactTestRenderer.default.create(elements);

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});