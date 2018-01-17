const _Map = require('./Map/Map');
const _Map2 = _interopRequireDefault(_Map);
const _Grid = require('./Grid/Grid');
const _Grid2 = _interopRequireDefault(_Grid);
const _Col = require('./Col/Col');
const _Col2 = _interopRequireDefault(_Col);
const _Row = require('./Row/Row');
const _Row2 = _interopRequireDefault(_Row);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const _Switch = require('./Switch/Switch');
const _Switch2 = _interopRequireDefault(_Switch);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = {
  Map: _Map2.default,
  Grid: _Grid2.default,
  Col: _Col2.default,
  Row: _Row2.default,
  Switch: _Switch2.default,
};
