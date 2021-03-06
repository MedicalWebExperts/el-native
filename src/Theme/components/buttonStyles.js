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
  transparent: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    elevation: 0,
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
  outline: {
    elevation: 0,
    backgroundColor: 'transparent',
    borderWidth: 1.5,
  },
};
