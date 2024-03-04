import {ViewStyle} from 'react-native';

type CommonStylesType = {
  container: ViewStyle;
  flexRow: ViewStyle;
  absolute: ViewStyle;
};

export const commonStyles: CommonStylesType = {
  container: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
};
