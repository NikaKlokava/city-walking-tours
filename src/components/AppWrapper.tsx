import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Loader} from './Loader';
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from 'react-native-splash-screen';
import {settingsStore} from '../context/settings-store';
import {observer} from 'mobx-react';
import {useThemeContext} from '../context/theme-context';

type Props = {
  children: any;
  noPaddingTop?: boolean;
  store?: SettingsStore;
};

export const AppWrapperComponent = observer(
  ({children, noPaddingTop, store}: Props) => {
    const {theme} = useThemeContext();

    useEffect(() => {
      SplashScreen.hide();
    }, []);

    return (
      <LinearGradient
        colors={theme.colors.gradient}
        style={StyleSheet.flatten([
          styles.main,
          noPaddingTop && styles.noPadding,
        ])}>
        {store?.isLoading ? <Loader withText /> : children}
      </LinearGradient>
    );
  },
);

export const AppWrapper = ({children, noPaddingTop}: Props) => (
  <AppWrapperComponent
    children={children}
    noPaddingTop={noPaddingTop}
    store={settingsStore}
  />
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 80,
  },
  noPadding: {
    paddingTop: 0,
  },
});
