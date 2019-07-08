"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ComposedRow = _interopRequireDefault(require("./ComposedRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ComposedRow Snapshots', function () {
  it('should render a simple ComposedRow', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_ComposedRow.default, {
      style: {
        maxHeight: 100,
        backgroundColor: 'salmon'
      },
      title: "Title of Composed Row",
      subTitle: "Here goes a random a Text as Lorem Ipsum"
    }));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});