import React from 'react';
import { shallow } from 'enzyme';

const isEquivalent = (a, b) => {
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);

  if (aProps.length !== bProps.length) {
    return false;
  }

  for (let i = 0; i < aProps.length; i += 1) {
    const propName = aProps[i];
    if (!Object.is(a[propName], b[propName])) {
      return false;
    }
  }
  return true;
};

const shouldHaveStyles = (componentWithStyles, styles) => {
  expect(isEquivalent(componentWithStyles.props().style, styles)).toBeTruthy();
};

const shouldHaveText = (mainComponent, text) => {
  const wrapper = shallow(mainComponent);
  return expect(wrapper.contains(text)).toBeTruthy();
};

const shouldHaveComponent = (mainComponent, component) => {
  const wrapper = shallow(mainComponent);
  return expect(wrapper.find(component)).toHaveLength(1);
};

const shouldSimulateOnPress = (mainComponent) => {
  const cb = jest.fn();

  const cloned = React.cloneElement(mainComponent, {
    onPress: cb,
  });

  const wrapper = shallow(cloned);
  wrapper.simulate('press');
  expect(cb).toHaveBeenCalledTimes(1);
};

export { shouldHaveText, shouldHaveComponent, shouldSimulateOnPress, shouldHaveStyles };
