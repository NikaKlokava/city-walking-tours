import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from './base/Text';
import {colors} from '../utils/colors';
import {CATEGORIES} from '../utils/data';
import {Line} from './Line';

type Props = {
  title: string | undefined;
  onSelect: (title: string) => void;
};

export const Navigation = ({title, onSelect}: Props) => {
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
              <Image source={item.icon} style={styles.icon} />
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
  icon: {
    width: 40,
    height: 40,
  },
});
