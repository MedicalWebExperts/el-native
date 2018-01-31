import React from 'react';
import { oneOf, string, number, bool, object } from 'prop-types';
import { Image } from 'react-native';

import Theme from '../Theme';

const theme = Theme.getTheme();
const styles = theme.avatar;

const propTypes = {
  /**
   * The prop "square" is a boolean that when present makes the Avatar squared.
   * In abscence the shape will be rounded.
   */
  square: bool,
  /**
   * The prop "size" offers 3 custom sizes to choose from. In abscence the default is medium.
   * The other sizes available are "large" and "small"
   */
  size: oneOf(['large', 'medium', 'small']),
  /**
   * The prop "borderColor" defines the color of the border.
   * This prop will not work without the "borderThickness" prop present.
   */
  borderColor: string,
  /**
   * The prop "borderThickness" determines the width of the border of the Avatar.
   * Expects a number. The default is 0.
   */
  borderThickness: number,
  /**
   * The prop "placeholder" can be used as a default image if no image is present in "source" prop.
   */
  placeholder: object,
  /**
   * The prop "source" is the main prop, and expects a string or a uri to show the image in Avatar.
   */
  source: string,
};

const defaultProps = {
  square: false,
  size: 'medium',
  borderColor: '',
  borderThickness: 0,
  placeholder: {},
  source: '',
};

const getSize = (size) => {
  if (size === 'large') {
    return styles.avatarLarge;
  } else if (size === 'small') {
    return styles.avatarSmall;
  }
  return false;
};

/**
 * Avatar component is a wrapper over RN <Image> with custom styles
 * applied and with an interface that let users change certain props with ease.
 */
const Avatar = props => (
  <Image
    source={props.source ? { uri: props.source } : props.placeholder}
    style={[
      styles.default,
      !!props.borderThickness && { borderWidth: props.borderThickness },
      !!props.borderColor && { borderColor: props.borderColor },
      !!props.size && getSize(props.size),
      !!props.square && styles.avatarSquare,
    ]}
  />
);

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
