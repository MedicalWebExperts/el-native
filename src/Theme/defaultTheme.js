import { Platform } from 'react-native';

export default {
  font: {
    size: 14,
    color: '#000',
  },
  button: Platform.select({
    ios: {},
    android: {
      elevation: 4,
      backgroundColor: '#2196F3',
      borderRadius: 2,
    },
  }),
};
