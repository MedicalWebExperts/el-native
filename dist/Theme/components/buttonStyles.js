"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colors = _interopRequireDefault(require("../colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  default: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    backgroundColor: _colors.default.primary,
    borderRadius: 2
  },
  text: {
    fontSize: 18,
    color: _colors.default.lightText,
    textAlign: 'center',
    fontWeight: '500'
  },
  disabled: {
    elevation: 0,
    backgroundColor: _colors.default.dark
  },
  disabledText: {
    color: _colors.default.gray300
  },
  container: {
    alignItems: 'center'
  },
  transparent: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    elevation: 0
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textWithIconLeft: {
    marginLeft: 6
  },
  textWithIconRight: {
    marginRight: 6
  },
  outline: {
    elevation: 0,
    backgroundColor: 'transparent',
    borderWidth: 1.5
  }
};
exports.default = _default;