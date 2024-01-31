import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from './base/Text';
import {CATEGORIES, colors} from '../utils';
import {Line} from './Line';
import {Icon} from './base/Icon';

type Props = {
  title: string | undefined;
  onSelect: (title: string) => void;
};

export const SearchBar = ({title, onSelect}: Props) => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={[
                styles.categoryItem,
                title === item.category && styles.active,
                !title &&
                  CATEGORIES[0].category === item.category &&
                  styles.active,
              ]}
              onPress={() => {
                onSelect(item.category);
              }}
              key={index}>
              <Icon source={item.icon} size="xxxlarge" />
              <Text type="fifth" color={colors.primary1}>
                {item.category}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <Line />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    padding: 10,
    marginHorizontal: 15,
    marginLeft: 0,
    alignItems: 'center',
    rowGap: 10,
    borderBottomWidth: 5,
    borderBottomColor: 'transparent',
  },
  active: {borderBottomColor: colors.primary3},
});
