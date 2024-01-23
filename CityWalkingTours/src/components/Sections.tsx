import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import {Text} from './base/Text';
import {colors} from '../utils/colors';
import {SECTIONS} from '../utils/data';
import {Line} from './Line';

export const Sections = () => {
  return (
    <>
      {SECTIONS.map(section => (
        <View style={styles.container}>
          <Text type="primary" color={colors.primary1}>
            {section.title}
          </Text>
          <FlatList
            data={section.data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <ImageBackground
                source={item.image}
                style={styles.imageContainer}
                imageStyle={styles.image}>
                <View style={styles.titleContainer}>
                  <Text
                    type="fifth"
                    color={colors.primary1}
                    style={styles.title}
                    center>
                    {item.title}
                  </Text>
                </View>
              </ImageBackground>
            )}
          />
          <Line white />
        </View>
      ))}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    rowGap: 25,
  },
  imageContainer: {
    minHeight: 220,
    width: 150,
    marginHorizontal: 10,
  },
  image: {
    borderRadius: 15,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 10,
    paddingBottom: 10,
  },
  title: {
    backgroundColor: colors.primary5,
    lineHeight: 28,
  },
});
