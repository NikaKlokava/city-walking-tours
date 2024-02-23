declare type CategotyItemType = {
  title: string;
  image: any;
  rating: string;
  details: {location: string; workingHours: string; site: string};
  description: string;
  liked: boolean;
};

declare type CategotyType = {
  title: string;
  data: CategotyItemType[];
};

declare type CategoriesType = CategotyType[];

declare type CityType = {
  city: string;
  country: string;
  photo: string;
  uid: string;
};

declare type CitiesType = CityType[];
