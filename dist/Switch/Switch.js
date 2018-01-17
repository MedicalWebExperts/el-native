Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Switch/Switch.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var propTypes={



onPress:_propTypes.func,



style:_propTypes.object,



color:_propTypes.string,



value:_propTypes.bool,



disabled:_propTypes.bool};


var defaultProps={
onPress:null,
style:{},



color:'lightgreen',
value:false,
disabled:false};








var Switch=function Switch(props){return(
_react2.default.createElement(_reactNative.Switch,{
style:props.style,
onValueChange:props.onPress&&typeof props.onPress==='function'?props.onPress:function(){},
onTintColor:props.color,
value:props.value,
disabled:props.disabled,__source:{fileName:_jsxFileName,lineNumber:46}}));};



Switch.propTypes=propTypes;
Switch.defaultProps=defaultProps;exports.default=

Switch;