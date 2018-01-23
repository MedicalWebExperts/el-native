import { Dimensions } from 'react-native';

import colors from '../Theme/colors';

const { width } = Dimensions.get('window');

export default {
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  base: {
    borderBottomWidth: 1,
    borderColor: colors.textColor,
    minHeight: 40,
    marginTop: 4,
    textAlign: 'left',
    width,
    color: colors.darkTextColor,
  },
  error: {
    borderColor: colors.red,
  },
  errorText: {
    color: colors.red,
    paddingVertical: 4,
    fontSize: 12,
  },
  squared: {
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 10,
  },
  rounded: {
    borderRadius: 20,
    borderWidth: 1,
    paddingLeft: 10,
  },
};
