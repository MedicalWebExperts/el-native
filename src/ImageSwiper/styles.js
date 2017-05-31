import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const palette = {
  darkTextColor: '#666666',
  opacity: 'rgba(0,0,0,0.2)',
};

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
