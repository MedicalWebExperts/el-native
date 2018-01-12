import ReactNativePropRegistry from 'react-native/Libraries/Renderer/shims/ReactNativePropRegistry';
import _ from 'lodash';

function computeProps(props, defaultProps) {
  // External props has a higher precedence
  let computedProps = {};

  const incomingProps = { ...props };
  delete incomingProps.children;

  const incomingPropsStyle = incomingProps.style;
  delete incomingProps.style;

  computedProps = { ...defaultProps, ...incomingProps };
  if (incomingProps) _.merge(computedProps, defaultProps, incomingProps);
  else computedProps = defaultProps;

  // Pass the merged Style Object instead
  if (incomingPropsStyle) {
    let computedPropsStyle = {};
    computedProps.style = {};
    if (Array.isArray(incomingPropsStyle)) {
      _.forEach(incomingPropsStyle, (style) => {
        if (typeof style === 'number') {
          _.merge(computedPropsStyle, ReactNativePropRegistry.getByID(style));
        } else {
          _.merge(computedPropsStyle, style);
        }
      });
    } else if (typeof incomingPropsStyle === 'number') {
      computedPropsStyle = ReactNativePropRegistry.getByID(incomingPropsStyle);
    } else {
      computedPropsStyle = incomingPropsStyle;
    }

    _.merge(computedProps.style, defaultProps.style, computedPropsStyle);
  }

  return computedProps;
}

export default computeProps;
