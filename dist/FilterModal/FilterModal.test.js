var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _react=_interopRequireDefault(require("react"));var _reactTestRenderer=_interopRequireDefault(require("react-test-renderer"));var _FilterModal=_interopRequireDefault(require("./FilterModal"));var _jsxFileName="/Users/nacho/projects/el-native/src/FilterModal/FilterModal.test.js";var filters=[{name:'Pediatrics',value:true},{name:'Plastic Surgery',value:false},{name:'Gynecologist',value:false},{name:'Cardiac Surgery',value:false}];var props={modalVisible:false,title:'Specialties',filters:filters,updateFilter:function updateFilter(){return null;},applyFilters:function applyFilters(){return null;}};describe('FilterModal Snapshots',function(){it('should render a simple FilterModal',function(){var component=_reactTestRenderer.default.create(_react.default.createElement(_FilterModal.default,(0,_extends2.default)({},props,{__source:{fileName:_jsxFileName,lineNumber:23}})));var json=component.toJSON();expect(json).toMatchSnapshot();});});