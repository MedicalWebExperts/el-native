import colors from '../colors';
import font from '../font';

export default {
  default: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 2,
  },
  icon: {
    color: colors.text,
    marginRight: 5,
    fontSize: font.size + 4,
  },
  label: {
    color: colors.text,
    fontSize: font.size,
  },
};
