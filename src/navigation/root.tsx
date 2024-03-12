import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {tabs} from '.';
import {HomeStack} from './home';
import {WishlistStack} from './wishlist';
import {MapStack} from './map';
import {SettingsStack} from './settings';
import {TabBar} from '../components/TabBar';
import LinearGradient from 'react-native-linear-gradient';
import {commonStyles} from '../utils';
import {StyleSheet} from 'react-native';
import {useThemeContext} from '../context/theme-context';

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export const RootNavigator = () => {
  const context = useThemeContext();

  return (
    <LinearGradient
      colors={context.theme.colors.gradient}
      style={StyleSheet.flatten([commonStyles.container])}>
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
          tabBar={props => <TabBar {...props} />}
          screenOptions={{headerShown: false}}>
          <Tab.Screen name={tabs.HOME} component={HomeStack} />
          <Tab.Screen name={tabs.WISHES} component={WishlistStack} />
          <Tab.Screen name={tabs.MAP} component={MapStack} />
          <Tab.Screen name={tabs.SETTINGS} component={SettingsStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </LinearGradient>
  );
};
