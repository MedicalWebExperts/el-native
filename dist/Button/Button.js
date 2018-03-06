Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/Button/Button.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _reactNative=require('react-native');var _Icon=require('../Icon/Icon');var _Icon2=_interopRequireDefault(_Icon);var _Theme=require('../Theme');var _Theme2=_interopRequireDefault(_Theme);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var theme=_Theme2.default.getTheme();var styles=theme.button;var propTypes={backgroundStyles:_propTypes.object,textStyles:_propTypes.object,disabled:_propTypes.bool,accessibilityLabel:_propTypes.string,text:_propTypes.string,block:_propTypes.bool,transparent:_propTypes.bool,outline:_propTypes.bool,outlineColor:_propTypes.string,roundedDimensions:_propTypes.number,processing:_propTypes.bool,iconRight:_propTypes.string,iconLeft:_propTypes.string,icon:_propTypes.string,onPress:_propTypes.func.isRequired};var defaultProps={backgroundStyles:{},textStyles:{},disabled:false,accessibilityLabel:'',block:false,outline:false,outlineColor:theme.colors.primary,roundedDimensions:0,transparent:false,processing:false,text:'',iconRight:'',iconLeft:'',icon:'',onPress:null};var Touchable=_reactNative.Platform.OS==='android'?_reactNative.TouchableNativeFeedback:_reactNative.TouchableOpacity;var accessibilityTraits=['button'];var textStyles=styles.text;var renderProcessing=function renderProcessing(text,txtStyles){return _react2.default.createElement(_reactNative.View,{style:styles.iconWrapper,__source:{fileName:_jsxFileName,lineNumber:107}},_react2.default.createElement(_reactNative.ActivityIndicator,{size:'small',color:txtStyles.color,__source:{fileName:_jsxFileName,lineNumber:108}}),!!text&&_react2.default.createElement(_reactNative.Text,{style:[txtStyles,styles.textWithIconLeft],__source:{fileName:_jsxFileName,lineNumber:109}},text));};var renderText=function renderText(text,disabled,txtStyles){return _react2.default.createElement(_reactNative.Text,{style:txtStyles,disabled:disabled,__source:{fileName:_jsxFileName,lineNumber:114}},text);};var renderIconLeft=function renderIconLeft(text,disabled,txtStyles,icon){return _react2.default.createElement(_reactNative.View,{style:styles.iconWrapper,__source:{fileName:_jsxFileName,lineNumber:120}},_react2.default.createElement(_Icon2.default,{color:txtStyles.color,size:txtStyles.fontSize,name:icon,__source:{fileName:_jsxFileName,lineNumber:121}}),_react2.default.createElement(_reactNative.Text,{style:[txtStyles,styles.textWithIconLeft],disabled:disabled,__source:{fileName:_jsxFileName,lineNumber:122}},text));};var renderIconRight=function renderIconRight(text,disabled,txtStyles,icon){return _react2.default.createElement(_reactNative.View,{style:styles.iconWrapper,__source:{fileName:_jsxFileName,lineNumber:129}},_react2.default.createElement(_reactNative.Text,{style:[txtStyles,styles.textWithIconRight],disabled:disabled,__source:{fileName:_jsxFileName,lineNumber:130}},text),_react2.default.createElement(_Icon2.default,{color:txtStyles.color,size:txtStyles.fontSize,name:icon,__source:{fileName:_jsxFileName,lineNumber:133}}));};var renderContent=function renderContent(text,disabled,icon,iconLeft,iconRight,txtStyles,processing){if(processing){return renderProcessing(text,txtStyles);}if(iconLeft){return renderIconLeft(text,disabled,txtStyles,iconLeft);}if(iconRight){return renderIconRight(text,disabled,txtStyles,iconRight);}if(!icon){return renderText(text,disabled,txtStyles);}return _react2.default.createElement(_reactNative.View,{style:{padding:txtStyles.padding},__source:{fileName:_jsxFileName,lineNumber:152}},_react2.default.createElement(_Icon2.default,{color:txtStyles.color,size:txtStyles.fontSize,name:icon,__source:{fileName:_jsxFileName,lineNumber:153}}));};var Button=function Button(props){var text=props.text,disabled=props.disabled,icon=props.icon,iconLeft=props.iconLeft,iconRight=props.iconRight,processing=props.processing;var buttonStyles=styles.default;var containerStyles=styles.container;if(props.block){buttonStyles=_extends({},buttonStyles,{width:'100%'});containerStyles=_extends({},containerStyles,{width:'100%'});}if(props.transparent){buttonStyles=_extends({},buttonStyles,styles.transparent);textStyles=_extends({},textStyles);}if(props.outline){buttonStyles=_extends({},buttonStyles,styles.outline,{borderColor:props.outlineColor});textStyles=_extends({},textStyles,{color:props.outlineColor});}if(props.disabled){buttonStyles=_extends({},buttonStyles,styles.disabled);textStyles=_extends({},textStyles,styles.disabledText);}if(props.roundedDimensions){buttonStyles=_extends({},buttonStyles,{width:props.roundedDimensions,height:props.roundedDimensions,borderRadius:parseInt(props.roundedDimensions/2,10)});}return _react2.default.createElement(Touchable,{disabled:props.disabled,onPress:props.onPress,accessibilityLabel:props.accessibilityLabel,accessibilityTraits:accessibilityTraits,style:containerStyles,__source:{fileName:_jsxFileName,lineNumber:192}},_react2.default.createElement(_reactNative.View,{style:_extends({},buttonStyles,props.backgroundStyles),__source:{fileName:_jsxFileName,lineNumber:199}},renderContent(text,disabled,icon,iconLeft,iconRight,_extends({},textStyles,props.textStyles),processing)));};Button.propTypes=propTypes;Button.defaultProps=defaultProps;exports.default=Button;