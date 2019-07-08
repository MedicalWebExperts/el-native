var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _react=_interopRequireDefault(require("react"));var _reactTestRenderer=_interopRequireDefault(require("react-test-renderer"));var _Layout=require("./Layout");var _jsxFileName="/Users/nacho/projects/el-native/src/Layout/Layout.test.js";var props={children:[]};var childProps={children:[],onPress:function onPress(){}};describe('Layout Snapshots',function(){it('should render a Grid with Cols',function(){var elements=_react.default.createElement(_Layout.Grid,(0,_extends2.default)({},props,{__source:{fileName:_jsxFileName,lineNumber:18}}),_react.default.createElement(_Layout.Col,(0,_extends2.default)({},childProps,{style:{backgroundColor:'pink'},__source:{fileName:_jsxFileName,lineNumber:19}})),_react.default.createElement(_Layout.Col,(0,_extends2.default)({},childProps,{style:{backgroundColor:'red'},size:2,__source:{fileName:_jsxFileName,lineNumber:20}})),_react.default.createElement(_Layout.Col,(0,_extends2.default)({},childProps,{style:{backgroundColor:'yellow'},size:3,__source:{fileName:_jsxFileName,lineNumber:21}})));var component=_reactTestRenderer.default.create(elements);var json=component.toJSON();expect(json).toMatchSnapshot();});it('should render a Grid with Rows',function(){var elements=_react.default.createElement(_Layout.Grid,(0,_extends2.default)({},props,{__source:{fileName:_jsxFileName,lineNumber:30}}),_react.default.createElement(_Layout.Row,(0,_extends2.default)({},childProps,{style:{backgroundColor:'pink'},__source:{fileName:_jsxFileName,lineNumber:31}})),_react.default.createElement(_Layout.Row,(0,_extends2.default)({},childProps,{style:{backgroundColor:'pink'},size:2,__source:{fileName:_jsxFileName,lineNumber:32}})),_react.default.createElement(_Layout.Row,(0,_extends2.default)({},childProps,{style:{backgroundColor:'pink'},size:3,__source:{fileName:_jsxFileName,lineNumber:33}})));var component=_reactTestRenderer.default.create(elements);var json=component.toJSON();expect(json).toMatchSnapshot();});it('should render an Grid with Combined Rows and Cols',function(){var elements=_react.default.createElement(_Layout.Grid,{__source:{fileName:_jsxFileName,lineNumber:42}},_react.default.createElement(_Layout.Row,(0,_extends2.default)({},childProps,{__source:{fileName:_jsxFileName,lineNumber:43}}),_react.default.createElement(_Layout.Col,(0,_extends2.default)({},childProps,{style:{backgroundColor:'pink'},__source:{fileName:_jsxFileName,lineNumber:44}})),_react.default.createElement(_Layout.Col,(0,_extends2.default)({},childProps,{style:{backgroundColor:'pink'},size:2,__source:{fileName:_jsxFileName,lineNumber:45}})),_react.default.createElement(_Layout.Col,(0,_extends2.default)({},childProps,{size:3,__source:{fileName:_jsxFileName,lineNumber:46}}),_react.default.createElement(_Layout.Row,(0,_extends2.default)({},childProps,{style:{backgroundColor:'pink'},__source:{fileName:_jsxFileName,lineNumber:47}})),_react.default.createElement(_Layout.Row,(0,_extends2.default)({},childProps,{style:{backgroundColor:'pink'},__source:{fileName:_jsxFileName,lineNumber:48}})))),_react.default.createElement(_Layout.Row,(0,_extends2.default)({},childProps,{__source:{fileName:_jsxFileName,lineNumber:51}}),_react.default.createElement(_Layout.Col,(0,_extends2.default)({},childProps,{style:{backgroundColor:'pink'},__source:{fileName:_jsxFileName,lineNumber:52}})),_react.default.createElement(_Layout.Col,(0,_extends2.default)({},childProps,{style:{backgroundColor:'pink'},size:2,__source:{fileName:_jsxFileName,lineNumber:53}})),_react.default.createElement(_Layout.Col,(0,_extends2.default)({},childProps,{style:{backgroundColor:'pink'},size:3,__source:{fileName:_jsxFileName,lineNumber:54}}))));var component=_reactTestRenderer.default.create(elements);var json=component.toJSON();expect(json).toMatchSnapshot();});});