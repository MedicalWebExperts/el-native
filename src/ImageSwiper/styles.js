import { Dimensions } from 'react-native';

import { palette } from '../../styles/theme';

const { width } = Dimensions.get('window');


const styles = {
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width,
    flex: 1,
  },
  dot: {
    backgroundColor: palette.opacity,
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 3,
  },
  activeDot: {
    backgroundColor: palette.darkTextColor,
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 3,
  },
  paginationStyle: {
    bottom: 8,
    left: null,
    right: 14,
  },
};

export default styles;
