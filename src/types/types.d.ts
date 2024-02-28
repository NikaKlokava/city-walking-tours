// .......................................................... //
declare type CitiesType = CityType[];

declare type CityType = {
  city: string;
  country: string;
  photo: string;
  uid: string;
};
// .......................................................... //

declare type SectionsStore = {
  categories: CategoriesType;
  data: SectionsDataType;
  isLoading: boolean;
  uploadData: (uid: string) => void;
};
// .......................................................... //
declare type CategoriesType = CategoryType[];

declare type CategoryType = {icon: string | FC<SvgProps>; title: string};

// .......................................................... //

declare type DataType = {
  title: string;
  rating: string;
  liked: boolean;
  image: string;
  description: string;
  details: {
    location: string;
    hours: string;
    site: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
};
declare type SectionDataType = {
  category: CategoryType;
  data: DataType[];
};

declare type SectionsDataType = SectionDataType[];
