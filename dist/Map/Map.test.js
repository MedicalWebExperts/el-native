var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/Map/Map.test.js';
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _enzyme=require('enzyme');

var _Map=require('./Map');var _Map2=_interopRequireDefault(_Map);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var apiKey=process.env.ELNATIVE_GOOGLE_MAPS_APIKEY||'';

var defaultProps={
latitude:-34.5844583,
longitude:-58.4230539,
apiKey:apiKey};


describe('Snapshots',function(){
it('should render default map',function(){
var component=_reactTestRenderer2.default.create(_react2.default.createElement(_Map2.default,_extends({},
defaultProps,{__source:{fileName:_jsxFileName,lineNumber:19}})));

var json=component.toJSON();
expect(json).toMatchSnapshot();
});

it('should render custom button',function(){
var component=_reactTestRenderer2.default.create(_react2.default.createElement(_Map2.default,_extends({},
defaultProps,{
button:_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:29}},'custom'),__source:{fileName:_jsxFileName,lineNumber:27}})));

var json=component.toJSON();
expect(json).toMatchSnapshot();
});

it('should apply custom styles',function(){
var component=_reactTestRenderer2.default.create(_react2.default.createElement(_Map2.default,_extends({},
defaultProps,{
style:{
container:{width:50},
button:{backgroundColor:'yellow'}},__source:{fileName:_jsxFileName,lineNumber:36}})));


var json=component.toJSON();
expect(json).toMatchSnapshot();
});

it('should apply underlayColor',function(){
var component=_reactTestRenderer2.default.create(_react2.default.createElement(_Map2.default,_extends({},
defaultProps,{
underlayColor:'green',__source:{fileName:_jsxFileName,lineNumber:48}})));

var json=component.toJSON();
expect(json).toMatchSnapshot();
});
});

describe('Interactions',function(){
it('should execute onPress callback',function(){
var props=_extends({},defaultProps,{onPress:jest.fn()});
var wrapper=(0,_enzyme.shallow)(_react2.default.createElement(_Map2.default,_extends({},props,{__source:{fileName:_jsxFileName,lineNumber:60}})));

wrapper.find('TouchableHighlight').prop('onPress')();
expect(props.onPress).toHaveBeenCalledTimes(1);
});
});