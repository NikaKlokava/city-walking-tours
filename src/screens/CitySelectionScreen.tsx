import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {StyledBtn} from '../components/StyledBtn';
import {Text} from '../components/base/Text';
import {commonStyles} from '../utils';
import {SelectCityModal} from '../components/SelectCityModal';
import {AppWrapper} from '../components/AppWrapper';
import {CityStore} from '../context/cities-store';
import {observer} from 'mobx-react';
import {useThemeContext} from '../context/theme-context';

const image = require('../assets/images/city.png');

type Props = {
  cityStore: CityStore;
  settingsStore: SettingsStore;
};

export const CitySelectionScreen = observer(
  ({cityStore, settingsStore}: Props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentCity, setCurrentCity] = useState<string>('');
    const [currentCityUid, setCurrentCityUid] = useState<string>('');

    const {theme} = useThemeContext();

    useEffect(() => {
      cityStore.uploadCitiesData();
    }, []);

    const handleModalClose = () => {
      setModalVisible(false);
    };

    const handleSelectCity = (city: string) => {
      setCurrentCity(city);
      setModalVisible(false);
      const cityUid = cityStore.data.find(item => item.city === city)?.uid;
      cityUid && setCurrentCityUid(cityUid);
    };

    return (
      <AppWrapper>
        <ImageBackground
          source={image}
          style={StyleSheet.flatten([
            styles.container,
            commonStyles.container,
          ])}>
          {!modalVisible && (
            <>
              <View style={styles.selectBlock}>
                <Text type="primary" color={theme.colors.active_bright} center testID='city-select'>
                  Select your city
                </Text>
                <StyledBtn
                  title="SELECT"
                  onClick={() => setModalVisible(true)}
                />
                {currentCity && (
                  <Text
                    type="primary"
                    color={theme.colors.active_bright}
                    center>
                    {currentCity}
                  </Text>
                )}
              </View>
              {currentCity && (
                <StyledBtn
                  title="NEXT"
                  onClick={() =>
                    settingsStore.updateCity?.(currentCity, currentCityUid)
                  }
                />
              )}
            </>
          )}
        </ImageBackground>
        <SelectCityModal
          visible={modalVisible}
          onClose={handleModalClose}
          onSelect={handleSelectCity}
          data={cityStore.data}
          isLoading={cityStore.isLoading}
        />
      </AppWrapper>
    );
  },
);

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
