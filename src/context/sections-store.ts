import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {action, makeObservable, observable, runInAction} from 'mobx';

const collectionRef = (uid: string) =>
  firestore().collection('cities').doc(uid).collection('sections');

class SectionsStore {
  sectionsData: any = [];
  categories: CategoriesType = [];
  isLoading = true;

  constructor() {
    makeObservable(this, {
      categories: observable,
      isLoading: observable,
      sectionsData: observable,
      uploadCategories: action,
      uploadSectionsData: action,
      setCategories: action,
      setSectionsData: action,
      setIsLoading: action,
    });
  }

  uploadCategories = async (uid: string) => {
    try {
      const collection = await collectionRef(uid).get();
      const res = collection.docs.map(elem => elem.data());
      const uids = collection.docs.map(elem => elem.id);
      this.setCategories(res as CategoriesType);

      for (let i = 0; i < this.categories.length; i++) {
        const iconRef = storage().ref(this.categories[i].icon);
        const url = await iconRef.getDownloadURL();
        runInAction(
          () =>
            (this.categories[i] = {
              ...this.categories[i],
              icon: url,
              uid: uids[i],
            }),
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsLoading(false);
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
  setIsLoading = (value: boolean) => {
    this.isLoading = value;
  };
}

export const sectionsStore = new SectionsStore();
