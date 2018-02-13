/* global describe it expect jest:true */
import React from 'react';
import { shallow } from 'enzyme';

import Avatar from './Avatar';
import { shouldHaveStyles } from '../utils/tests';
import Theme from '../Theme';
// import placeholderImage from './placeholderImage.png';

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
    shouldHaveStyles(wrapper, { ...defaultStyles, ...squareStyles });
  });
});
