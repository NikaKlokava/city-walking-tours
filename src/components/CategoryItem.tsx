import React, {useMemo, useState} from 'react';
import {
  ImageBackground,
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from './base/Text';
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  commonStyles,
  layoutAnimConfig,
} from '../utils';
import {Rating} from './Rating';
import {Icon} from './base/Icon';
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';
import {routes} from '../navigation';
import HEART_ICON from '../assets/icons/heart.svg';
import {sectionsStore} from '../context/sections-store';
import {observer} from 'mobx-react';
import {BlurView} from '@react-native-community/blur';
import {settingsStore} from '../context/settings-store';
import {useThemeContext} from '../context/theme-context';

const image = require('../assets/images/viln.png');

type Props = {
  category: DataType;
  verticalScroll?: boolean;
  isLiked: boolean;
  sectionsStore?: SectionsStore;
  settingsStore?: SettingsStore;
  inWishlist?: boolean;
};

export const Category = observer(
  ({
    category,
    verticalScroll,
    sectionsStore,
    settingsStore,
    isLiked,
    inWishlist,
  }: Props) => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const [isLoading, setIsLoading] = useState(true);

    const {theme} = useThemeContext();
    const styles = useMemo(() => createStyles(theme), [theme]);

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
          progressiveRenderingEnabled={true}
          defaultSource={image}
          onLoadEnd={() => setIsLoading(false)}
          imageStyle={styles.imageBackgorund}>
          {isLoading && (
            <BlurView
              style={StyleSheet.flatten([
                commonStyles.absolute,
                styles.imageBackgorund,
              ])}
              blurType="light"
              blurAmount={10}
              reducedTransparencyFallbackColor="white"
            />
          )}
          <TouchableOpacity
            style={StyleSheet.flatten([
              styles.iconContainer,
              isLiked && styles.liked,
            ])}
            onPress={() => {
              LayoutAnimation.configureNext(layoutAnimConfig);
              sectionsStore?.updateLikeStatus(
                settingsStore?.cityUid!,
                category,
              );
            }}>
            <Icon icon={HEART_ICON} size="xlarge" style={styles.icon} />
          </TouchableOpacity>
        </ImageBackground>
        <View
          style={StyleSheet.flatten([
            styles.descriptionContainer,
            commonStyles.container,
            inWishlist && styles.likedDescription,
          ])}>
          <Text
            type="tertiary"
            color={theme.colors.standart}
            center={inWishlist}>
            {category.title}
          </Text>
          {inWishlist && (
            <Text type="quaternary" color={theme.colors.standart}>
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
    sectionsStore={sectionsStore}
    settingsStore={settingsStore}
    inWishlist={inWishlist}
  />
);

const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      width: 220,
      height: 240,
      backgroundColor: theme.colors.grey,
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
      backgroundColor: theme.colors.semi_grey,
      borderRadius: 20,
      alignSelf: 'flex-end',
    },
    liked: {
      backgroundColor: theme.colors.semi_pink,
    },
    icon: {
      margin: 5,
    },
    imageBackgorund: {
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
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
