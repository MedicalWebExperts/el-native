"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colors = _interopRequireDefault(require("../colors"));

var _font = _interopRequireDefault(require("../font"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  default: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 2
  },
  icon: {
    color: _colors.default.text,
    marginRight: 5,
    fontSize: _font.default.size + 4
  },
  iconRight: {
    marginRight: 0,
    marginLeft: 5
  },
  label: {
    color: _colors.default.text,
    fontSize: _font.default.size
  }
};
exports.default = _default;