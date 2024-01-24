declare type CategotyItemType = {
  title: string;
  image: any;
  rating: string;
};

declare type CategotyType = {
  title: string;
  data: CategotyItemType[];
};

declare type CategoriesType = CategotyType[];
