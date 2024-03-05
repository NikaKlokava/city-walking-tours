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
  updateLikeStatus: (uid: string, category: DataType) => void;
};
// .......................................................... //
declare type CategoriesType = CategoryType[];

declare type CategoryType = {
  icon: string | FC<SvgProps>;
  title: string;
  uid: string;
};

// .......................................................... //

declare type DataType = {
  uid: string;
  title: string;
  rating: string;
  liked: boolean;
  image: string;
  description: string;
  gallery: string[];
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

declare type SettingsStore = {
  city: string | null;
  cityUid: string | null;
  isOnboardingPassed: string | null;
  isLoading: boolean;
  uploadSettingsData: () => void;
  updateCity: (city: string, cityUid: string) => void;
  updateOnboarding: (value: string) => void;
};

declare type ThemeIdType = 'dark' | 'light';

declare type ThemeType = {
  id: ThemeIdType;
  colors: {
    standart: string;
    primary1: string;
    primary2: string;
    semi_primary1: string;
    semi_primary2: string;
    semi_grey: string;
    semi_pink: string;
    active_bright: string;
    active_dark: string;
    grey: strigng;
    input_background: string;
    gradient: string[];
  };
};
