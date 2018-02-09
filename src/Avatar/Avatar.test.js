import React from 'react';
import { shallow } from 'enzyme';

import { shouldHaveStyles } from '../utils/tests';
import Avatar from './Avatar';
import Theme from '../Theme';
// import placeholderImage from './placeholderImage.png';

const theme = Theme.getTheme();
const styles = theme.avatar;

const imageUrl = 'https://wallscover.com/images/gunther-wallpaper-2.jpg';

describe('Avatar', () => {
  it('should be square', () => {
    const defaultStyles = styles.default;
    const squareStyles = styles.avatarSquare;

    const wrapper = shallow(<Avatar source={imageUrl} square />);

    shouldHaveStyles(wrapper.find('Avatar'), { ...defaultStyles, ...squareStyles });
    expect(wrapper.props().square).toBeTruthy();
  });
});
