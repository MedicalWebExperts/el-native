var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));var _react=_interopRequireDefault(require("react"));var _enzyme=require("enzyme");var _Card=require("./Card");var _Typography=require("../Typography/Typography");var _tests=require("../utils/tests");var _Theme=_interopRequireDefault(require("../Theme"));var _colors=_interopRequireDefault(require("../Theme/colors"));var _jsxFileName="/Users/nacho/projects/el-native/src/Card/Card.test.js";var theme=_Theme.default.getTheme();var styles=theme.card;var imageUrl='https://wallscover.com/images/gunther-wallpaper-2.jpg';var videoUrl='https://www.youtube.com/watch?v=z13qnzUQwuI';var defaultStyles=styles.default;var customStyles={color:_colors.default.primary};var cardCustomStyles={backgroundColor:_colors.default.primary,maxHeight:200};describe('Card',function(){it('should be a default Card with custom styles',function(){var wrapper=(0,_enzyme.shallow)(_react.default.createElement(_Card.Card,{style:cardCustomStyles,__source:{fileName:_jsxFileName,lineNumber:25}},_react.default.createElement(_Typography.Text,{__source:{fileName:_jsxFileName,lineNumber:25}},"Card")));(0,_tests.shouldHaveStyles)(wrapper,(0,_objectSpread2.default)({},defaultStyles,cardCustomStyles));});it('should have raised styles',function(){var raisedStyles=styles.raised;var wrapper=(0,_enzyme.shallow)(_react.default.createElement(_Card.Card,{raised:true,__source:{fileName:_jsxFileName,lineNumber:32}},_react.default.createElement(_Typography.Text,{__source:{fileName:_jsxFileName,lineNumber:32}},"Card")));(0,_tests.shouldHaveStyles)(wrapper,(0,_objectSpread2.default)({},defaultStyles,raisedStyles));});it('should have a CardHeader',function(){var wrapper=_react.default.createElement(_Card.Card,{__source:{fileName:_jsxFileName,lineNumber:38}},_react.default.createElement(_Card.CardHeader,{__source:{fileName:_jsxFileName,lineNumber:39}}));(0,_tests.shouldHaveComponent)(wrapper,_Card.CardHeader);});it('should have a CardBody',function(){var wrapper=_react.default.createElement(_Card.Card,{__source:{fileName:_jsxFileName,lineNumber:47}},_react.default.createElement(_Card.CardBody,{__source:{fileName:_jsxFileName,lineNumber:48}},_react.default.createElement(_Typography.Text,{__source:{fileName:_jsxFileName,lineNumber:49}},"CardBody")));(0,_tests.shouldHaveComponent)(wrapper,_Card.CardBody);});it('should have a CardFooter',function(){var wrapper=_react.default.createElement(_Card.Card,{__source:{fileName:_jsxFileName,lineNumber:58}},_react.default.createElement(_Card.CardFooter,{__source:{fileName:_jsxFileName,lineNumber:59}}));(0,_tests.shouldHaveComponent)(wrapper,_Card.CardFooter);});it('should have a CardMedia',function(){var wrapper=_react.default.createElement(_Card.Card,{__source:{fileName:_jsxFileName,lineNumber:67}},_react.default.createElement(_Card.CardMedia,{video:videoUrl,__source:{fileName:_jsxFileName,lineNumber:68}}));(0,_tests.shouldHaveComponent)(wrapper,_Card.CardMedia);});});describe('CardHeader',function(){it('should have a CardHeader props and custom styles',function(){var wrapper=(0,_enzyme.shallow)(_react.default.createElement(_Card.CardHeader,{avatar:imageUrl,avatarSize:"large",leftIcon:"ios-basketball",leftIconStyle:customStyles,style:cardCustomStyles,title:"Title of CardHeader",subTitle:"Subtitle of CardHeader",rightIcon:"ios-basketball",rightIconOnPress:function rightIconOnPress(){},__source:{fileName:_jsxFileName,lineNumber:77}}));expect(wrapper.props().avatar).toBeTruthy();expect(wrapper.props().avatarSize).toBeTruthy();expect(wrapper.props().leftIcon).toBeTruthy();expect(wrapper.props().leftIconStyle).toBeTruthy();expect(wrapper.props().style).toBeTruthy();expect(wrapper.props().title).toBeTruthy();expect(wrapper.props().subTitle).toBeTruthy();expect(wrapper.props().rightIcon).toBeTruthy();expect(wrapper.props().rightIconOnPress).toBeTruthy();(0,_tests.shouldHaveStyles)(wrapper,(0,_objectSpread2.default)({},cardCustomStyles));});});describe('CardFooter',function(){it('should have a CardFooter props and custom styles',function(){var wrapper=(0,_enzyme.shallow)(_react.default.createElement(_Card.CardFooter,{leftIcon:"ios-basketball",leftIconStyle:customStyles,leftIconSize:30,style:cardCustomStyles,subTitleIcon:"ios-basketball",subTitleText:"Text",__source:{fileName:_jsxFileName,lineNumber:105}}));expect(wrapper.props().leftIcon).toBeTruthy();expect(wrapper.props().leftIconStyle).toBeTruthy();expect(wrapper.props().leftIconSize).toBeTruthy();expect(wrapper.props().style).toBeTruthy();expect(wrapper.props().subTitleIcon).toBeTruthy();expect(wrapper.props().subTitleText).toBeTruthy();(0,_tests.shouldHaveStyles)(wrapper,(0,_objectSpread2.default)({},cardCustomStyles));});});