var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _propTypes=require("prop-types");var _jsxFileName="/Users/nacho/projects/el-native/src/List/List.js";var propTypes={data:_propTypes.array.isRequired,keyExtractor:(0,_propTypes.oneOfType)([_propTypes.string,_propTypes.number]),ListFooterComponent:_propTypes.node,onRefresh:_propTypes.func,onEndReached:_propTypes.func,onEndReachedThreshold:_propTypes.number,stickyHeaderIndices:_propTypes.array,renderItem:_propTypes.func};var defaultProps={keyExtractor:null,ListFooterComponent:null,onRefresh:function onRefresh(){},onEndReached:function onEndReached(){},onEndReachedThreshold:0,stickyHeaderIndices:[],renderItem:function renderItem(){}};var List=function List(props){return _react.default.createElement(_reactNative.FlatList,{data:props.data,keyExtractor:props.keyExtractor,ListFooterComponent:function ListFooterComponent(){return props.ListFooterComponent;},onRefresh:props.onRefresh,onEndReached:props.onEndReached,onEndReachedThreshold:props.onEndReachedThreshold,stickyHeaderIndices:props.stickyHeaderIndices,renderItem:props.renderItem,refreshing:!!props.onRefresh,__source:{fileName:_jsxFileName,lineNumber:51}});};List.propTypes=propTypes;List.defaultProps=defaultProps;var _default=List;exports.default=_default;