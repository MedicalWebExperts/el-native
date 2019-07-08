var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _reactTestRenderer=_interopRequireDefault(require("react-test-renderer"));var _enzyme=require("enzyme");var _Map=_interopRequireDefault(require("./Map"));var _jsxFileName="/Users/nacho/projects/el-native/src/Map/Map.test.js";var apiKey=process.env.ELNATIVE_GOOGLE_MAPS_APIKEY||'';var defaultProps={latitude:-34.5844583,longitude:-58.4230539,apiKey:apiKey};describe('Snapshots',function(){it('should render default map',function(){var component=_reactTestRenderer.default.create(_react.default.createElement(_Map.default,(0,_extends2.default)({},defaultProps,{__source:{fileName:_jsxFileName,lineNumber:19}})));var json=component.toJSON();expect(json).toMatchSnapshot();});it('should render custom button',function(){var component=_reactTestRenderer.default.create(_react.default.createElement(_Map.default,(0,_extends2.default)({},defaultProps,{button:_react.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:29}},"custom"),__source:{fileName:_jsxFileName,lineNumber:27}})));var json=component.toJSON();expect(json).toMatchSnapshot();});it('should apply custom styles',function(){var component=_reactTestRenderer.default.create(_react.default.createElement(_Map.default,(0,_extends2.default)({},defaultProps,{style:{container:{width:50},button:{backgroundColor:'yellow'}},__source:{fileName:_jsxFileName,lineNumber:36}})));var json=component.toJSON();expect(json).toMatchSnapshot();});it('should apply underlayColor',function(){var component=_reactTestRenderer.default.create(_react.default.createElement(_Map.default,(0,_extends2.default)({},defaultProps,{underlayColor:"green",__source:{fileName:_jsxFileName,lineNumber:48}})));var json=component.toJSON();expect(json).toMatchSnapshot();});});describe('Interactions',function(){it('should execute onPress callback',function(){var props=(0,_objectSpread2.default)({},defaultProps,{onPress:jest.fn()});var wrapper=(0,_enzyme.shallow)(_react.default.createElement(_Map.default,(0,_extends2.default)({},props,{__source:{fileName:_jsxFileName,lineNumber:60}})));wrapper.find('TouchableHighlight').prop('onPress')();expect(props.onPress).toHaveBeenCalledTimes(1);});});