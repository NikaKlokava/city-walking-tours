import React, {useMemo, useState} from 'react';
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
import {commonStyles} from '../utils';
import {Icon} from './base/Icon';
import CLOSE_ICON from '../assets/icons/close.svg';
import {BlurView} from '@react-native-community/blur';
import {Loader} from './Loader';
import {useThemeContext} from '../context/theme-context';

const image = require('../assets/images/viln.png');

type Props = {
  visible: boolean;
  data: CitiesType;
  isLoading: boolean;
  onClose: () => void;
  onSelect: (city: string) => void;
};

export const SelectCityModal = ({
  visible,
  data,
  isLoading,
  onClose,
  onSelect,
}: Props) => {
  const {theme} = useThemeContext();

  const styles = useMemo(() => createStyles(theme), [theme]);
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
          <Text type="primary" color={theme.colors.primary1} center>
            Select your city
          </Text>
        </View>
        {isLoading ? (
          <Loader withText />
        ) : (
          <FlatList
            keyExtractor={item => item.city}
            data={data}
            renderItem={({item}) => (
              <CityItem item={item} onSelect={onSelect} />
            )}
          />
        )}
      </View>
    </Modal>
  );
};

type CityProps = {
  item: {city: string; country: string; photo: any};
  onSelect: (city: string) => void;
};

const CityItem = ({item, onSelect}: CityProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const {theme} = useThemeContext();

  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <Pressable
      onPress={() => {
        onSelect(item.city);
      }}>
      <ImageBackground
        style={styles.cityContainer}
        src={item.photo}
        defaultSource={image}
        onLoadEnd={() => setIsLoading(false)}>
        {isLoading && (
          <BlurView
            style={StyleSheet.flatten([commonStyles.absolute])}
            blurType="light"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
          />
        )}
        <View
          style={StyleSheet.flatten([
            styles.cityDescription,
            commonStyles.flexRow,
          ])}>
          <Text type={'primary'} color={theme.colors.primary1}>
            {item.city}
          </Text>
          <Text type={'tertiary'} color={theme.colors.primary1}>
            {item.country}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    modalContainer: {
      marginHorizontal: 20,
      marginTop: 70,
      marginBottom: 160,
      borderWidth: 1,
      padding: 10,
      rowGap: 10,
      borderColor: theme.colors.active_bright,
      borderRadius: 20,
      backgroundColor: theme.colors.active_dark,
    },
    cityContainer: {
      marginVertical: 10,
      minHeight: 150,
      justifyContent: 'flex-end',
    },
    cityDescription: {
      justifyContent: 'space-between',
      backgroundColor: theme.colors.active_dark,
    },
    pressContainer: {
      columnGap: 20,
    },
  });
