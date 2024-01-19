import React from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';

export const Sections = () => {
  return (
    <ScrollView>
      {DATA.map(section => (
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <FlatList
            data={section.data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={() => <Text style={styles.sectionItem} />}
          />
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    rowGap: 25,
  },
  sectionTitle: {
    color: 'white', // #5EDFFF
    fontSize: 25,
    fontFamily: 'Georgia',
  },

  sectionItem: {
    minHeight: 150,
    minWidth: 100,
    borderColor: 'pink',
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 10,
    marginBottom: 30,
  },
});

const DATA = [
  {
    title: 'Attractions',
    data: ['Gedimina prospectas', 'Gediminas Tower', 'Cafedral Square'],
  },
  {
    title: 'Museums',
    data: ['Museum 1', 'Museum 2', 'Museum 3', 'Museum 4', 'Museum 5'],
  },
  {
    title: 'Shopping centers',
    data: ['Akropolis', 'Ozas', 'Penorama', 'Europa', 'Cup'],
  },
  {
    title: 'Parks',
    data: ['Japan Park', 'Bernardinas Park'],
  },
  {
    title: 'Cafees',
    data: ['Caffeine', 'London Grill', 'Chilli Pizza'],
  },
];
