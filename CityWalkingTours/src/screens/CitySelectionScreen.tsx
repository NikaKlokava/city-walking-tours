import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {StyledBtn} from '../components/StyledBtn';

const image = require('../assets/lith_img.png');
const windowWidth = Dimensions.get('window').width;

export const CitySelectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Select your city</Text>
        <SelectDropdown
          defaultValue={CITIES[0]}
          defaultButtonText="city"
          buttonStyle={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle}
          dropdownStyle={styles.dropdownStyle}
          rowTextStyle={styles.rowTextStyle}
          data={CITIES}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
        />
      </View>
      <View style={styles.btnContainer}>
        <StyledBtn title="Next" />
      </View>
      <Image source={image} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    width: 0.9 * windowWidth,
    height: 300,
    opacity: 0.8,
  },
  inputContainer: {
    flex: 7,
    rowGap: 30,
  },
  title: {
    color: '#031F2B',
    fontSize: 30,
    fontFamily: 'Gill Sans',
    marginHorizontal: 30,
    textAlign: 'center',
    lineHeight: 50,
    backgroundColor: 'rgba(94, 223, 255, 0.8)',
  },
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#5EDFFF',
  },
  buttonTextStyle: {
    fontFamily: 'Gill Sans',
    fontSize: 20,
    color: '#5EDFFF',
  },
  dropdownStyle: {
    backgroundColor: 'rgba(94, 223, 255, 0.8)',
  },
  rowTextStyle: {
    color: '#031F2B',
    fontFamily: 'Georgia',
  },
  btnContainer: {flex: 1},
});

const CITIES = [
  'VILNIUS',
  'KAUNO',
  'TRAKAI',
  'KLAIPEDA',
  'PALANGA',
  'DRUSKININKAI',
];
