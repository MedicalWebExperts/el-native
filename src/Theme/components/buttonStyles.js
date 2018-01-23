import { Platform } from 'react-native';

export default {
  button: Platform.select({
    ios: {},
    android: {
      elevation: 4,
      backgroundColor: '#2196F3',
      borderRadius: 2,
    },
  }),
  buttonText: Platform.select({
    ios: {
      color: '#007AFF',
      textAlign: 'center',
      fontSize: 18,
    },
    android: {
      fontSize: 18,
      color: '#FFF',
      textAlign: 'center',
      fontWeight: '500',
    },
  }),
  buttonDisabled: Platform.select({
    ios: {},
    android: {
      elevation: 0,
      backgroundColor: '#dfdfdf',
    },
  }),
  buttonDisabledText: Platform.select({
    ios: {
      color: '#cdcdcd',
    },
    android: {
      color: '#a1a1a1',
    },
  }),
};
