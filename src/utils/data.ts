import {tabs} from '../navigation';

import SVG_HOME from '../assets/icons/home.svg';
import SVG_WISHLIST from '../assets/icons/wishlist.svg';
import SVG_MAP from '../assets/icons/map.svg';
import SVG_SETTINGS from '../assets/icons/settings.svg';

import SVG_HOURS from '../assets/icons/hours.svg';
import SVG_WEB from '../assets/icons/web.svg';
import SVG_LOCATION from '../assets/icons/location.svg';

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

export const INITIAL_REGION = {
  latitude: 54.687157,
  longitude: 25.279652,
  latitudeDelta: 0.0955,
  longitudeDelta: 0.0421,
};

export const settingsItem = {
  city: 'city',
  theme: 'Theme',
};

export const SETTINGS = {
  [settingsItem.city]: {name: 'City', description: 'Vilnius'},
  [settingsItem.theme]: {name: 'Theme', description: 'bright' || 'dark'},
};
