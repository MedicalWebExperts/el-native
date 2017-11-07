import React from 'react';
import renderer from 'react-test-renderer';

import ImageSwiper from './index';

const images = [
  { uri: 'https://facebook.github.io/react/img/logo_og.png' },
  { uri: 'https://facebook.github.io/react/img/logo_og.png' },
];

describe('Snapshots', () => {
  it('should render default image swiper', () => {
    const component = renderer.create(<ImageSwiper images={images} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
