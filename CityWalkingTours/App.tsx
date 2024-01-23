import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import {CityScreen} from './src/screens/CityScreen';
import {CitySelectionScreen} from './src/screens/CitySelectionScreen';
// import {HomeScreen} from './src/screens/HomeScreen';
import {colors} from './src/utils/colors';

function App(): React.JSX.Element {
  return (
    <LinearGradient colors={colors.gradient} style={styles.main}>
      <CitySelectionScreen />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 80,
    paddingBottom: 50,
  },
});

export default App;
