/* global describe it expect jest:true */
import React from 'react';
import { shallow } from 'enzyme';

import Avatar from './Avatar';
import { shouldHaveStyles } from '../utils/tests';
import Theme from '../Theme';
import colors from '../Theme/colors';

const theme = Theme.getTheme();
const styles = theme.avatar;

const imageUrl = 'https://wallscover.com/images/gunther-wallpaper-2.jpg';

describe('Avatar', () => {
  it('should render a default Avatar', () => {
    const defaultStyles = styles.default;

    const wrapper = shallow(<Avatar source={imageUrl} />);
    shouldHaveStyles(wrapper, { ...defaultStyles });
  });

  it('should be square', () => {
    const defaultStyles = styles.default;
    const squareStyles = styles.avatarSquare;

    const wrapper = shallow(<Avatar source={imageUrl} square />);
    expect(wrapper.props().square).toBeTruthy();

    shouldHaveStyles(wrapper, { ...defaultStyles, ...squareStyles });
  });

  it('should be large', () => {
    const defaultStyles = styles.default;
    const largeStyles = styles.avatarLarge;

    const wrapper = shallow(<Avatar source={imageUrl} size="large" />);
    shouldHaveStyles(wrapper, { ...defaultStyles, ...largeStyles });
  });

  it('should be small', () => {
    const defaultStyles = styles.default;
    const smallStyles = styles.avatarSmall;

    const wrapper = shallow(<Avatar source={imageUrl} size="small" />);
    shouldHaveStyles(wrapper, { ...defaultStyles, ...smallStyles });
  });

  it('should be bordered', () => {
    const defaultStyles = styles.default;
    const customStyles = { borderColor: colors.primary, borderWidth: 2 };

    const wrapper =
      shallow(<Avatar source={imageUrl} borderColor={colors.primary} borderThickness={2} />);

    shouldHaveStyles(wrapper, {
      ...defaultStyles,
      ...customStyles,
    });
  });
});
