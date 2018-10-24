import React from 'react';
import { shallow } from 'enzyme';

import { Card, CardHeader, CardBody, CardFooter, CardMedia } from './Card';
import { Text } from '../Typography/Typography';
import { shouldHaveComponent, shouldHaveStyles } from '../utils/tests';
import Theme from '../Theme';
import colors from '../Theme/colors';

const theme = Theme.getTheme();
const styles = theme.card;
const imageUrl = 'https://wallscover.com/images/gunther-wallpaper-2.jpg';
const videoUrl = 'https://www.youtube.com/watch?v=z13qnzUQwuI';
const defaultStyles = styles.default;
const customStyles = {
  color: colors.primary,
};
const cardCustomStyles = {
  backgroundColor: colors.primary,
  maxHeight: 200,
};

describe('Card', () => {
  it('should be a default Card with custom styles', () => {
    const wrapper = shallow(<Card style={cardCustomStyles}><Text>Card</Text></Card>);
    shouldHaveStyles(wrapper, { ...defaultStyles, ...cardCustomStyles });
  });

  it('should have raised styles', () => {
    const raisedStyles = styles.raised;

    const wrapper = shallow(<Card raised><Text>Card</Text></Card>);
    shouldHaveStyles(wrapper, { ...defaultStyles, ...raisedStyles });
  });

  it('should have a CardHeader', () => {
    const wrapper = (
      <Card>
        <CardHeader />
      </Card>
    );
    shouldHaveComponent(wrapper, CardHeader);
  });

  it('should have a CardBody', () => {
    const wrapper = (
      <Card>
        <CardBody>
          <Text>CardBody</Text>
        </CardBody>
      </Card>
    );
    shouldHaveComponent(wrapper, CardBody);
  });

  it('should have a CardFooter', () => {
    const wrapper = (
      <Card>
        <CardFooter />
      </Card>
    );
    shouldHaveComponent(wrapper, CardFooter);
  });

  it('should have a CardMedia', () => {
    const wrapper = (
      <Card>
        <CardMedia video={videoUrl} />
      </Card>
    );
    shouldHaveComponent(wrapper, CardMedia);
  });
});

describe('CardHeader', () => {
  it('should have a CardHeader props and custom styles', () => {
    const wrapper = shallow(<CardHeader
      avatar={imageUrl}
      avatarSize="large"
      leftIcon="ios-basketball"
      leftIconStyle={customStyles}
      style={cardCustomStyles}
      title="Title of CardHeader"
      subTitle="Subtitle of CardHeader"
      rightIcon="ios-basketball"
      rightIconOnPress={() => {}}
    />);

    expect(wrapper.props().avatar).toBeTruthy();
    expect(wrapper.props().avatarSize).toBeTruthy();
    expect(wrapper.props().leftIcon).toBeTruthy();
    expect(wrapper.props().leftIconStyle).toBeTruthy();
    expect(wrapper.props().style).toBeTruthy();
    expect(wrapper.props().title).toBeTruthy();
    expect(wrapper.props().subTitle).toBeTruthy();
    expect(wrapper.props().rightIcon).toBeTruthy();
    expect(wrapper.props().rightIconOnPress).toBeTruthy();

    shouldHaveStyles(wrapper, { ...cardCustomStyles });
  });
});

describe('CardFooter', () => {
  it('should have a CardFooter props and custom styles', () => {
    const wrapper = shallow(<CardFooter
      leftIcon="ios-basketball"
      leftIconStyle={customStyles}
      leftIconSize={30}
      style={cardCustomStyles}
      subTitleIcon="ios-basketball"
      subTitleText="Text"
    />);

    expect(wrapper.props().leftIcon).toBeTruthy();
    expect(wrapper.props().leftIconStyle).toBeTruthy();
    expect(wrapper.props().leftIconSize).toBeTruthy();
    expect(wrapper.props().style).toBeTruthy();
    expect(wrapper.props().subTitleIcon).toBeTruthy();
    expect(wrapper.props().subTitleText).toBeTruthy();

    shouldHaveStyles(wrapper, { ...cardCustomStyles });
  });
});
