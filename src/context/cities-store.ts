import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {action, makeObservable, observable, runInAction} from 'mobx';

export class CityStore {
  data: CitiesType = [];
  isLoading = true;

  constructor() {
    makeObservable(this, {
      data: observable,
      isLoading: observable,
      uploadCitiesData: action,
      setData: action,
      setIsLoading: action,
    });
  }

  uploadCitiesData = async () => {
    try {
      const collection = await firestore().collection('cities').get();
      const data = collection.docs.map(doc => doc.data());
      const uids = collection.docs.map(doc => doc.id);
      const citiesData = data.reduce((accum: CitiesType, curr) => {
        return [...accum, curr.city];
      }, []);
      this.setData(citiesData as CitiesType);

      for (let i = 0; i < this.data.length; i++) {
        const photoRef = storage().ref(this.data[i].photo);
        const url = await photoRef.getDownloadURL();
        runInAction(() => {
          this.data[i] = {...this.data[i], photo: url, uid: uids[i]};
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsLoading(false);
    }
  };

  setData = (data: CitiesType) => {
    this.data = data;
  };
  setIsLoading = (value: boolean) => {
    this.isLoading = value;
  };
}

export const selectCityStore = new CityStore();
