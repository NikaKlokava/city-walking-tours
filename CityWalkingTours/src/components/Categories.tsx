import React from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const Categories = () => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        horizontal
        renderItem={item => {
          return (
            <Pressable
              style={styles.categoryItem}
              onPress={() => {}}
              key={item.index}>
              <TouchableOpacity>
                <Text style={styles.category}>{item.item}</Text>
              </TouchableOpacity>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#5EDFFF',
    borderRadius: 10,
    marginHorizontal: 15,
    marginLeft: 0,
  },
  category: {
    color: '#5EDFFF',
    lineHeight: 30,
    fontSize: 20,
    fontFamily: 'Gill Sans',
  },
});

const CATEGORIES = [
  'Attractions',
  'Museums',
  'Shopping centers',
  'Parks',
  'Cafees',
];
