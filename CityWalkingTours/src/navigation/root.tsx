import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import {tabs} from '.';
import {HomeStack} from './home';
import {WishlistStack} from './wishlist';
import {MapStack} from './map';
import {SettingsStack} from './settings';
import {TabBar} from '../components/TabBar';

const Tab = createBottomTabNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <TabBar {...props} />}
        screenOptions={{headerShown: false}}>
        <Tab.Screen name={tabs.HOME} component={HomeStack} />
        <Tab.Screen name={tabs.WISHES} component={WishlistStack} />
        <Tab.Screen name={tabs.MAP} component={MapStack} />
        <Tab.Screen name={tabs.SETTINGS} component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
