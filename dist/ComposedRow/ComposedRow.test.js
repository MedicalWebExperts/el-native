var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _reactTestRenderer=_interopRequireDefault(require("react-test-renderer"));var _ComposedRow=_interopRequireDefault(require("./ComposedRow"));var _jsxFileName="/Users/nacho/projects/el-native/src/ComposedRow/ComposedRow.test.js";describe('ComposedRow Snapshots',function(){it('should render a simple ComposedRow',function(){var component=_reactTestRenderer.default.create(_react.default.createElement(_ComposedRow.default,{style:{maxHeight:100,backgroundColor:'salmon'},title:"Title of Composed Row",subTitle:"Here goes a random a Text as Lorem Ipsum",__source:{fileName:_jsxFileName,lineNumber:8}}));var json=component.toJSON();expect(json).toMatchSnapshot();});});