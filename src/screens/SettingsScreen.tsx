import React, {useMemo} from 'react';
import {AppWrapper} from '../components/AppWrapper';
import {Text} from '../components/base/Text';
import {SETTINGS, commonStyles, settingsItem} from '../utils';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from '../components/base/Icon';
import SVG_RIGHT_ARROW from '../assets/icons/right_arrow.svg';
import {settingsStore} from '../context/settings-store';
import {observer} from 'mobx-react';
import {useThemeContext} from '../context/theme-context';

export const SettingsScreen = () => {
  const {theme} = useThemeContext();

  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <AppWrapper>
      <View
        style={StyleSheet.flatten([styles.container, commonStyles.container])}>
        <Text type={'primary'} color={theme.colors.active_bright} center>
          Settings
        </Text>
        <ScrollView>
          <CitySettings />
          <ThemeSettings />
        </ScrollView>
      </View>
    </AppWrapper>
  );
};

const CitySettingItem = observer(({store}: {store: SettingsStore}) => {
  const {theme} = useThemeContext();

  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <TouchableOpacity
      onPress={() => store.updateCity?.('', '')}
      style={StyleSheet.flatten([styles.settingsItem, commonStyles.flexRow])}>
      <Text type="primary" color={theme.colors.primary1}>
        {SETTINGS[settingsItem.city].name}
      </Text>
      <View style={StyleSheet.flatten([commonStyles.flexRow])}>
        <Text type="quaternary" color={theme.colors.semi_primary1}>
          {store.city}
        </Text>
        <Icon icon={SVG_RIGHT_ARROW} size={'xlarge'} />
      </View>
    </TouchableOpacity>
  );
});

const CitySettings = () => <CitySettingItem store={settingsStore} />;

const ThemeSettings = () => {
  const {theme, updateTheme} = useThemeContext();

  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <TouchableOpacity
      onPress={() => updateTheme?.()}
      style={StyleSheet.flatten([styles.settingsItem, commonStyles.flexRow])}>
      <Text type="primary" color={theme.colors.primary1}>
        {SETTINGS[settingsItem.theme].name}
      </Text>
      <View style={StyleSheet.flatten([commonStyles.flexRow])}>
        <Text type="quaternary" color={theme.colors.semi_primary1}>
          {theme.id}
        </Text>
        <Icon icon={SVG_RIGHT_ARROW} size={'xlarge'} />
      </View>
    </TouchableOpacity>
  );
};
const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {rowGap: 20, paddingHorizontal: 20},
    settingsItem: {
      backgroundColor: theme.colors.input_background,
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      borderRadius: 10,
      minHeight: 50,
      marginVertical: 5,
    },
    box: {
      width: 10,
      height: 10,
      backgroundColor: 'black',
      borderRadius: 50,
    },
  });
