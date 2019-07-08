"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _FilterModal = _interopRequireDefault(require("./FilterModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filters = [{
  name: 'Pediatrics',
  value: true
}, {
  name: 'Plastic Surgery',
  value: false
}, {
  name: 'Gynecologist',
  value: false
}, {
  name: 'Cardiac Surgery',
  value: false
}];
var props = {
  modalVisible: false,
  title: 'Specialties',
  filters: filters,
  updateFilter: function updateFilter() {
    return null;
  },
  applyFilters: function applyFilters() {
    return null;
  }
};
describe('FilterModal Snapshots', function () {
  it('should render a simple FilterModal', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_FilterModal.default, props));

    var json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});