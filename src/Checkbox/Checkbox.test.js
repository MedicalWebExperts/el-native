import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './Checkbox';
import Icon from '../Icon/Icon';
import colors from '../Theme/colors';
import { shouldHaveComponent, shouldSimulateOnPress } from '../utils/tests';

describe('Checkbox', () => {
  it('should render a Checkbox with cutom styles', () => {
    const wrapper = shallow(<Checkbox color={colors.primary} />);
    expect(wrapper.find('Icon').props().color).toBeTruthy();
  });

  it('should render a Checkbox with custom size', () => {
    const wrapper = shallow(<Checkbox size={30} />);
    expect(wrapper.find('Icon').props().size).toBeTruthy();
  });

  it('should render an Icon', () => {
    shouldHaveComponent(<Checkbox onPress={() => null} />, Icon);
  });

  test('should call the onPress', () => {
    shouldSimulateOnPress(<Checkbox onPress={() => null} />);
  });
});
