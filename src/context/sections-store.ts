import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {makeObservable} from 'mobx';

const collectionRef = (uid: string) =>
  firestore().collection('cities').doc(uid).collection('sections');

class SectionsStore {
  sectionsData: any = [];
  categories: any = [];
  isLoading = true;

  constructor() {
    makeObservable(this);
  }

  uploadCategories = async (uid: string) => {
    try {
      const collection = await collectionRef(uid).get();
      const res = collection.docs.map(elem => elem.data());
      const uids = collection.docs.map(elem => elem.id);
      // this.categories = res as Categories;

      for (let i = 0; i < this.categories.length; i++) {
        const iconRef = storage().ref(this.categories[i].icon);
        const url = await iconRef.getDownloadURL();
        this.categories[i] = {...this.categories[i], icon: url, uid: uids[i]};
      }
    } catch (error) {
      console.log(error);
    }
  };

  uploadSectionsData = async (uid: string) => {
    const collection = await collectionRef(uid).get();
    const res = collection.docs.map(el => el.data());
  };
  setCategories = (categories: any) => {
    this.categories = categories;
  };
  setSectionsData = (sectionsData: any) => {
    this.sectionsData = sectionsData;
  };
}

export const sectionsStore = new SectionsStore();
