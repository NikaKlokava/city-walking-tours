import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {tabs} from '.';
import {HomeStack} from './home';
import {WishlistStack} from './wishlist';
import {MapStack} from './map';
import {SettingsStack} from './settings';
import {TabBar} from '../components/TabBar';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../utils';

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent', // #031F2B
  },
};

export const RootNavigator = () => {
  return (
    <LinearGradient colors={colors.gradient} style={{flex: 1}}>
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
