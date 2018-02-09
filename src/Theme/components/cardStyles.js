import colors from '../colors';

export default {
  default: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.light,
  },
  raised: {
    shadowColor: colors.gray500,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 0,
  },
  body: {
    flex: 2,
  },
  media: {
    width: '100%',
    height: '100%',
  },
};
