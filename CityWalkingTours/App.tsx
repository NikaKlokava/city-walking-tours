import React from 'react';
import {CityScreen} from './src/screens/CityScreen';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import {CitySelectionScreen} from './src/screens/CitySelectionScreen';
// import {HomeScreen} from './src/screens/HomeScreen';

function App(): React.JSX.Element {
  return (
    <LinearGradient
      colors={['#031F2B', '#031F2B', '#000000']}
      style={styles.main}>
      <CityScreen />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 80,
    paddingBottom: 50,
    backgroundColor: '#031F2B',
  },
});

export default App;
