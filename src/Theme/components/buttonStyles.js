import colors from '../colors';

export default {
  default: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  text: {
    fontSize: 18,
    color: colors.lightText,
    textAlign: 'center',
    fontWeight: '500',
  },
  disabled: {
    elevation: 0,
    backgroundColor: colors.dark,
  },
  disabledText: {
    color: colors.gray300,
  },
  container: {
    alignItems: 'center',
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWithIconLeft: {
    marginLeft: 6,
  },
  textWithIconRight: {
    marginRight: 6,
  },
};
