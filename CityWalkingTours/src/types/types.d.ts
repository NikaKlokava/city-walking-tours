declare type CategotyItemType = {
  title: string;
  image: any;
  rating: string;
  details: {location: string; workingHours: string; site: string};
  description: string;
};

declare type CategotyType = {
  title: string;
  data: CategotyItemType[];
};

declare type CategoriesType = CategotyType[];
