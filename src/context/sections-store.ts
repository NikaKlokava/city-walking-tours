import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {action, makeObservable, observable, runInAction} from 'mobx';
import ICON_SEE_ALL from '../assets/icons/see_all.svg';

const collectionRef = (uid: string) =>
  firestore().collection('cities').doc(uid);

class SectionsStore {
  categories: CategoriesType = [];
  data: SectionsDataType = [];
  isLoading = true;

  constructor() {
    makeObservable(this, {
      categories: observable,
      isLoading: observable,
      data: observable,
      uploadData: action,
      setCategories: action,
      updateData: action,
      setData: action,
      setIsLoading: action,
    });
  }

  uploadData = (uid: string) => {
    try {
      collectionRef(uid).onSnapshot(snap => {
        const sectionsData: SectionsDataType = snap.data()?.sections;
        this.setData(sectionsData);

        const categoriesData: CategoriesType = sectionsData.reduce(
          (accum: CategoriesType, curr) => [...accum, curr.category],
          [],
        );

        this.setCategories(categoriesData);
        this.updateData();
      });
    } catch (error) {
      console.log({error});
    }
  };
  updateData = async () => {
    for (let i = 0; i < this.categories.length; i++) {
      const iconRef = storage().ref(this.categories[i].icon);
      const url = await iconRef.getDownloadURL();
      runInAction(
        () =>
          (this.categories[i] = {
            ...this.categories[i],
            icon: url,
          }),
      );
    }

    runInAction(() =>
      this.categories.unshift({icon: ICON_SEE_ALL, title: 'See All'}),
    );

    for (let i = 0; i < this.data.length; i++) {
      for (let k = 0; k < this.data[i].data.length; k++) {
        const dataInside = this.data[i].data;
        const iconRef = storage().ref(dataInside[k].image);
        const url = await iconRef.getDownloadURL();
        runInAction(
          () =>
            (dataInside[k] = {
              ...dataInside[k],
              image: url,
            }),
        );
      }
    }

    this.setIsLoading(false);
  };
  setCategories = (categories: CategoriesType) => {
    this.categories = categories;
  };
  setData = (data: SectionsDataType) => {
    this.data = data;
  };
  setIsLoading = (value: boolean) => {
    this.isLoading = value;
  };
}

export const sectionsStore = new SectionsStore();
