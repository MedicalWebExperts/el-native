"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colors = _interopRequireDefault(require("../colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  base: {
    borderBottomWidth: 1,
    borderColor: _colors.default.text,
    height: 40,
    textAlign: 'left',
    minWidth: '100%',
    color: _colors.default.text
  },
  error: {
    borderColor: _colors.default.danger
  },
  errorText: {
    color: _colors.default.danger,
    paddingVertical: 4,
    fontSize: 12
  },
  squared: {
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 10
  },
  rounded: {
    borderRadius: 20,
    borderWidth: 1,
    paddingLeft: 10
  }
};
exports.default = _default;