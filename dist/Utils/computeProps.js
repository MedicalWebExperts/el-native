Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _ReactNativePropRegistry=require('react-native/Libraries/Renderer/shims/ReactNativePropRegistry');var _ReactNativePropRegistry2=_interopRequireDefault(_ReactNativePropRegistry);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

function computeProps(props,defaultProps){

var computedProps={};

var incomingProps=_extends({},props);
delete incomingProps.children;

var incomingPropsStyle=incomingProps.style;
delete incomingProps.style;

computedProps=_extends({},defaultProps,incomingProps);
if(incomingProps)_lodash2.default.merge(computedProps,defaultProps,incomingProps);else
computedProps=defaultProps;


if(incomingPropsStyle){
var computedPropsStyle={};
computedProps.style={};
if(Array.isArray(incomingPropsStyle)){
_lodash2.default.forEach(incomingPropsStyle,function(style){
if(typeof style==='number'){
_lodash2.default.merge(computedPropsStyle,_ReactNativePropRegistry2.default.getByID(style));
}else{
_lodash2.default.merge(computedPropsStyle,style);
}
});
}else if(typeof incomingPropsStyle==='number'){
computedPropsStyle=_ReactNativePropRegistry2.default.getByID(incomingPropsStyle);
}else{
computedPropsStyle=incomingPropsStyle;
}

_lodash2.default.merge(computedProps.style,defaultProps.style,computedPropsStyle);
}

return computedProps;
}exports.default=

computeProps;