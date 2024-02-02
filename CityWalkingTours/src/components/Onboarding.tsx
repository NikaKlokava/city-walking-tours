import React, {useState} from 'react';
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import {StyledBtn} from './StyledBtn';
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  DATA,
  colors,
  getIndex,
  commonStyles,
} from '../utils';
import {Text} from './base/Text';
import {Line} from './Line';
import {ProgressBar} from './ProgressBar';
import {AppWrapper} from './AppWrapper';

type Props = {
  onSubmit: () => void;
};

export const Onboarding = ({onSubmit}: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleScreenScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = getIndex(e);
    setCurrentIndex(index);
  };

  return (
    <AppWrapper>
      <View
        style={StyleSheet.flatten([
          styles.mainContainer,
          commonStyles.container,
        ])}>
        <View style={StyleSheet.flatten([commonStyles.container])}>
          <FlatList
            data={DATA}
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
                    <Text type="tertiary" color={colors.semi_grey} center>
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
          {currentIndex === DATA.length - 1 ? (
            <StyledBtn
              title="Get Started"
              onClick={() => {
                onSubmit();
                // save that onboarding is passed to the async storage
                // write TRUE to some variable in the async storage
              }}
            />
          ) : (
            <ProgressBar index={currentIndex} dataLength={DATA.length} />
          )}
        </View>
      </View>
    </AppWrapper>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 110,
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
