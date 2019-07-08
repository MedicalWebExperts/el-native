var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _enzyme=require("enzyme");var _Checkbox=_interopRequireDefault(require("./Checkbox"));var _Icon=_interopRequireDefault(require("../Icon/Icon"));var _colors=_interopRequireDefault(require("../Theme/colors"));var _tests=require("../utils/tests");var _jsxFileName="/Users/nacho/projects/el-native/src/Checkbox/Checkbox.test.js";describe('Checkbox',function(){it('should render a Checkbox with cutom styles',function(){var wrapper=(0,_enzyme.shallow)(_react.default.createElement(_Checkbox.default,{color:_colors.default.primary,__source:{fileName:_jsxFileName,lineNumber:11}}));expect(wrapper.find('Icon').props().color).toBeTruthy();});it('should render a Checkbox with custom size',function(){var wrapper=(0,_enzyme.shallow)(_react.default.createElement(_Checkbox.default,{size:30,__source:{fileName:_jsxFileName,lineNumber:16}}));expect(wrapper.find('Icon').props().size).toBeTruthy();});it('should render an Icon',function(){(0,_tests.shouldHaveComponent)(_react.default.createElement(_Checkbox.default,{onPress:function onPress(){return null;},__source:{fileName:_jsxFileName,lineNumber:21}}),_Icon.default);});test('should call the onPress',function(){(0,_tests.shouldSimulateOnPress)(_react.default.createElement(_Checkbox.default,{onPress:function onPress(){return null;},__source:{fileName:_jsxFileName,lineNumber:25}}));});});