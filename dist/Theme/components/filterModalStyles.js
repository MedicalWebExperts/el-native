"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colors = _interopRequireDefault(require("../colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  wrapper: {
    marginTop: 20
  },
  innerWrapper: {
    flex: 1,
    marginHorizontal: 14
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: 60,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: _colors.default.gray400
  },
  titleWrapper: {
    paddingHorizontal: 14
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  selectAll: {
    fontWeight: 'bold'
  },
  switch: {
    height: 10
  },
  button: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    marginHorizontal: 20
  },
  buttonText: {
    color: 'black',
    fontSize: 40
  },
  extraRow: {
    height: 90
  },
  filter: {
    maxWidth: '80%'
  }
};
exports.default = _default;