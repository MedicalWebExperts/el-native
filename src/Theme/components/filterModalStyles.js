import colors from '../colors';

export default {
  wrapper: {
    marginTop: 20,
  },
  innerWrapper: {
    flex: 1,
    marginHorizontal: 14,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: 60,
    borderBottomWidth: 1,
    borderColor: colors.gray400,
  },
  titleWrapper: {
    paddingHorizontal: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectAll: {
    fontWeight: 'bold',
  },
  switch: {
    height: 10,
  },
  button: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 35,
  },
  buttonText: { color: 'black', fontSize: 40 },
};
