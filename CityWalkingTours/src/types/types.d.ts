declare type CategotyItemType = {
  title: string;
  image: any;
  rating: string;
  location: string;
  description: string;
};

declare type CategotyType = {
  title: string;
  data: CategotyItemType[];
};

declare type CategoriesType = CategotyType[];
