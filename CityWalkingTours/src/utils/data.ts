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

const ozas = require('../assets/ozas.png');

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

export const SECTIONS = [
  {
    title: 'Attractions',
    data: [
      {title: 'Gedimina prospectas', image: ozas},
      {title: 'Gediminas Tower', image: ozas},
      {title: 'Cafedral Square', image: ozas},
    ],
  },
  {
    title: 'Museums',
    data: [
      {title: 'Museum 1', image: ozas},
      {title: 'Museum 2', image: ozas},
      {title: 'Museum 3', image: ozas},
      {title: 'Museum 4', image: ozas},
      {title: 'Museum 5', image: ozas},
    ],
  },
  {
    title: 'Shopping centers',
    data: [
      {title: 'Akropolis', image: ozas},
      {title: 'Ozas', image: ozas},
      {title: 'Panorama', image: ozas},
      {title: 'Europa', image: ozas},
      {title: 'Cup', image: ozas},
    ],
  },
  {
    title: 'Parks',
    data: [
      {title: 'Japan Park', image: ozas},
      {title: 'Bernardinas Park', image: ozas},
    ],
  },
  {
    title: 'Cafees',
    data: [
      {title: 'Caffeine', image: ozas},
      {title: 'London Grill', image: ozas},
      {title: 'Chilli Pizza', image: ozas},
    ],
  },
];

export const CATEGORIES = SECTIONS.reduce((accum: string[], curr) => {
  return [...accum, curr.title];
}, []);
