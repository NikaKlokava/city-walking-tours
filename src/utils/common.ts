import {ViewStyle} from 'react-native';

type CommonStylesType = {
  container: ViewStyle;
  flexRow: ViewStyle;
};

export const commonStyles: CommonStylesType = {
  container: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
};
