import React from 'react';
import {
  FlatList,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from './base/Text';
import {CITIES, colors, flexRow} from '../utils';
import {Icon} from './base/Icon';
import CLOSE_ICON from '../assets/icons/close.svg';

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
        <View style={[styles.pressContainer, flexRow]}>
          <TouchableOpacity onPress={onClose}>
            <Icon icon={CLOSE_ICON} size="xlarge" />
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
                  <View style={[styles.cityDescription, flexRow]}>
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
  cityContainer: {
    marginVertical: 10,
    minHeight: 150,
    justifyContent: 'flex-end',
  },
  cityDescription: {
    justifyContent: 'space-between',
    backgroundColor: colors.primary5,
  },
  pressContainer: {
    columnGap: 20,
  },
});
