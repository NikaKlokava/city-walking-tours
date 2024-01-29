import React, {useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {StyledBtn} from '../components/StyledBtn';
import {Text} from '../components/base/Text';
import {colors} from '../utils/colors';
import {SelectCityModal} from '../components/SelectCityModal';
import {AppWrapper} from '../components/AppWrapper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const image = require('../assets/city.png');

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
};

export const CitySelectionScreen = ({navigation}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentCity, setCurrentCity] = useState<string>('');

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleSelectCity = (city: string) => {
    setCurrentCity(city);
    setModalVisible(false);
  };

  return (
    <AppWrapper>
      <ImageBackground source={image} style={styles.container}>
        {!modalVisible && (
          <>
            <View style={styles.selectBlock}>
              <Text type="primary" color={colors.primary3} center>
                Select your city
              </Text>
              <StyledBtn title="SELECT" onClick={() => setModalVisible(true)} />
              {currentCity && (
                <Text type="primary" color={colors.primary3} center>
                  {currentCity}
                </Text>
              )}
            </View>
            {currentCity && (
              <StyledBtn
                title="NEXT"
                onClick={() => navigation.navigate('City', {city: currentCity})}
              />
            )}
          </>
        )}
      </ImageBackground>
      <SelectCityModal
        visible={modalVisible}
        onClose={handleModalClose}
        onSelect={handleSelectCity}
      />
    </AppWrapper>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    justifyContent: 'space-between',
  },
  selectBlock: {
    rowGap: 60,
  },
});
