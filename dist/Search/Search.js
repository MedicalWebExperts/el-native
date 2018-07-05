Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Search/Search.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _index=require('../index');var _Theme=require('../Theme');var _Theme2=_interopRequireDefault(_Theme);var _util=require('util');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var theme=_Theme2.default.getTheme();var styles=theme.search;var propTypes={handleSearch:_propTypes2.default.func,keys:_propTypes2.default.array,dataList:_propTypes2.default.array.isRequired,filters:_propTypes2.default.object,placeholder:_propTypes2.default.string,inputStyles:_propTypes2.default.object,cancelIconStyles:_propTypes2.default.object,labelStyle:_propTypes2.default.object,labelStyleActive:_propTypes2.default.object,labelTextStyle:_propTypes2.default.object,labelTextStyleActive:_propTypes2.default.object,placeholderTextColor:_propTypes2.default.string,filtersLabels:_propTypes2.default.object};var defaultProps={handleSearch:function handleSearch(){return null;},keys:[],filters:{},placeholder:'Search',inputStyles:{},cancelIconStyles:{},labelStyle:{},labelStyleActive:{},labelTextStyle:{},labelTextStyleActive:{},placeholderTextColor:'#999'};var Search=function(_Component){_inherits(Search,_Component);function Search(props){_classCallCheck(this,Search);var _this=_possibleConstructorReturn(this,(Search.__proto__||Object.getPrototypeOf(Search)).call(this,props));_initialiseProps.call(_this);var selectedFilters={};Object.keys(_this.props.filters).forEach(function(e){return _extends(selectedFilters,_defineProperty({},e,false));});_this.state={value:'',modalVisible:false,filters:_this.props.filters,selectedFilters:selectedFilters};return _this;}_createClass(Search,[{key:'render',value:function render(){var _this2=this;return _react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:166}},_react2.default.createElement(_reactNative.View,{style:styles.wrapper,__source:{fileName:_jsxFileName,lineNumber:167}},_react2.default.createElement(_index.Input,{placeholder:this.props.placeholder,type:'squared',onChangeText:function onChangeText(text){return _this2.handleChange(text);},value:this.state.value,style:_extends({},styles.input,this.props.inputStyles),onEndEditing:this.onEndEditing,returnKeyType:'search',errorLabel:false,placeholderTextColor:this.props.placeholderTextColor,__source:{fileName:_jsxFileName,lineNumber:168}}),this.state.value!==''&&_react2.default.createElement(_reactNative.View,{style:styles.cancelButtonWrapper,__source:{fileName:_jsxFileName,lineNumber:180}},_react2.default.createElement(_index.Button,{onPress:this.cleanInput,icon:'ios-close',transparent:true,textStyles:_extends({},styles.cancelButtonIcon,this.props.cancelIconStyles),backgroundStyles:styles.cancelButton,__source:{fileName:_jsxFileName,lineNumber:181}}))),_react2.default.createElement(_reactNative.View,{style:styles.wrapper,__source:{fileName:_jsxFileName,lineNumber:191}},Object.keys(this.state.filters).map(function(e,i){return _this2.renderFilterLabel(e,i);})),this.state.selectedFilter&&this.renderModal(this.state.modalVisible,this.state.filters[this.state.selectedFilter]));}}]);return Search;}(_react.Component);var _initialiseProps=function _initialiseProps(){var _this3=this;this.onEndEditing=function(){_this3.handleSearch();};this.handleChange=function(value){_this3.setState({value:value});};this.searchByFilters=function(list,filters,selectedFilters){var selectedFiltersName=Object.keys(selectedFilters).filter(function(k){return selectedFilters[k];});if(!selectedFiltersName.length){return list;}return list.filter(function(e){return selectedFiltersName.every(function(currentFilterName){return filters[currentFilterName].some(function(filterObject){return filterObject.value&&e[currentFilterName]===filterObject.name;});});});};this.searchByKeys=function(list,keys,patt){return list.filter(function(listElement){return keys.some(function(k){return patt.test(listElement[k]);});});};this.search=function(list,value,keys){var regValues=value.split(' ').join('|');var patt=new RegExp(regValues,'i');var _state=_this3.state,filters=_state.filters,selectedFilters=_state.selectedFilters;var result=list;result=_this3.searchByFilters(list,filters,selectedFilters);if(value&&keys){return _this3.searchByKeys(result,keys,patt);}if(value===''){return result;}return result.filter(function(e){return patt.test(e);});};this.handleSearch=function(){var value=_this3.state.value;var result=_this3.search(_this3.props.dataList,value,_this3.props.keys);_this3.props.handleSearch(result);};this.cleanInput=function(){_this3.setState({value:''},function(){return _this3.handleSearch();});};this.handleOpenFilter=function(f){_this3.setState({modalVisible:true,selectedFilter:f});};this.handleClose=function(filters){var selected=filters.find(function(e){return e.value;});_this3.setState(function(prevState){return{modalVisible:false,selectedFilters:_extends({},prevState.selectedFilters,_defineProperty({},prevState.selectedFilter,!!selected))};},function(){_this3.handleSearch();});};this.renderFilterLabel=function(f,i){var defaultStyles=_extends({},styles.label,_this3.props.labelStyle);var onStyles=_extends({},styles.labelOn,_this3.props.labelStyleActive);var bgStyles=_this3.state.selectedFilters[f]?_extends({},defaultStyles,onStyles):defaultStyles;var defaultTextStyle=_extends({},styles.labelText,_this3.props.labelTextStyle);var onTextStyles=_extends({},styles.labelTextOn,_this3.props.labelTextStyleActive);var textStyles=_this3.state.selectedFilters[f]?_extends({},defaultTextStyle,onTextStyles):defaultTextStyle;return _react2.default.createElement(_index.Button,{onPress:function onPress(){return _this3.handleOpenFilter(f);},key:i,backgroundStyles:bgStyles,textStyles:textStyles,outline:true,text:_this3.props.filtersLabels[f].label,__source:{fileName:_jsxFileName,lineNumber:142}});};this.renderModal=function(visible,filters){return _react2.default.createElement(_index.FilterModal,{modalVisible:visible,title:_this3.props.filtersLabels[_this3.state.selectedFilter].modalTitle,filters:filters,closeModal:_this3.handleClose,__source:{fileName:_jsxFileName,lineNumber:154}});};};Search.propTypes=propTypes;Search.defaultProps=defaultProps;exports.default=Search;