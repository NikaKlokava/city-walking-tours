import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import {tabs} from '.';
import {HomeStack} from './home';
import {WishlistStack} from './wishlist';
import {MapStack} from './map';
import {flexRow} from '../utils/flex';
import {Icon} from '../components/base/Icon';
import {colors} from '../utils/colors';

const Tab = createBottomTabNavigator();

const icon1 = require('../assets/home.png');
const icon2 = require('../assets/wishlist.png');
const icon3 = require('../assets/map.png');

const MyTabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={[styles.container, flexRow]}>
      {state.routes.map((route: any, index: any) => {
        // const {options} = descriptors[route.key];
        console.log(route.name);
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            // accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            // accessibilityLabel={options.tabBarAccessibilityLabel}
            // testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{height: 90}}>
            <Icon
              size="xxxlarge"
              source={
                route.name === tabs.HOME
                  ? icon1
                  : route.name === tabs.WISHES
                  ? icon2
                  : icon3
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <MyTabBar {...props} />}
        screenOptions={{headerShown: false}}>
        <Tab.Screen name={tabs.HOME} component={HomeStack} />
        <Tab.Screen name={tabs.WISHES} component={WishlistStack} />
        <Tab.Screen name={tabs.MAP} component={MapStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary5,
    shadowColor: colors.primary5,
    shadowOpacity: 1,
    shadowRadius: 7,
    justifyContent: 'space-around',
  },
});
