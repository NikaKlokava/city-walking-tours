import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from './base/Text';
import {colors} from '../utils/colors';
import {CATEGORIES} from '../utils/data';

export const Categories = () => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={item => {
          return (
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => {}}
              key={item.index}>
              <Text type="tertiary" color={colors.primary3}>
                {item.item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.primary3,
    borderRadius: 10,
    marginHorizontal: 15,
    marginLeft: 0,
  },
});
