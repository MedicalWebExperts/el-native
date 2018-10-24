import React from 'react';
import { shallow } from 'enzyme';
import Option from './Option';

import { shouldHaveText, shouldSimulateOnPress, shouldHaveStyles } from '../utils/tests';
import Theme from '../Theme';

const theme = Theme.getTheme();
const styles = theme.option;

describe('Option', () => {
  it('should render a text', () => {
    shouldHaveText(<Option label="text" />, 'text');
  });

  it('should have icon styles', () => {
    const customStyles = { color: 'red' };
    const wrapper = shallow(<Option label="text" iconStyles={customStyles} />);
    shouldHaveStyles(wrapper.find('Icon'), { ...styles.icon, ...customStyles });
  });

  test('should call the onPress', () => {
    shouldSimulateOnPress(<Option label="text" onPress={() => null} />);
  });
});
