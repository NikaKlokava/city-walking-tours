import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {action, observable, runInAction, makeAutoObservable} from 'mobx';
import ICON_SEE_ALL from '../assets/icons/see_all.svg';

const collectionRef = (uid: string) =>
  firestore().collection('cities').doc(uid);

class SectionsStore {
  categories: CategoriesType = [];
  data: SectionsDataType = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this, {
      categories: observable,
      isLoading: observable,
      data: observable,
      uploadData: action,
      setCategories: action,
      updateUrlData: action,
      setData: action,
      setIsLoading: action,
      updateLikeStatus: action,
    });
  }

  uploadData = async (uid: string) => {
    this.setIsLoading(true);
    try {
      const collection = await collectionRef(uid).collection('sections').get();

      const sectionsData = collection.docs.map(doc =>
        doc.data(),
      ) as SectionsDataType;

      this.setData(sectionsData);

      const categoriesData: CategoriesType = sectionsData.reduce(
        (accum: CategoriesType, curr) => [...accum, curr.category],
        [],
      );

      this.setCategories(categoriesData);
      this.updateUrlData();
    } catch (error) {
      console.log({error});
    }
  };

  updateUrlData = async () => {
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
      this.categories.unshift({
        icon: ICON_SEE_ALL,
        title: 'See All',
        uid: 'see_all_1',
      }),
    );

    for (let i = 0; i < this.data.length; i++) {
      for (let k = 0; k < this.data[i].data.length; k++) {
        const dataInside = this.data[i].data;
        if (dataInside[k].image.startsWith('https')) continue;
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

  updateLikeStatus = async (uid: string, category: DataType) => {
    const dataToUpdate = this.data.map(elem => {
      if (elem.category.uid === category.uid) {
        return {
          ...elem,
          data: elem.data.map(val => {
            if (val.title === category.title) {
              const likedVal = {...val, liked: !val.liked};
              return likedVal;
            }
            return val;
          }),
        };
      }
      return elem;
    });

    const dataWithChanges = dataToUpdate.find(
      elem => elem.category.uid === category.uid,
    )?.data;

    this.setData(dataToUpdate);

    const reff = collectionRef(uid).collection('sections').doc(category.uid);
    dataWithChanges &&
      (await reff
        .update({
          data: dataWithChanges,
        })
        .then(() => console.log('good')));
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
