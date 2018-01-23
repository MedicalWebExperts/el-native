import Theme from '../Theme';

const theme = Theme.getTheme();

export default {
  container: {
    alignItems: 'flex-end',
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
  button: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.button,
  },
  text: {
    ...theme.buttonText,
  },
  buttonDisabled: {
    ...theme.buttonDisabled,
  },
  textDisabled: {
    ...theme.buttonDisabledText,
  },
};
