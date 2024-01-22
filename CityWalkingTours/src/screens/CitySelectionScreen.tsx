import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {StyledBtn} from '../components/StyledBtn';
import {Text} from '../components/base/Text';
import {colors} from '../utils/colors';
import {CITIES} from '../utils/data';

const image = require('../assets/city.png');
const image2 = require('../assets/close.png');

export const CitySelectionScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.container}>
        {!modalVisible && (
          <>
            <Text type="primary" color={colors.primary3} center>
              Select your city
            </Text>
            <StyledBtn title="SELECT" onClick={() => setModalVisible(true)} />
          </>
        )}
      </ImageBackground>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <TouchableOpacity onPressOut={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <Pressable
              onPress={() => setModalVisible(false)}
              style={styles.pressContainer}>
              <Image source={image2} style={styles.closeIcon} />
              <Text type="primary" color={colors.primary1} center>
                Select your city
              </Text>
            </Pressable>
            <FlatList
              data={CITIES}
              renderItem={({item}) => {
                return (
                  <Pressable>
                    <ImageBackground
                      style={styles.cityContainer}
                      source={item.photo}>
                      <View style={styles.cityDescription}>
                        <Text type={'primary'} color={colors.primary1}>
                          {item.city}
                        </Text>
                        <Text type={'tertiary'} color={colors.primary1}>
                          {item.country}
                        </Text>
                      </View>
                    </ImageBackground>
                  </Pressable>
                );
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 60,
  },
  press: {flex: 1, backgroundColor: 'pink'},
  modalContainer: {
    marginHorizontal: 20,
    marginTop: 70,
    marginBottom: 160,
    borderWidth: 1,
    padding: 10,
    rowGap: 10,
    borderColor: colors.primary3,
    borderRadius: 20,
    backgroundColor: 'rgb(3, 31, 43)',
  },
  closeIcon: {width: 30, height: 30},
  cityContainer: {
    backgroundColor: colors.primary1,
    marginVertical: 10,
    minHeight: 150,
    justifyContent: 'flex-end',
  },
  cityDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary6,
  },
  pressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
});
