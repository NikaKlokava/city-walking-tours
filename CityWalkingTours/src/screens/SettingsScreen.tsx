import React from 'react';
import {AppWrapper} from '../components/AppWrapper';
import {Text} from '../components/base/Text';
import {SETTINGS, colors, commonStyles, settingsItems} from '../utils';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from '../components/base/Icon';
import SVG_RIGHT_ARROW from '../assets/icons/right_arrow.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSettingsContext} from '../context/settings-context';

export const SettingsScreen = () => {
  const context = useSettingsContext();
  const handleSettingsItemPress = async (item: string) => {

    context.updateCity?.('');
  };
  return (
    <AppWrapper>
      <View
        style={StyleSheet.flatten([styles.container, commonStyles.container])}>
        <Text type={'primary'} color={colors.active_bright} center>
          Settings
        </Text>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={SETTINGS}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => handleSettingsItemPress(item.name)}
              style={StyleSheet.flatten([
                styles.settingsItem,
                commonStyles.flexRow,
              ])}>
              <Text type="primary" color={colors.primary1}>
                {settingsItems[item.name]}
              </Text>
              <View style={StyleSheet.flatten([commonStyles.flexRow])}>
                <Text type="quaternary" color={colors.semi_primary1}>
                  {item.description}
                </Text>
                <Icon icon={SVG_RIGHT_ARROW} size={'xlarge'} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  container: {rowGap: 20, paddingHorizontal: 20},
  settingsItem: {
    backgroundColor: colors.semi_grey,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderRadius: 10,
    minHeight: 50,
    marginVertical: 5,
  },
});
