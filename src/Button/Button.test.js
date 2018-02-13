/* global describe it expect jest:true */
import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import Icon from '../Icon/Icon';

import {
  shouldHaveText,
  shouldHaveComponent,
  shouldSimulateOnPress,
  shouldHaveStyles,
} from '../utils/tests';
import Theme from '../Theme';

const theme = Theme.getTheme();
const styles = theme.button;

describe('Button', () => {
  it('should render a text', () => {
    shouldHaveText(<Button onPress={() => null} text="LOGIN" />, 'LOGIN');
  });

  it('should be disabled', () => {
    const wrapper = shallow(<Button onPress={() => null} text="LOGIN" disabled />);

    expect(wrapper.props().disabled).toBeTruthy();
  });

  it('should have disabled styles', () => {
    const defaultStyles = styles.default;
    const disabledStyles = styles.disabled;

    const wrapper = shallow(<Button onPress={() => null} text="LOGIN" disabled />);

    shouldHaveStyles(wrapper.find('View'), { ...defaultStyles, ...disabledStyles });
  });

  it('should have background styles', () => {
    const defaultStyles = styles.default;
    const bgStyles = { backgroundColor: 'red' };

    const wrapper = shallow(<Button onPress={() => null} text="LOGIN" backgroundStyles={bgStyles} />);

    shouldHaveStyles(wrapper.find('View'), { ...defaultStyles, ...bgStyles });
  });

  it('should be block', () => {
    const defaultStyles = styles.default;
    const blockStyles = { width: '100%' };

    const wrapper = shallow(<Button onPress={() => null} text="LOGIN" block />);

    shouldHaveStyles(wrapper.find('View'), { ...defaultStyles, ...blockStyles });
  });

  it('should be transparent', () => {
    const defaultStyles = styles.default;
    const transparentStyles = { backgroundColor: 'transparent', elevation: 0 };

    const wrapper = shallow(<Button onPress={() => null} text="LOGIN" transparent />);

    shouldHaveStyles(wrapper.find('View'), { ...defaultStyles, ...transparentStyles });
  });

  it('should be outlined', () => {
    const defaultStyles = styles.default;
    const customStyles = { backgroundColor: 'transparent', elevation: 1 };

    const wrapper = shallow(<Button onPress={() => null} text="LOGIN" outline />);

    shouldHaveStyles(wrapper.find('View'), { ...defaultStyles, ...customStyles });
  });

  it('should be rounded', () => {
    const roundedDimensions = 40;
    const defaultStyles = styles.default;
    const customStyles = {
      width: roundedDimensions,
      height: roundedDimensions,
      borderRadius: parseInt(roundedDimensions / 2, 10),
    };

    const wrapper = shallow(<Button onPress={() => null} text="LOGIN" roundedDimensions={40} />);

    shouldHaveStyles(wrapper.find('View'), { ...defaultStyles, ...customStyles });
  });

  it('should render an Icon', () => {
    shouldHaveComponent(<Button onPress={() => null} icon="ios-basketball" />, Icon);
  });

  it('should render an Left Icon', () => {
    shouldHaveComponent(<Button onPress={() => null} iconLeft="ios-basketball" />, Icon);
  });

  it('should render an Right Icon', () => {
    shouldHaveComponent(<Button onPress={() => null} iconRight="ios-basketball" />, Icon);
  });

  it('should render a Spinner', () => {
    shouldHaveComponent(<Button onPress={() => null} processing />, 'ActivityIndicator');
  });

  test('should call the onPress', () => {
    shouldSimulateOnPress(<Button onPress={() => null} />);
  });
});
