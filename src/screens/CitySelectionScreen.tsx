import React, {lazy, useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {StyledBtn} from '../components/StyledBtn';
import {Text} from '../components/base/Text';
import {colors, commonStyles} from '../utils';
import {SelectCityModal} from '../components/SelectCityModal';
import {AppWrapper} from '../components/AppWrapper';
import {useSettingsContext} from '../context/settings-context';

const image = require('../assets/images/city.png');

export const CitySelectionScreen = () => {
  return (
    <AppWrapper>
      <LazyCitySelectionContent />
    </AppWrapper>
  );
};
const CitySelectionContent = () => {
  const context = useSettingsContext();

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
    <>
      <ImageBackground
        source={image}
        style={StyleSheet.flatten([styles.container, commonStyles.container])}>
        {!modalVisible && (
          <>
            <View style={styles.selectBlock}>
              <Text type="primary" color={colors.active_bright} center>
                Select your city
              </Text>
              <StyledBtn title="SELECT" onClick={() => setModalVisible(true)} />
              {currentCity && (
                <Text type="primary" color={colors.active_bright} center>
                  {currentCity}
                </Text>
              )}
            </View>
            {currentCity && (
              <StyledBtn
                title="NEXT"
                onClick={() => context.updateCity?.(currentCity)}
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
    </>
  );
};

const LazyCitySelectionContent = lazy(async () => ({
  default: CitySelectionContent,
}));

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 50,
    justifyContent: 'space-between',
  },
  selectBlock: {
    rowGap: 60,
  },
});
