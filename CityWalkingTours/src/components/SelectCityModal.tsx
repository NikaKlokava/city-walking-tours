import React from 'react';
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
import {Text} from './base/Text';
import {CITIES} from '../utils/data';
import {colors} from '../utils/colors';

const image2 = require('../assets/close.png');

type Props = {
  visible: boolean;
  onClose: () => void;
  onSelect: (city: string) => void;
};

export const SelectCityModal = ({visible, onClose, onSelect}: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.pressContainer}>
          <TouchableOpacity onPress={onClose}>
            <Image source={image2} style={styles.closeIcon} />
          </TouchableOpacity>
          <Text type="primary" color={colors.primary1} center>
            Select your city
          </Text>
        </View>
        <FlatList
          data={CITIES}
          renderItem={({item}) => {
            return (
              <Pressable
                onPress={() => {
                  onSelect(item.city);
                }}>
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
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    marginHorizontal: 20,
    marginTop: 70,
    marginBottom: 160,
    borderWidth: 1,
    padding: 10,
    rowGap: 10,
    borderColor: colors.primary3,
    borderRadius: 20,
    backgroundColor: colors.primary5,
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
    backgroundColor: colors.primary5,
  },
  pressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
});
