import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from './base/Text';
import {DEVICE_HEIGHT, DEVICE_WIDTH, colors, flexRow} from '../utils';
import {Rating} from './Rating';
import {Icon} from './base/Icon';
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';
import {routes} from '../navigation';

const icon1 = require('../assets/heart_icon.png');

type Props = {
  category: CategotyItemType;
  verticalScroll?: boolean;
  liked?: boolean;
  city: string;
};

export const CategoryItem = ({
  category,
  verticalScroll,
  liked,
  city,
}: Props) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routes.DETAILS, {city})}
      style={[
        styles.container,
        verticalScroll && styles.containerV,
        liked && styles.likedContainer,
      ]}>
      <ImageBackground
        source={category.image}
        style={styles.image}
        imageStyle={styles.imageBackgorund}>
        <TouchableOpacity style={[styles.iconContainer, liked && styles.liked]}>
          <Icon source={icon1} size="xlarge" style={styles.icon} />
        </TouchableOpacity>
      </ImageBackground>
      <View
        style={[styles.descriptionContainer, liked && styles.likedDescription]}>
        <Text type="fifth" color={colors.primary5} center={liked}>
          {category.title}
        </Text>
        {liked && (
          <Text type="fifth" color={colors.primary5} style={{opacity: 0.4}}>
            {category.description.slice(0, 90) + `...`}
          </Text>
        )}

        <View
          style={[
            styles.smallDescription,
            liked && styles.smallLikedDescription,
            flexRow,
          ]}>
          {liked && (
            <Text type="fifth" color={colors.primary5}>
              {category.details.location}
            </Text>
          )}
          <Rating rating={category.rating} />
        </View>
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
  likedContainer: {
    width: DEVICE_WIDTH * 0.9,
    height: DEVICE_HEIGHT * 0.3,
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
    flex: 1,
    padding: 5,
    paddingHorizontal: 15,
    justifyContent: 'space-around',
  },
  likedDescription: {
    flex: 3,
  },
  smallDescription: {
    justifyContent: 'flex-end',
  },
  smallLikedDescription: {
    justifyContent: 'space-between',
  },
});
