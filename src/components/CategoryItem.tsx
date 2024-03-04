import React, {useState} from 'react';
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
import {useSettingsContext} from '../context/settings-context';
import {sectionsStore} from '../context/sections-store';
import {observer} from 'mobx-react';
import {BlurView} from '@react-native-community/blur';

type Props = {
  category: DataType;
  verticalScroll?: boolean;
  isLiked: boolean;
  store?: SectionsStore;
  inWishlist?: boolean;
};

export const Category = observer(
  ({category, verticalScroll, store, isLiked, inWishlist}: Props) => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const context = useSettingsContext();

    const [isLoading, setIsLoading] = useState(true);

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.DETAILS, category)}
        style={StyleSheet.flatten([
          styles.container,
          verticalScroll && styles.containerV,
          inWishlist && styles.likedContainer,
        ])}>
        <ImageBackground
          src={category.image}
          style={styles.image}
          onLoadEnd={() => setIsLoading(false)}
          imageStyle={styles.imageBackgorund}>
          {isLoading && (
            <BlurView
              style={StyleSheet.flatten([commonStyles.absolute])}
              blurType="regular"
              blurAmount={10}
              reducedTransparencyFallbackColor="white"
            />
          )}
          <TouchableOpacity
            style={StyleSheet.flatten([
              styles.iconContainer,
              isLiked && styles.liked,
            ])}
            onPress={() =>
              store?.updateLikeStatus(context.data.cityUid!, category)
            }>
            <Icon icon={HEART_ICON} size="xlarge" style={styles.icon} />
          </TouchableOpacity>
        </ImageBackground>
        <View
          style={StyleSheet.flatten([
            styles.descriptionContainer,
            commonStyles.container,
            inWishlist && styles.likedDescription,
          ])}>
          <Text type="tertiary" color={colors.active_dark} center={inWishlist}>
            {category.title}
          </Text>
          {inWishlist && (
            <Text type="quaternary" color={colors.semi_primary2}>
              {category.description.slice(0, 70) + `...`}
            </Text>
          )}
          <Rating rating={category.rating} />
        </View>
      </TouchableOpacity>
    );
  },
);

export const CategoryItem = ({
  category,
  verticalScroll,
  isLiked,
  inWishlist,
}: Props) => (
  <Category
    category={category}
    verticalScroll={verticalScroll}
    isLiked={isLiked}
    store={sectionsStore}
    inWishlist={inWishlist}
  />
);

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
});
