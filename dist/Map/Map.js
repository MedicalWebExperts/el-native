"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Map;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _qs = _interopRequireDefault(require("qs"));

var _reactNative = require("react-native");

var _Theme = _interopRequireDefault(require("../Theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = _Theme.default.getTheme();

var styles = theme.map;
var propTypes = {
  /**
   * Description of prop "latitude".
   */
  latitude: _propTypes.default.number.isRequired,

  /**
   * Description of prop "longitude".
   */
  longitude: _propTypes.default.number.isRequired,

  /**
   * Description of prop "width".
   */
  width: _propTypes.default.number,

  /**
   * Description of prop "height".
   */
  height: _propTypes.default.number,

  /**
   * Description of prop "apiKey".
   */
  apiKey: _propTypes.default.string.isRequired,
  maptype: _propTypes.default.string,
  zoom: _propTypes.default.number,
  // eslint-disable-line react/no-unused-prop-types
  onPress: _propTypes.default.func,
  style: _propTypes.default.object,
  button: _propTypes.default.element,
  // eslint-disable-line react/no-unused-prop-types
  underlayColor: _propTypes.default.string // eslint-disable-line react/no-unused-prop-types

};
var defaultProps = {
  width: undefined,
  height: undefined,
  maptype: 'roadmap',
  zoom: 18,
  onPress: undefined,
  style: {},
  button: undefined,
  underlayColor: 'white'
};
/**
 * Map component description.
 */

function Map(props) {
  var dims = _reactNative.Dimensions.get('window');

  var computedDimensions = {
    width: Math.round(props.width || dims.width),
    height: Math.round(props.height || dims.width * (2 / 3))
  };

  var googleStaticMapUri = function googleStaticMapUri() {
    var baseUrl = 'https://maps.googleapis.com/maps/api/staticmap';
    var apiKey = props.apiKey;
    var params = {
      markers: [props.latitude, props.longitude].join(','),
      maptype: props.maptype,
      size: [computedDimensions.width, computedDimensions.height].join('x'),
      scale: 2,
      apiKey: apiKey
    };

    var query = _qs.default.stringify(params, {
      arrayFormat: 'brackets'
    });

    var url = "".concat(baseUrl, "?").concat(query);
    return url;
  };

  var handleOnPress = function handleOnPress() {
    var generateIos = function generateIos() {
      return "https://maps.apple.com/?q=".concat(props.latitude, ",").concat(props.longitude, "&z=").concat(props.zoom);
    };

    var generateAndroid = function generateAndroid() {
      return "geo:".concat(props.latitude, ",").concat(props.longitude);
    };

    var url = _reactNative.Platform.select({
      ios: generateIos,
      android: generateAndroid
    })();

    _reactNative.Linking.canOpenURL(url).then(function (supported) {
      if (!supported) {
        console.error("Can't handle url: ".concat(url));
        return;
      }

      _reactNative.Linking.openURL(url);
    }).catch(function (err) {
      return console.error('An error occurred', err);
    });
  };

  var onPress = props.onPress && typeof props.onPress === 'function' ? props.onPress : handleOnPress;

  var renderButton = function renderButton() {
    return _react.default.createElement(_reactNative.TouchableHighlight, {
      onPress: onPress,
      underlayColor: props.underlayColor,
      style: _objectSpread({}, styles.button, props.style.button)
    }, _react.default.createElement(_reactNative.View, null, props.button || _react.default.createElement(_reactNative.Text, null, "Navigate")));
  };

  return _react.default.createElement(_reactNative.View, {
    style: _objectSpread({}, styles.container, props.style.container)
  }, _react.default.createElement(_reactNative.Image, {
    source: {
      uri: googleStaticMapUri()
    },
    style: computedDimensions
  }), renderButton());
}

Map.propTypes = propTypes;
Map.defaultProps = defaultProps;