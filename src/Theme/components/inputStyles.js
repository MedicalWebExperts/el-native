import colors from '../colors';

export default {
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  base: {
    borderBottomWidth: 1,
    borderColor: colors.text,
    height: 40,
    textAlign: 'left',
    minWidth: '100%',
    color: colors.text,
  },
  error: {
    borderColor: colors.danger,
  },
  errorText: {
    color: colors.danger,
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
