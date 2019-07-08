"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colors = _interopRequireDefault(require("../colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  default: {
    flex: 1,
    width: '100%',
    backgroundColor: _colors.default.light
  },
  raised: {
    shadowColor: _colors.default.gray500,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.8,
    shadowRadius: 0
  },
  body: {
    flex: 2
  },
  media: {
    width: '100%',
    height: '100%'
  }
};
exports.default = _default;