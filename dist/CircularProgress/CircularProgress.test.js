var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _CircularProgress=_interopRequireDefault(require("./CircularProgress"));var _tests=require("../utils/tests");var _Theme=_interopRequireDefault(require("../Theme"));var _jsxFileName="/Users/nacho/projects/el-native/src/CircularProgress/CircularProgress.test.js";var theme=_Theme.default.getTheme();describe('CircularProgress Snapshots',function(){it('should render a text',function(){(0,_tests.shouldHaveText)(_react.default.createElement(_CircularProgress.default,{size:200,backgroundColor:theme.colors.light,colors:[theme.colors.primary,theme.colors.secondary],text:"TEXT",__source:{fileName:_jsxFileName,lineNumber:13}}),'TEXT');});it('should render an inner text',function(){(0,_tests.shouldHaveText)(_react.default.createElement(_CircularProgress.default,{size:200,backgroundColor:theme.colors.light,colors:[theme.colors.primary,theme.colors.secondary],innerText:"In",__source:{fileName:_jsxFileName,lineNumber:25}}),'In');});it('should render an inner text',function(){(0,_tests.shouldHaveText)(_react.default.createElement(_CircularProgress.default,{size:200,backgroundColor:theme.colors.light,colors:[theme.colors.primary],innerText:"In",__source:{fileName:_jsxFileName,lineNumber:37}}),'In');});});