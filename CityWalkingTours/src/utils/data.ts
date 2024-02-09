import {tabs} from '../navigation';

import SVG_SEE_ALL from '../assets/icons/see_all.svg';
import SVG_CAMERA from '../assets/icons/camera.svg';
import SVG_CAFE from '../assets/icons/cafe.svg';
import SVG_MUSEUM from '../assets/icons/museum.svg';
import SVG_PARK from '../assets/icons/park.svg';
import SVG_SHOPPING from '../assets/icons/shopping.svg';

import SVG_HOME from '../assets/icons/home.svg';
import SVG_WISHLIST from '../assets/icons/wishlist.svg';
import SVG_MAP from '../assets/icons/map.svg';
import SVG_SETTINGS from '../assets/icons/settings.svg';

import SVG_HOURS from '../assets/icons/hours.svg';
import SVG_WEB from '../assets/icons/web.svg';
import SVG_LOCATION from '../assets/icons/location.svg';

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
  [icons.ICON_0]: SVG_SEE_ALL,
  [icons.ICON_1]: SVG_CAMERA,
  [icons.ICON_2]: SVG_CAFE,
  [icons.ICON_3]: SVG_MUSEUM,
  [icons.ICON_4]: SVG_PARK,
  [icons.ICON_5]: SVG_SHOPPING,
};

export const ONBOARDING = [
  {
    image: require('../assets/images/home_welcome.png'),
    title: 'Welcome to \n CITY WALKING TOURS!',
    description: "We'll make your trip bright and comfortable!",
    key: 1,
  },
  {
    image: require('../assets/images/home_attract.png'),
    title: 'Explore new horizons',
    description:
      'Discover the best and most popular attractions and capture those moments!',
    key: 2,
  },
  {
    image: require('../assets/images/home_food.png'),
    title: 'Feel the best tastes',
    description:
      'Choose for yourself the best cafes and restaurants that will leave the most pleasant aftertaste!',
    key: 3,
  },
  {
    image: require('../assets/images/home_shopping.png'),
    title: 'Make your shopping experience enjoyable',
    description:
      'Explore the most popular shopping centers that will make your shopping faster and easier.!',
    key: 4,
  },
  {
    image: require('../assets/images/home_get_started.png'),
    title: 'Escape the ordinary life',
    description:
      'Discover great experiences around you and make you live interesting!',
    key: 5,
  },
];

export const CITIES = [
  {
    city: 'VILNIUS',
    country: 'Lithuania',
    photo: require('../assets/images/viln.png'),
  },
  {
    city: 'WARSAW',
    country: 'Poland',
    photo: require('../assets/images/wars.png'),
  },
  {
    city: 'RIGA',
    country: 'Latvia',
    photo: require('../assets/images/riga.png'),
  },
  {
    city: 'TALLINN',
    country: 'Estonia',
    photo: require('../assets/images/tallinn.png'),
  },
  {
    city: 'HRODNA',
    country: 'Belarus',
    photo: require('../assets/images/hrod.png'),
  },
];

export const SECTIONS: CategoriesType = Array.from({length: 5}, (_, i) => {
  return {
    title: `Category ${i + 1}`,
    data: Array.from({length: 10}, () => {
      return {
        title: 'Item title',
        image: require('../assets/images/sodas.png'),
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

export const SETTINGS = [
  {name: 'city', description: 'Vilnius'},
  {name: 'theme', description: 'bright' || 'dark'},
];

export const tabBarIcons = {
  [tabs.HOME]: SVG_HOME,
  [tabs.WISHES]: SVG_WISHLIST,
  [tabs.MAP]: SVG_MAP,
  [tabs.SETTINGS]: SVG_SETTINGS,
};

const svgs = {
  location: 'location',
  hours: 'hours',
  site: 'site',
};

export const detailsSvgs = {
  [svgs.location]: SVG_LOCATION,
  [svgs.hours]: SVG_HOURS,
  [svgs.site]: SVG_WEB,
};

export const detailsDescription = {
  [svgs.location]: 'location',
  [svgs.hours]: 'open',
  [svgs.site]: 'site',
};

export const PLACE = SECTIONS[0].data[0];

const settings = {
  city: 'city',
  theme: 'theme',
};

export const settingsItems = {
  [settings.city]: 'City',
  [settings.theme]: 'Theme',
};
export const GEOLOCATION_DATA = [
  {
    latitude: 54.7113866218967,
    longitude: 25.261684612317406,
  },
  {
    latitude: 54.71485735297425,
    longitude: 25.275846675028085,
  },
  {
    latitude: 54.71567408155064,
    longitude: 25.296793336550085,
  },
  {
    latitude: 54.702582885171516,
    longitude: 25.267440418804828,
  },
  {
    latitude: 54.688526938246895,
    longitude: 25.291504051115773,
  },
  {
    latitude: 54.6910448968174,
    longitude: 25.263778507200954,
  },
  {
    latitude: 54.693445647809085,
    longitude: 25.27251762356423,
  },
];
const places = {
  akropolis: 'akropolis',
  ozas: 'ozas',
  outlet: 'outlet',
  japan_park: 'japan_park',
  gedimin_tower: 'gedimin_tower',
  national_library: 'national_library',
  white_bridge: 'white_bridge',
};
