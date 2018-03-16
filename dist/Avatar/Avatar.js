Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Avatar/Avatar.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _reactNative=require('react-native');var _Theme=require('../Theme');var _Theme2=_interopRequireDefault(_Theme);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var theme=_Theme2.default.getTheme();var styles=theme.avatar;var propTypes={square:_propTypes.bool,size:(0,_propTypes.oneOf)(['large','medium','small']),borderColor:_propTypes.string,borderThickness:_propTypes.number,placeholder:(0,_propTypes.oneOfType)([_propTypes.number,_propTypes.object]),source:_propTypes.string};var defaultProps={square:false,size:'medium',borderColor:'',borderThickness:0,placeholder:{},source:''};var getSize=function getSize(size){if(size==='large'){return styles.avatarLarge;}else if(size==='small'){return styles.avatarSmall;}return styles.default;};var getStyles=function getStyles(props){var fullStyles=_extends({},styles.default);if(props.borderThickness){fullStyles=_extends(fullStyles,{borderWidth:props.borderThickness});}if(props.borderColor){fullStyles=_extends(fullStyles,{borderColor:props.borderColor});}if(props.size){fullStyles=_extends(fullStyles,getSize(props.size));}if(props.square){fullStyles=_extends(fullStyles,styles.avatarSquare);}return fullStyles;};var Avatar=function Avatar(props){return _react2.default.createElement(_reactNative.Image,{source:props.source?{uri:props.source}:props.placeholder,style:getStyles(props),borderThickness:props.borderThickness,borderColor:props.borderColor,square:props.square,size:props.size,__source:{fileName:_jsxFileName,lineNumber:81}});};Avatar.propTypes=propTypes;Avatar.defaultProps=defaultProps;exports.default=Avatar;