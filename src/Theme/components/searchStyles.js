import colors from '../colors';

export default {
  wrapper: {
    width: '100%',
    flexDirection: 'row',
  },
  button: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: 40,
  },
  label: {
    marginRight: 6,
    borderWidth: 1,
    borderColor: colors.gray500,
    paddingVertical: 0,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  labelText: {
    color: colors.primary,
    fontWeight: '300',
    fontSize: 14,
  },
  labelOn: {
    backgroundColor: '#b3e5fc',
    borderColor: '#b3e5fc',
  },
};
