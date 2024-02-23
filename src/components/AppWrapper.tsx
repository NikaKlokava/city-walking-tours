import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Loader} from './Loader';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../utils';
import SplashScreen from 'react-native-splash-screen';
import {useSettingsContext} from '../context/settings-context';

type Props = {
  children: any;
  noPaddingTop?: boolean;
};

export const AppWrapper = ({children, noPaddingTop}: Props) => {
  const context = useSettingsContext();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <LinearGradient
      colors={colors.gradient}
      style={StyleSheet.flatten([
        styles.main,
        noPaddingTop && styles.noPadding,
      ])}>
      {context.data.isLoading ? <Loader withText /> : children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 80,
  },
  noPadding: {
    paddingTop: 0,
  },
});
