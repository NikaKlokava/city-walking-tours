import React, {lazy, useState} from 'react';
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import {StyledBtn} from '../components/StyledBtn';
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  ONBOARDING,
  colors,
  getIndex,
  commonStyles,
} from '../utils';
import {Text} from '../components/base/Text';
import {Line} from '../components/Line';
import {ProgressBar} from '../components/ProgressBar';
import {AppWrapper} from '../components/AppWrapper';
import { useSettingsContext } from '../context/settings-context';


export const Onboarding = () => {
  return (
    <AppWrapper>
      <LazyOnBoardingContent  />
    </AppWrapper>
  );
};

const OnBoardingContent = () => {
  const context = useSettingsContext()
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleScreenScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = getIndex(e);
    setCurrentIndex(index);
  };

  return (
    <View
      style={StyleSheet.flatten([
        styles.mainContainer,
        commonStyles.container,
      ])}>
      <View style={StyleSheet.flatten([commonStyles.container])}>
        <FlatList
          data={ONBOARDING}
          horizontal
          pagingEnabled
          onScroll={e => handleScreenScroll(e)}
          keyExtractor={(_, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.listContainer}>
                <Image source={item.image} style={styles.backImg} />
                <View style={styles.descriptionContainer}>
                  <Text type="primary" color={colors.primary1} center>
                    {item.title}
                  </Text>
                  <Line />
                  <Text type="quaternary" color={colors.semi_primary1} center>
                    {item.description}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View
        style={StyleSheet.flatten([
          styles.dottsContainer,
          commonStyles.flexRow,
        ])}>
        {currentIndex === ONBOARDING.length - 1 ? (
          <StyledBtn title="Get Started" onClick={() => context.updateOnboarding?.('true')} />
        ) : (
          <ProgressBar index={currentIndex} dataLength={ONBOARDING.length} />
        )}
      </View>
    </View>
  );
};

const LazyOnBoardingContent = lazy(async () => ({default: OnBoardingContent}));

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    marginBottom: 50,
  },
  listContainer: {
    width: DEVICE_WIDTH,
    rowGap: 70,
  },
  backImg: {
    height: 0.3 * DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    objectFit: 'contain',
  },
  descriptionContainer: {paddingHorizontal: 15, rowGap: 12},
  dottsContainer: {
    columnGap: 20,
    justifyContent: 'center',
  },
});
