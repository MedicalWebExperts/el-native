Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/Grid/Grid.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');
var _reactNative=require('react-native');
var _computeProps=require('../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);
var _Row=require('../Row/Row');var _Row2=_interopRequireDefault(_Row);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Grid=function(_Component){_inherits(Grid,_Component);function Grid(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Grid);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Grid.__proto__||Object.getPrototypeOf(Grid)).call.apply(_ref,[this].concat(args))),_this),_this.























isRow=function(){
var isRow=false;
_react2.default.Children.forEach(_this.props.children,function(child){
isRow=child&&child.type===_Row2.default?isRow:true;
});
return isRow;
},_this.

renderView=function(){return(
_react2.default.createElement(_reactNative.View,_extends({},_this.props,_this.prepareRootProps(),{__source:{fileName:_jsxFileName,lineNumber:40}}),
_this.props.children));},_this.



renderTouchableOpacity=function(){return(
_react2.default.createElement(_reactNative.TouchableOpacity,_extends({onPress:_this.props.onPress},_this.prepareRootProps(),{__source:{fileName:_jsxFileName,lineNumber:46}}),
_this.renderView()));},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Grid,[{key:'prepareRootProps',value:function prepareRootProps(){var style={flex:1,flexDirection:this.isRow()?'column':'row'};var defaultProps={style:style};return(0,_computeProps2.default)(this.props,defaultProps);}},{key:'render',value:function render()



{
return this.props.onPress?this.renderTouchableOpacity():this.renderView();
}}]);return Grid;}(_react.Component);Grid.propTypes={children:(0,_propTypes.oneOfType)([_propTypes.array,_propTypes.object]).isRequired,onPress:_propTypes.func};Grid.defaultProps={children:null,onPress:null};exports.default=Grid;