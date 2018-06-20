import colors from '../colors';

export default {
  wrapper: {
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    height: 40,
    marginBottom: 14,
  },
  cancelButtonWrapper: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: 40,
  },
  cancelButton: { height: 40, width: 40 },
  cancelButtonIcon: { color: '#999', fontSize: 28 },

  label: {
    marginRight: 6,
    borderWidth: 1,
    borderColor: colors.gray500,
    paddingVertical: 0,
    marginVertical: 0,
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
