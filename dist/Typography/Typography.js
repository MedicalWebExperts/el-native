Object.defineProperty(exports,"__esModule",{value:true});exports.Text=exports.H5=exports.H4=exports.H3=exports.H2=exports.H1=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/Typography/Typography.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _reactNative=require('react-native');var _Theme=require('../Theme');var _Theme2=_interopRequireDefault(_Theme);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var theme=_Theme2.default.getTheme();var styles=theme.typography;var h1Proptypes={style:_propTypes.object,color:_propTypes.bool,children:_propTypes.string.isRequired};var h1DefaultProps={style:{},color:false};var h2Proptypes={style:_propTypes.object,color:_propTypes.bool,children:_propTypes.string.isRequired};var h2DefaultProps={style:{},color:false};var h3Proptypes={style:_propTypes.object,color:_propTypes.bool,children:_propTypes.string.isRequired};var h3DefaultProps={style:{},color:false};var h4Proptypes={style:_propTypes.object,color:_propTypes.bool,children:_propTypes.string.isRequired};var h4DefaultProps={style:{},color:false};var h5Proptypes={style:_propTypes.object,color:_propTypes.bool,children:_propTypes.string.isRequired};var h5DefaultProps={style:{},color:false};var textProptypes={style:_propTypes.object,children:_propTypes.string.isRequired};var textDefaultProps={style:{}};var H1=function H1(props){return _react2.default.createElement(_reactNative.Text,{style:props.color?_extends({},styles.h1Color,props.style):_extends({},styles.h1,props.style),__source:{fileName:_jsxFileName,lineNumber:118}},props.children);};var H2=function H2(props){return _react2.default.createElement(_reactNative.Text,{style:props.color?_extends({},styles.h2Color,props.style):_extends({},styles.h2,props.style),__source:{fileName:_jsxFileName,lineNumber:128}},props.children);};var H3=function H3(props){return _react2.default.createElement(_reactNative.Text,{style:props.color?_extends({},styles.h3Color,props.style):_extends({},styles.h3,props.style),__source:{fileName:_jsxFileName,lineNumber:138}},props.children);};var H4=function H4(props){return _react2.default.createElement(_reactNative.Text,{style:props.color?_extends({},styles.h4Color,props.style):_extends({},styles.h4,props.style),__source:{fileName:_jsxFileName,lineNumber:148}},props.children);};var H5=function H5(props){return _react2.default.createElement(_reactNative.Text,{style:props.color?_extends({},styles.h5Color,props.style):_extends({},styles.h5,props.style),__source:{fileName:_jsxFileName,lineNumber:158}},props.children);};var TextTheme=function TextTheme(props){return _react2.default.createElement(_reactNative.Text,{style:_extends({},styles.text,props.style),__source:{fileName:_jsxFileName,lineNumber:167}},props.children);};H1.propTypes=h1Proptypes;H1.defaultProps=h1DefaultProps;H2.propTypes=h2Proptypes;H2.defaultProps=h2DefaultProps;H3.propTypes=h3Proptypes;H3.defaultProps=h3DefaultProps;H4.propTypes=h4Proptypes;H4.defaultProps=h4DefaultProps;H5.propTypes=h5Proptypes;H5.defaultProps=h5DefaultProps;TextTheme.propTypes=textProptypes;TextTheme.defaultProps=textDefaultProps;exports.H1=H1;exports.H2=H2;exports.H3=H3;exports.H4=H4;exports.H5=H5;exports.Text=TextTheme;