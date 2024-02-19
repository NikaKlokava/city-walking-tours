import React, {useState, useEffect} from 'react';
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
import {CITIES, colors, commonStyles} from '../utils';
import {Icon} from './base/Icon';
import CLOSE_ICON from '../assets/icons/close.svg';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import uploadBytes from '@react-native-firebase/storage';

type Props = {
  visible: boolean;
  onClose: () => void;
  onSelect: (city: string) => void;
};

export const SelectCityModal = ({visible, onClose, onSelect}: Props) => {
  const [data, setData] = useState<FirebaseFirestoreTypes.DocumentData[]>();

  useEffect(() => {
    const getData = async () => {
      const snapshot = await firestore().collection('cities').get();
      return snapshot.docs.map(doc => doc.data());
    };
    getData().then(res => setData(res));
    
    // const reference = storage()
    //   .ref(data?.[0].photo)
    
  }, []);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View
          style={StyleSheet.flatten([
            styles.pressContainer,
            commonStyles.flexRow,
          ])}>
          <TouchableOpacity onPress={onClose}>
            <Icon icon={CLOSE_ICON} size="xlarge" />
          </TouchableOpacity>
          <Text type="primary" color={colors.primary1} center>
            Select your city
          </Text>
        </View>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={CITIES}
          renderItem={({item}) => <CityItem item={item} onSelect={onSelect} />}
        />
      </View>
    </Modal>
  );
};

type CityType = {
  item: {city: string; country: string; photo: any};
  onSelect: (city: string) => void;
};

const CityItem = ({item, onSelect}: CityType) => {
  return (
    <Pressable
      onPress={() => {
        onSelect(item.city);
      }}>
      <ImageBackground style={styles.cityContainer} source={item.photo}>
        <View
          style={StyleSheet.flatten([
            styles.cityDescription,
            commonStyles.flexRow,
          ])}>
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
};

const styles = StyleSheet.create({
  modalContainer: {
    marginHorizontal: 20,
    marginTop: 70,
    marginBottom: 160,
    borderWidth: 1,
    padding: 10,
    rowGap: 10,
    borderColor: colors.active_bright,
    borderRadius: 20,
    backgroundColor: colors.active_dark,
  },
  cityContainer: {
    marginVertical: 10,
    minHeight: 150,
    justifyContent: 'flex-end',
  },
  cityDescription: {
    justifyContent: 'space-between',
    backgroundColor: colors.active_dark,
  },
  pressContainer: {
    columnGap: 20,
  },
});
