"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Card = require("./Card");

var _Typography = require("../Typography/Typography");

var _tests = require("../utils/tests");

var _Theme = _interopRequireDefault(require("../Theme"));

var _colors = _interopRequireDefault(require("../Theme/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = _Theme.default.getTheme();

var styles = theme.card;
var imageUrl = 'https://wallscover.com/images/gunther-wallpaper-2.jpg';
var videoUrl = 'https://www.youtube.com/watch?v=z13qnzUQwuI';
var defaultStyles = styles.default;
var customStyles = {
  color: _colors.default.primary
};
var cardCustomStyles = {
  backgroundColor: _colors.default.primary,
  maxHeight: 200
};
describe('Card', function () {
  it('should be a default Card with custom styles', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Card.Card, {
      style: cardCustomStyles
    }, _react.default.createElement(_Typography.Text, null, "Card")));
    (0, _tests.shouldHaveStyles)(wrapper, _objectSpread({}, defaultStyles, cardCustomStyles));
  });
  it('should have raised styles', function () {
    var raisedStyles = styles.raised;
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Card.Card, {
      raised: true
    }, _react.default.createElement(_Typography.Text, null, "Card")));
    (0, _tests.shouldHaveStyles)(wrapper, _objectSpread({}, defaultStyles, raisedStyles));
  });
  it('should have a CardHeader', function () {
    var wrapper = _react.default.createElement(_Card.Card, null, _react.default.createElement(_Card.CardHeader, null));

    (0, _tests.shouldHaveComponent)(wrapper, _Card.CardHeader);
  });
  it('should have a CardBody', function () {
    var wrapper = _react.default.createElement(_Card.Card, null, _react.default.createElement(_Card.CardBody, null, _react.default.createElement(_Typography.Text, null, "CardBody")));

    (0, _tests.shouldHaveComponent)(wrapper, _Card.CardBody);
  });
  it('should have a CardFooter', function () {
    var wrapper = _react.default.createElement(_Card.Card, null, _react.default.createElement(_Card.CardFooter, null));

    (0, _tests.shouldHaveComponent)(wrapper, _Card.CardFooter);
  });
  it('should have a CardMedia', function () {
    var wrapper = _react.default.createElement(_Card.Card, null, _react.default.createElement(_Card.CardMedia, {
      video: videoUrl
    }));

    (0, _tests.shouldHaveComponent)(wrapper, _Card.CardMedia);
  });
});
describe('CardHeader', function () {
  it('should have a CardHeader props and custom styles', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Card.CardHeader, {
      avatar: imageUrl,
      avatarSize: "large",
      leftIcon: "ios-basketball",
      leftIconStyle: customStyles,
      style: cardCustomStyles,
      title: "Title of CardHeader",
      subTitle: "Subtitle of CardHeader",
      rightIcon: "ios-basketball",
      rightIconOnPress: function rightIconOnPress() {}
    }));
    expect(wrapper.props().avatar).toBeTruthy();
    expect(wrapper.props().avatarSize).toBeTruthy();
    expect(wrapper.props().leftIcon).toBeTruthy();
    expect(wrapper.props().leftIconStyle).toBeTruthy();
    expect(wrapper.props().style).toBeTruthy();
    expect(wrapper.props().title).toBeTruthy();
    expect(wrapper.props().subTitle).toBeTruthy();
    expect(wrapper.props().rightIcon).toBeTruthy();
    expect(wrapper.props().rightIconOnPress).toBeTruthy();
    (0, _tests.shouldHaveStyles)(wrapper, _objectSpread({}, cardCustomStyles));
  });
});
describe('CardFooter', function () {
  it('should have a CardFooter props and custom styles', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Card.CardFooter, {
      leftIcon: "ios-basketball",
      leftIconStyle: customStyles,
      leftIconSize: 30,
      style: cardCustomStyles,
      subTitleIcon: "ios-basketball",
      subTitleText: "Text"
    }));
    expect(wrapper.props().leftIcon).toBeTruthy();
    expect(wrapper.props().leftIconStyle).toBeTruthy();
    expect(wrapper.props().leftIconSize).toBeTruthy();
    expect(wrapper.props().style).toBeTruthy();
    expect(wrapper.props().subTitleIcon).toBeTruthy();
    expect(wrapper.props().subTitleText).toBeTruthy();
    (0, _tests.shouldHaveStyles)(wrapper, _objectSpread({}, cardCustomStyles));
  });
});