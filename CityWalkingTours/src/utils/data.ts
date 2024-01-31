import { tabs } from "../navigation";

const image1 = require('../assets/home_welcome.png');
const image2 = require('../assets/home_attract.png');
const image3 = require('../assets/home_food.png');
const image4 = require('../assets/home_shopping.png');
const image5 = require('../assets/home_get_started.png');

const photo1 = require('../assets/viln.png');
const photo2 = require('../assets/wars.png');
const photo3 = require('../assets/riga.png');
const photo4 = require('../assets/tallinn.png');
const photo5 = require('../assets/hrod.png');

const sodas = require('../assets/sodas.png');

const icons = {
  ICON_0: 'ICON_0',
  ICON_1: 'ICON_1',
  ICON_2: 'ICON_2',
  ICON_3: 'ICON_3',
  ICON_4: 'ICON_4',
  ICON_5: 'ICON_5',
  ICON_6: 'ICON_6',
  ICON_7: 'ICON_7',
  ICON_8: 'ICON_8',
};

const searchBarIcons = {
  [icons.ICON_0]: require('../assets/all_icon.png'),
  [icons.ICON_1]: require('../assets/attract_icon.png'),
  [icons.ICON_2]: require('../assets/museum_icon.png'),
  [icons.ICON_3]: require('../assets/shop_icon.png'),
  [icons.ICON_4]: require('../assets/park_icon.png'),
  [icons.ICON_5]: require('../assets/cafe_icon.png'),
  [icons.ICON_6]: require('../assets/cafe_icon.png'),
  [icons.ICON_7]: require('../assets/cafe_icon.png'),
  [icons.ICON_8]: require('../assets/cafe_icon.png'),
};

export const DATA = [
  {
    image: image1,
    title: 'Welcome to \n CITY WALKING TOURS!',
    description: "We'll make your trip bright and comfortable!",
    key: 1,
  },
  {
    image: image2,
    title: 'Explore new horizons',
    description:
      'Discover the best and most popular attractions and capture those moments!',
    key: 2,
  },
  {
    image: image3,
    title: 'Feel the best tastes',
    description:
      'Choose for yourself the best cafes and restaurants that will leave the most pleasant aftertaste!',
    key: 3,
  },
  {
    image: image4,
    title: 'Make your shopping experience enjoyable',
    description:
      'Explore the most popular shopping centers that will make your shopping faster and easier.!',
    key: 4,
  },
  {
    image: image5,
    title: 'Escape the ordinary life',
    description:
      'Discover great experiences around you and make you live interesting!',
    key: 5,
  },
];

export const CITIES = [
  {city: 'VILNIUS', country: 'Lithuania', photo: photo1},
  {city: 'WARSAW', country: 'Poland', photo: photo2},
  {city: 'RIGA', country: 'Latvia', photo: photo3},
  {city: 'TALLINN', country: 'Estonia', photo: photo4},
  {city: 'HRODNA', country: 'Belarus', photo: photo5},
];

export const SECTIONS: CategoriesType = Array.from({length: 8}, (_, i) => {
  return {
    title: `Category ${i + 1}`,
    data: Array.from({length: 10}, () => {
      return {
        title: 'Item title',
        image: sodas,
        rating: '4.8',
        details: {
          location: 'Location str, 34',
          workingHours: '09:00 AM',
          site: 'https://ozas.lt/',
        },
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus eget sapien ullamcorper ultricies. Sed lobortis cursus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce aliquam auctor odio. Phasellus lobortis, elit vitae tristique tincidunt, nibh elit vehicula elit, a facilisis dui leo ac felis. `,
        liked: false,
      };
    }),
  };
});

export const CATEGORIES = Array.from({length: SECTIONS.length + 1}, (_, i) => {
  return {
    category: i === 0 ? `See all` : `Category ${i}`,
    icon: searchBarIcons[`ICON_${i}`],
  };
});

export const WISHLIST_DATA = SECTIONS[0].data.reduce(
  (accum: CategotyItemType[], curr: CategotyItemType) => {
    return [...accum, {...curr, liked: true}];
  },
  [],
);

export const tabBarIcons = {
  [tabs.HOME]: require('../assets/home.png'),
  [tabs.WISHES]: require('../assets/wishlist.png'),
  [tabs.MAP]: require('../assets/map.png'),
  [tabs.SETTINGS]: require('../assets/settings.png'),
};