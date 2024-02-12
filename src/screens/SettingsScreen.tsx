import React from 'react';
import {AppWrapper} from '../components/AppWrapper';
import {Text} from '../components/base/Text';
import {SETTINGS, colors, commonStyles, settingsItem} from '../utils';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from '../components/base/Icon';
import SVG_RIGHT_ARROW from '../assets/icons/right_arrow.svg';
import {useSettingsContext} from '../context/settings-context';

export const SettingsScreen = () => {
  const context = useSettingsContext();

  const handleChangeCityPress = async () => {
    context.updateCity?.('');
  };
  return (
    <AppWrapper>
      <View
        style={StyleSheet.flatten([styles.container, commonStyles.container])}>
        <Text type={'primary'} color={colors.active_bright} center>
          Settings
        </Text>
        <ScrollView>
          <SettingsItem
            title={SETTINGS[settingsItem.city].name}
            description={context.data.city}
            onPress={handleChangeCityPress}
          />
          <SettingsItem
            title={SETTINGS[settingsItem.theme].name}
            description={SETTINGS[settingsItem.theme].description}
            onPress={() => {}}
          />
        </ScrollView>
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

type Props = {
  title: string;
  description: string | null;
  onPress: () => void;
};

const SettingsItem = ({title, description, onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.flatten([styles.settingsItem, commonStyles.flexRow])}>
      <Text type="primary" color={colors.primary1}>
        {title}
      </Text>
      <View style={StyleSheet.flatten([commonStyles.flexRow])}>
        <Text type="quaternary" color={colors.semi_primary1}>
          {description}
        </Text>
        <Icon icon={SVG_RIGHT_ARROW} size={'xlarge'} />
      </View>
    </TouchableOpacity>
  );
};
