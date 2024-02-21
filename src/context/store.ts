import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {createContext, useContext} from 'react';

class CityStore {
  data: CitiesType = [];

  uploadData = async () => {
    const collection = await firestore().collection('cities').get();
    const citiesData = collection.docs.map(doc => doc.data());
    this.setData(citiesData as CitiesType);

    for (let i = 0; i < this.data.length; i++) {
      const photoRef = storage().ref(this.data[i].photo);
      const res = await photoRef.getDownloadURL();
      this.data[i] = {...this.data[i], photo: res};
    }
    this.setData(this.data);
  };

  setData = (data: any) => {
    this.data = data;
  };
}

const selectCityStore = new CityStore();

export const SelectCityStoreContext = createContext(selectCityStore);
export const useSelectCityStore = () => useContext(SelectCityStoreContext);
