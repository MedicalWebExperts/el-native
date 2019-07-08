"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var accentLength = {
  none: '0%',
  short: '20%',
  medium: '40%',
  long: '60%'
};

var styles = _reactNative.StyleSheet.create({
  divider: {
    height: 3,
    backgroundColor: 'grey'
  },
  dividerWrapper: {
    width: '100%',
    height: 0.5,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

var propTypes = {
  /**
   * Color of the divider. Default: Theme light gray color.
   */
  color: _propTypes.string,

  /**
   * Color of the short thick line divider. Default: Theme primary color.
   */
  primaryColor: _propTypes.string,

  /**
   * Length of the short thick accent. Default: none.
   */
  accentLength: (0, _propTypes.oneOf)(['short', 'medium', 'long', 'none'])
};
var defaultProps = {
  color: 'grey',
  primaryColor: null,
  accentLength: 'none'
};
/**
 * Divider renders a thin View to separate content.
 */

var Divider = function Divider(props) {
  return _react.default.createElement(_reactNative.View, {
    style: [styles.dividerWrapper, props.color && {
      backgroundColor: props.color
    }]
  }, _react.default.createElement(_reactNative.View, {
    style: [styles.divider, props.primaryColor && {
      backgroundColor: props.primaryColor
    }, {
      width: accentLength[props.accentLength]
    }]
  }));
};

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;
var _default = Divider;
exports.default = _default;