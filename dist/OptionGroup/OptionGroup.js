var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _propTypes=require("prop-types");var _Option=_interopRequireDefault(require("../Option/Option"));var _jsxFileName="/Users/nacho/projects/el-native/src/OptionGroup/OptionGroup.js";var propTypes={iconRight:_propTypes.bool,spaced:_propTypes.bool,style:_propTypes.object,options:_propTypes.array.isRequired,iconStyles:_propTypes.object,labelStyles:_propTypes.object,onChange:_propTypes.func,selected:(0,_propTypes.oneOfType)([string,number])};var defaultProps={iconRight:false,spaced:false,style:{},onChange:function onChange(){return null;},iconStyles:{},labelStyles:{},selected:-1};var OptionGroup=function(_React$Component){(0,_inherits2.default)(OptionGroup,_React$Component);function OptionGroup(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,OptionGroup);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(OptionGroup)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={selected:_this.props.selected||-1};_this.handlePress=function(selected,id){if(selected){_this.setState({selected:id});_this.props.onChange(id);}};return _this;}(0,_createClass2.default)(OptionGroup,[{key:"render",value:function render(){var _this2=this;return _react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:42}},this.props.options.map(function(e){return _react.default.createElement(_Option.default,{key:e.id,onPress:_this2.handlePress,id:e.id,label:e.label,selected:_this2.state.selected===e.id,iconStyles:_this2.props.iconStyles,labelStyles:_this2.props.labelStyles,style:_this2.props.style,spaced:_this2.props.spaced,iconRight:_this2.props.iconRight,optionGroup:true,__source:{fileName:_jsxFileName,lineNumber:44}});}));}}]);return OptionGroup;}(_react.default.Component);OptionGroup.propTypes=propTypes;OptionGroup.defaultProps=defaultProps;var _default=OptionGroup;exports.default=_default;