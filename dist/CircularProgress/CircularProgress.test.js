"use strict";

var _react = _interopRequireDefault(require("react"));

var _CircularProgress = _interopRequireDefault(require("./CircularProgress"));

var _tests = require("../utils/tests");

var _Theme = _interopRequireDefault(require("../Theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = _Theme.default.getTheme();

describe('CircularProgress Snapshots', function () {
  it('should render a text', function () {
    (0, _tests.shouldHaveText)(_react.default.createElement(_CircularProgress.default, {
      size: 200,
      backgroundColor: theme.colors.light,
      colors: [theme.colors.primary, theme.colors.secondary],
      text: "TEXT"
    }), 'TEXT');
  });
  it('should render an inner text', function () {
    (0, _tests.shouldHaveText)(_react.default.createElement(_CircularProgress.default, {
      size: 200,
      backgroundColor: theme.colors.light,
      colors: [theme.colors.primary, theme.colors.secondary],
      innerText: "In"
    }), 'In');
  });
  it('should render an inner text', function () {
    (0, _tests.shouldHaveText)(_react.default.createElement(_CircularProgress.default, {
      size: 200,
      backgroundColor: theme.colors.light,
      colors: [theme.colors.primary],
      innerText: "In"
    }), 'In');
  });
});