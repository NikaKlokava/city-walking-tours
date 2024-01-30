import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from './base/Text';
import {colors} from '../utils/colors';
import {Rating} from './Rating';
import {Icon} from './base/Icon';
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';

const icon1 = require('../assets/heart_icon.png');

type Props = {
  category: CategotyItemType;
  verticalScroll?: boolean;
  city: string;
};

export const CategoryItem = ({category, verticalScroll, city}: Props) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {city})}
      style={[styles.container, verticalScroll && styles.containerV]}>
      <ImageBackground
        source={category.image}
        style={styles.image}
        imageStyle={styles.imageBackgorund}>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon source={icon1} size="xlarge" style={styles.icon} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.descriptionContainer}>
        <Text type="fifth" color={colors.primary5}>
          {category.title}
        </Text>
        <Rating rating={category.rating} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 240,
    backgroundColor: colors.primary1,
    marginHorizontal: 20,
    borderRadius: 15,
  },
  containerV: {
    width: '100%',
  },
  iconContainer: {
    margin: 5,
    backgroundColor: 'rgba(20, 20, 20, 0.6)',
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  liked: {
    backgroundColor: 'rgba(255, 85, 110, 0.8)',
  },
  icon: {
    margin: 5,
  },
  imageBackgorund: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    flex: 4,
    width: '100%',
  },
  descriptionContainer: {
    borderTopWidth: 3,
    borderColor: colors.primary4,
    flex: 1,
    padding: 5,
    paddingHorizontal: 15,
    justifyContent: 'space-around',
  },
});
