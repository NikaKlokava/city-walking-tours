// .......................................................... //
declare type CityType = {
  city: string;
  country: string;
  photo: string;
  uid: string;
};

declare type CitiesType = CityType[];

// .......................................................... //

declare type CategoryType = {title: string; icon: string; uid: string};

declare type CategoriesType = CategoryType[];

// .......................................................... //

declare type SectionsStore = {
  categories: CategoriesType;
  isLoading: boolean;
  sectionsData: [];
  uploadCategories: (uid: string) => void;
  uploadSectionsData: (uid: string) => void;
};

declare type SectionsData = {}[];

// .......................................................... //
