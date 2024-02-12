import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from './base/Text';
import {DEVICE_HEIGHT, DEVICE_WIDTH, colors, commonStyles} from '../utils';
import {Rating} from './Rating';
import {Icon} from './base/Icon';
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';
import {routes} from '../navigation';
import HEART_ICON from '../assets/icons/heart.svg';

type Props = {
  category: CategotyItemType;
  verticalScroll?: boolean;
  liked?: boolean;
};

export const CategoryItem = ({category, verticalScroll, liked}: Props) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routes.DETAILS)}
      style={StyleSheet.flatten([
        styles.container,
        verticalScroll && styles.containerV,
        liked && styles.likedContainer,
      ])}>
      <ImageBackground
        source={category.image}
        style={styles.image}
        imageStyle={styles.imageBackgorund}>
        <TouchableOpacity
          style={StyleSheet.flatten([
            styles.iconContainer,
            liked && styles.liked,
          ])}>
          <Icon icon={HEART_ICON} size="xlarge" style={styles.icon} />
        </TouchableOpacity>
      </ImageBackground>
      <View
        style={StyleSheet.flatten([
          styles.descriptionContainer,
          commonStyles.container,
          liked && styles.likedDescription,
        ])}>
        <Text type="tertiary" color={colors.active_dark} center={liked}>
          {category.title}
        </Text>
        {liked && (
          <Text type="quaternary" color={colors.semi_primary2}>
            {category.description.slice(0, 90) + `...`}
          </Text>
        )}

        <View
          style={StyleSheet.flatten([
            styles.smallDescription,
            liked && styles.smallLikedDescription,
            commonStyles.flexRow,
          ])}>
          {liked && (
            <Text type="tertiary" color={colors.active_dark}>
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
    backgroundColor: colors.semi_grey,
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  liked: {
    backgroundColor: colors.semi_pink,
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
