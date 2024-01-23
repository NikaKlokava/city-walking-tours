import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const image = require('../assets/back_icon.png');

export const CategoryItem = () => {
  const data = DATA[2].data;
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>{DATA[2].title.toLocaleUpperCase()}</Text>
      <ScrollView>
        <View style={styles.container}>
          {data.map(category => (
            <Pressable style={styles.categoryItem}>
              <TouchableOpacity>
                <ImageBackground>
                  <Text style={styles.description}>{category}</Text>
                </ImageBackground>
              </TouchableOpacity>
            </Pressable>
          ))}
        </View>
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, rowGap: 20},
  title: {
    color: '#5EDFFF',
    alignSelf: 'center',
    fontFamily: 'Georgia',
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#5EDFFF',
    padding: 5,
  },
  btnContainer: {
    backgroundColor: '#5EDFFF',
    alignSelf: 'flex-start',
    borderRadius: 15,
    minWidth: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {
    width: 15,
    height: 15,
  },
  backBtn: {
    fontFamily: 'Gill Sans',
    padding: 10,
    textAlign: 'center',
    color: '#263238',
  },
  categoryItem: {
    minHeight: 250,
    minWidth: '80%',
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 20,
    padding: 10,
  },
  description: {
    color: '#5EDFFF',
    fontFamily: 'Georgia',
    fontSize: 18,
    fontWeight: '500',
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
    data: ['Akropolis', 'Ozas', 'Panorama', 'Europa', 'Cup'],
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
