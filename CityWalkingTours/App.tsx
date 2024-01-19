import React from 'react';
import {CityScreen} from './src/screens/CityScreen';
import {StyleSheet, View} from 'react-native';
// import {CitySelectionScreen} from './src/screens/CitySelectionScreen';
// import {HomeScreen} from './src/screens/HomeScreen';

function App(): React.JSX.Element {
  // return (
  //   <View style={styles.main}>
  //     <HomeScreen />
  //   </View>
  // );
  // return (
  //   <View style={styles.main}>
  //     <CitySelectionScreen />
  //   </View>
  // );
  return (
    <View style={styles.main}>
      <CityScreen />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    paddingTop: 80,
    paddingBottom: 50,
    backgroundColor: '#031F2B',
  },
});

export default App;
