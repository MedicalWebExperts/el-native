import React from 'react';
import { shallow } from 'enzyme';

import { Card } from './Card';
import { Text } from '../Typography/Typography';
import {
  // shouldHaveText,
  // shouldHaveComponent,
  // shouldSimulateOnPress,
  shouldHaveStyles,
} from '../utils/tests';
import Theme from '../Theme';

const theme = Theme.getTheme();
const styles = theme.card;

describe('Card', () => {
  it('should have raised styles', () => {
    const defaultStyles = styles.default;
    const raisedStyles = styles.raised;

    const wrapper = shallow(<Card raised><Text>Card</Text></Card>);
    shouldHaveStyles(wrapper, { ...defaultStyles, ...raisedStyles });
  });
});
