var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _react=_interopRequireDefault(require("react"));var _reactTestRenderer=_interopRequireDefault(require("react-test-renderer"));var _enzyme=require("enzyme");var _Switch=_interopRequireDefault(require("./Switch"));var _jsxFileName="/Users/nacho/projects/el-native/src/Switch/Switch.test.js";describe('Switch Snapshots',function(){it('should render a Switch',function(){var component=_reactTestRenderer.default.create(_react.default.createElement(_Switch.default,{__source:{fileName:_jsxFileName,lineNumber:10}}));var json=component.toJSON();expect(json).toMatchSnapshot();});it('should render a Switch toggled on',function(){var component=_reactTestRenderer.default.create(_react.default.createElement(_Switch.default,{value:true,__source:{fileName:_jsxFileName,lineNumber:16}}));var json=component.toJSON();expect(json).toMatchSnapshot();});it('should render a Switch disabled',function(){var component=_reactTestRenderer.default.create(_react.default.createElement(_Switch.default,{disabled:true,__source:{fileName:_jsxFileName,lineNumber:22}}));var json=component.toJSON();expect(json).toMatchSnapshot();});it('should render a Switch disabled toggled on',function(){var component=_reactTestRenderer.default.create(_react.default.createElement(_Switch.default,{disabled:true,value:true,__source:{fileName:_jsxFileName,lineNumber:28}}));var json=component.toJSON();expect(json).toMatchSnapshot();});it('should render a Switch with custom color',function(){var component=_reactTestRenderer.default.create(_react.default.createElement(_Switch.default,{color:"#FAFAFA",__source:{fileName:_jsxFileName,lineNumber:34}}));var json=component.toJSON();expect(json).toMatchSnapshot();});});describe('Interactions',function(){it('should execute onPress callback',function(){var props={onPress:jest.fn()};var wrapper=(0,_enzyme.shallow)(_react.default.createElement(_Switch.default,(0,_extends2.default)({},props,{__source:{fileName:_jsxFileName,lineNumber:43}})));wrapper.prop('onValueChange')();expect(props.onPress).toHaveBeenCalledTimes(1);});});