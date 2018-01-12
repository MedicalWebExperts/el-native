Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/Map/Map.js';exports.default=


























































Map;var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _qs=require('qs');var _qs2=_interopRequireDefault(_qs);var _reactNative=require('react-native');var _styles=require('./styles');var _styles2=_interopRequireDefault(_styles);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var propTypes={latitude:_propTypes2.default.number.isRequired,longitude:_propTypes2.default.number.isRequired,width:_propTypes2.default.number,height:_propTypes2.default.number,apiKey:_propTypes2.default.string.isRequired,maptype:_propTypes2.default.string,zoom:_propTypes2.default.number,onPress:_propTypes2.default.func,style:_propTypes2.default.object,button:_propTypes2.default.element,underlayColor:_propTypes2.default.string};var defaultProps={width:undefined,height:undefined,maptype:'roadmap',zoom:18,onPress:undefined,style:{},button:undefined,underlayColor:'white'};function Map(props){
var dims=_reactNative.Dimensions.get('window');

var computedDimensions={
width:Math.round(props.width||dims.width),
height:Math.round(props.height||dims.width*(2/3))};


var googleStaticMapUri=function googleStaticMapUri(){
var baseUrl='https://maps.googleapis.com/maps/api/staticmap';
var apiKey=props.apiKey;
var params={
markers:[props.latitude,props.longitude].join(','),
maptype:props.maptype,
size:[computedDimensions.width,computedDimensions.height].join('x'),
scale:2,
apiKey:apiKey};

var query=_qs2.default.stringify(params,{arrayFormat:'brackets'});
var url=baseUrl+'?'+query;
return url;
};

var handleOnPress=function handleOnPress(){
var generateIos=function generateIos(){return'https://maps.apple.com/?q='+props.latitude+','+props.longitude+'&z='+props.zoom;};
var generateAndroid=function generateAndroid(){return'geo:'+props.latitude+','+props.longitude;};

var url=_reactNative.Platform.select({
ios:generateIos,
android:generateAndroid})();


_reactNative.Linking.canOpenURL(url).then(function(supported){
if(!supported){
console.error('Can\'t handle url: '+url);
return;
}
_reactNative.Linking.openURL(url);
}).catch(function(err){return console.error('An error occurred',err);});
};

var onPress=props.onPress&&typeof props.onPress==='function'?props.onPress:handleOnPress;

var renderButton=function renderButton(){return(
_react2.default.createElement(_reactNative.TouchableHighlight,{
onPress:onPress,
underlayColor:props.underlayColor,
style:_extends({},_styles2.default.button,props.style.button),__source:{fileName:_jsxFileName,lineNumber:104}},

_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:109}},
props.button||_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:110}},'Navigate'))));};




return(
_react2.default.createElement(_reactNative.View,{style:_extends({},_styles2.default.container,props.style.container),__source:{fileName:_jsxFileName,lineNumber:116}},
_react2.default.createElement(_reactNative.Image,{
source:{
uri:googleStaticMapUri()},

style:computedDimensions,__source:{fileName:_jsxFileName,lineNumber:117}}),

renderButton()));


}

Map.propTypes=propTypes;
Map.defaultProps=defaultProps;