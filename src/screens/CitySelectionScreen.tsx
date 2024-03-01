import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {StyledBtn} from '../components/StyledBtn';
import {Text} from '../components/base/Text';
import {colors, commonStyles} from '../utils';
import {SelectCityModal} from '../components/SelectCityModal';
import {AppWrapper} from '../components/AppWrapper';
import {useSettingsContext} from '../context/settings-context';
import {CityStore} from '../context/cities-store';
import {observer} from 'mobx-react';

const image = require('../assets/images/city.png');

export const CitySelectionScreen = observer(({store}: {store: CityStore}) => {
  const context = useSettingsContext();

  const [modalVisible, setModalVisible] = useState(false);
  const [currentCity, setCurrentCity] = useState<string>('');
  const [currentCityUid, setCurrentCityUid] = useState<string>('');

  useEffect(() => {
    store.uploadCitiesData();
  }, []);

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleSelectCity = (city: string) => {
    setCurrentCity(city);
    setModalVisible(false);
    const cityUid = store.data.find(item => item.city === city)?.uid;
    cityUid && setCurrentCityUid(cityUid);
  };

  return (
    <AppWrapper>
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
                onClick={() =>
                  context.updateCity?.(currentCity, currentCityUid)
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
        data={store.data}
        isLoading={store.isLoading}
      />
    </AppWrapper>
  );
});

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
