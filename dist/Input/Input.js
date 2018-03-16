Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Input/Input.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _reactNative=require('react-native');var _Theme=require('../Theme');var _Theme2=_interopRequireDefault(_Theme);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var theme=_Theme2.default.getTheme();var styles=theme.input;var propTypes={placeholder:_propTypes.string,onChangeText:_propTypes.func,multiline:_propTypes.bool,numberOfLines:_propTypes.number,autoCorrect:_propTypes.bool,editable:_propTypes.bool,selectTextOnFocus:_propTypes.bool,error:_propTypes.bool,errorText:_propTypes.string,style:_propTypes.object,type:(0,_propTypes.oneOf)(['underline','squared','rounded']),placeholderTextColor:_propTypes.string,onFocus:_propTypes.func,value:_propTypes.string};var defaultProps={placeholder:'Placeholder text',onChangeText:function onChangeText(){},multiline:false,numberOfLines:4,autoCorrect:false,editable:true,selectTextOnFocus:false,error:false,errorText:'Error text',style:{},type:'underline',placeholderTextColor:theme.colors.text,onFocus:function onFocus(){},value:''};var defaultStyles=function defaultStyles(error,type){var customStyles=styles.base;if(error){customStyles=_extends({},customStyles,styles.error);}if(type){switch(type){case'rounded':return _extends({},customStyles,styles.rounded);case'squared':return _extends({},customStyles,styles.squared);default:return customStyles;}}return customStyles;};var Input=function Input(props){var placeholder=props.placeholder,multiline=props.multiline,numberOfLines=props.numberOfLines,autoCorrect=props.autoCorrect,editable=props.editable,selectTextOnFocus=props.selectTextOnFocus,error=props.error,errorText=props.errorText,style=props.style,placeholderTextColor=props.placeholderTextColor,onFocus=props.onFocus,value=props.value,onChangeText=props.onChangeText,type=props.type;return _react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:129}},_react2.default.createElement(_reactNative.TextInput,{value:value,placeholder:placeholder,onChangeText:onChangeText,multiline:multiline,numberOfLines:numberOfLines,autoCorrect:autoCorrect,editable:editable,selectTextOnFocus:selectTextOnFocus,style:[defaultStyles(error,type),style],placeholderTextColor:placeholderTextColor,underlineColorAndroid:'transparent',onFocus:onFocus,__source:{fileName:_jsxFileName,lineNumber:130}}),_react2.default.createElement(_reactNative.Text,{style:styles.errorText,__source:{fileName:_jsxFileName,lineNumber:144}},error&&!!errorText&&errorText));};Input.propTypes=propTypes;Input.defaultProps=defaultProps;exports.default=Input;