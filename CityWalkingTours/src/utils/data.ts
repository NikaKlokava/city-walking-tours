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

const icon1 = require('../assets/all_icon.png');
const icon2 = require('../assets/attract_icon.png');
const icon3 = require('../assets/museum_icon.png');
const icon4 = require('../assets/shop_icon.png');
const icon5 = require('../assets/park_icon.png');
const icon6 = require('../assets/cafe_icon.png');

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

// export const SECTIONS: CategoriesType = [
//   {
//     title: 'Attractions',
//     data: [
//       {
//         title: 'Gedimina prospectas',
//         image: ozas,
//         rating: '5.0',
//         details: {
//           location: 'Location str, 34',
//           workingHours: '09:00 AM',
//           site: 'https://ozas.lt/',
//         },
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus eget sapien ullamcorper ultricies. Sed lobortis cursus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce aliquam auctor odio. Phasellus lobortis, elit vitae tristique tincidunt, nibh elit vehicula elit, a facilisis dui leo ac felis. `,
//         liked: false,
//       },
//       {
//         title: 'Gediminas Tower',
//         image: ozas,
//         rating: '4.7',
//         details: {
//           location: 'Location str, 34',
//           workingHours: '09:00 AM',
//           site: 'https://ozas.lt/',
//         },
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus eget sapien ullamcorper ultricies. Sed lobortis cursus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce aliquam auctor odio. Phasellus lobortis, elit vitae tristique tincidunt, nibh elit vehicula elit, a facilisis dui leo ac felis. `,
//         liked: false,
//       },
//       {
//         title: 'Cafedral Square',
//         image: ozas,
//         rating: '4.8',
//         details: {
//           location: 'Location str, 34',
//           workingHours: '09:00 AM',
//           site: 'https://ozas.lt/',
//         },
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus eget sapien ullamcorper ultricies. Sed lobortis cursus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce aliquam auctor odio. Phasellus lobortis, elit vitae tristique tincidunt, nibh elit vehicula elit, a facilisis dui leo ac felis. `,
//         liked: false,
//       },
//     ],
//   },
//   {
//     title: 'Museums',
//     data: [
//       {
//         title: 'Museum 1',
//         image: ozas,
//         rating: '4.1',
//         details: {
//           location: 'Location str, 34',
//           workingHours: '09:00 AM',
//           site: 'https://ozas.lt/',
//         },
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus eget sapien ullamcorper ultricies. Sed lobortis cursus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce aliquam auctor odio. Phasellus lobortis, elit vitae tristique tincidunt, nibh elit vehicula elit, a facilisis dui leo ac felis. `,
//         liked: false,
//       },
//       {
//         title: 'Museum 2',
//         image: ozas,
//         rating: '4.3',
//         details: {
//           location: 'Location str, 34',
//           workingHours: '09:00 AM',
//           site: 'https://ozas.lt/',
//         },
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus eget sapien ullamcorper ultricies. Sed lobortis cursus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce aliquam auctor odio. Phasellus lobortis, elit vitae tristique tincidunt, nibh elit vehicula elit, a facilisis dui leo ac felis. `,
//         liked: false,
//       },
//       {
//         title: 'Museum 3',
//         image: ozas,
//         rating: '4.9',
//         details: {
//           location: 'Location str, 34',
//           workingHours: '09:00 AM',
//           site: 'https://ozas.lt/',
//         },
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus eget sapien ullamcorper ultricies. Sed lobortis cursus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce aliquam auctor odio. Phasellus lobortis, elit vitae tristique tincidunt, nibh elit vehicula elit, a facilisis dui leo ac felis. `,
//         liked: false,
//       },
//       {
//         title: 'Museum 4',
//         image: ozas,
//         rating: '5.0',
//         details: {
//           location: 'Location str, 34',
//           workingHours: '09:00 AM',
//           site: 'https://ozas.lt/',
//         },
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus eget sapien ullamcorper ultricies. Sed lobortis cursus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce aliquam auctor odio. Phasellus lobortis, elit vitae tristique tincidunt, nibh elit vehicula elit, a facilisis dui leo ac felis. `,
//         liked: false,
//       },
//       {
//         title: 'Museum 5',
//         image: ozas,
//         rating: '4.7',
//         details: {
//           location: 'Location str, 34',
//           workingHours: '09:00 AM',
//           site: 'https://ozas.lt/',
//         },
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus eget sapien ullamcorper ultricies. Sed lobortis cursus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce aliquam auctor odio. Phasellus lobortis, elit vitae tristique tincidunt, nibh elit vehicula elit, a facilisis dui leo ac felis. `,
//         liked: false,
//       },
//     ],
//   },
//   {
//     title: 'Shopping',
//     data: [
//       {
//         title: 'Akropolis',
//         image: ozas,
//         rating: '5.0',
//         details: {
//           location: 'Location str, 34',
//           workingHours: '09:00 AM',
//           site: 'https://ozas.lt/',
//         },
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus eget sapien ullamcorper ultricies. Sed lobortis cursus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce aliquam auctor odio. Phasellus lobortis, elit vitae tristique tincidunt, nibh elit vehicula elit, a facilisis dui leo ac felis. `,
//         liked: false,
//       },
//       {
//         title: 'Ozas',
//         image: ozas,
//         rating: '4.9',
//         details: {
//           location: 'Location str, 34',
//           workingHours: '09:00 AM',
//           site: 'https://ozas.lt/',
//         },
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus eget sapien ullamcorper ultricies. Sed lobortis cursus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce aliquam auctor odio. Phasellus lobortis, elit vitae tristique tincidunt, nibh elit vehicula elit, a facilisis dui leo ac felis. `,
//         liked: false,
//       },
//       {
//         title: 'Panorama',
//         image: ozas,
//         rating: '4.8',
//         details: {
//           location: 'Location str, 34',
//           workingHours: '09:00 AM',
//           site: 'https://ozas.lt/',
//         },
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus eget sapien ullamcorper ultricies. Sed lobortis cursus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce aliquam auctor odio. Phasellus lobortis, elit vitae tristique tincidunt, nibh elit vehicula elit, a facilisis dui leo ac felis. `,
//         liked: false,
//       },
//       {
//         title: 'Europa',
//         image: ozas,
//         rating: '4.9',
//         details: {
//           location: 'Location str, 34',
//           workingHours: '09:00 AM',
//           site: 'https://ozas.lt/',
//         },
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus eget sapien ullamcorper ultricies. Sed lobortis cursus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce aliquam auctor odio. Phasellus lobortis, elit vitae tristique tincidunt, nibh elit vehicula elit, a facilisis dui leo ac felis. `,
//         liked: false,
//       },
//       {
//         title: 'Cup',
//         image: ozas,
//         rating: '4.7',
//         details: {
//           location: 'Location str, 34',
//           workingHours: '09:00 AM',
//           site: 'https://ozas.lt/',
//         },
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus eget sapien ullamcorper ultricies. Sed lobortis cursus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce aliquam auctor odio. Phasellus lobortis, elit vitae tristique tincidunt, nibh elit vehicula elit, a facilisis dui leo ac felis. `,
//         liked: false,
//       },
//     ],
//   },
//   {
//     title: 'Parks',
//     data: [
//       {
//         title: 'Japan Park',
//         image: ozas,
//         rating: '4.7',
//         details: {
//           location: 'Location str, 34',
//           workingHours: '09:00 AM',
//           site: 'https://ozas.lt/',
//         },
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus eget sapien ullamcorper ultricies. Sed lobortis cursus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce aliquam auctor odio. Phasellus lobortis, elit vitae tristique tincidunt, nibh elit vehicula elit, a facilisis dui leo ac felis. `,
//         liked: false,
//       },
//       {
//         title: 'Bernardinas Park',
//         image: ozas,
//         rating: '4.8',
//         details: {
//           location: 'Location str, 34',
//           workingHours: '09:00 AM',
//           site: 'https://ozas.lt/',
//         },
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus eget sapien ullamcorper ultricies. Sed lobortis cursus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce aliquam auctor odio. Phasellus lobortis, elit vitae tristique tincidunt, nibh elit vehicula elit, a facilisis dui leo ac felis. `,
//         liked: false,
//       },
//     ],
//   },
//   {
//     title: 'Cafes',
//     data: [
//       {
//         title: 'Caffeine',
//         image: ozas,
//         rating: '4.8',
//         details: {
//           location: 'Location str, 34',
//           workingHours: '09:00 AM',
//           site: 'https://ozas.lt/',
//         },
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus eget sapien ullamcorper ultricies. Sed lobortis cursus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce aliquam auctor odio. Phasellus lobortis, elit vitae tristique tincidunt, nibh elit vehicula elit, a facilisis dui leo ac felis. `,
//         liked: false,
//       },
//       {
//         title: 'London Grill',
//         image: ozas,
//         rating: '5.0',
//         details: {
//           location: 'Location str, 34',
//           workingHours: '09:00 AM',
//           site: 'https://ozas.lt/',
//         },
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus eget sapien ullamcorper ultricies. Sed lobortis cursus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce aliquam auctor odio. Phasellus lobortis, elit vitae tristique tincidunt, nibh elit vehicula elit, a facilisis dui leo ac felis. `,
//         liked: false,
//       },
//       {
//         title: 'Chilli Pizza',
//         image: ozas,
//         rating: '4.5',
//         details: {
//           location: 'Location str, 34',
//           workingHours: '09:00 AM',
//           site: 'https://ozas.lt/',
//         },
//         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel risus eget sapien ullamcorper ultricies. Sed lobortis cursus dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce aliquam auctor odio. Phasellus lobortis, elit vitae tristique tincidunt, nibh elit vehicula elit, a facilisis dui leo ac felis. `,
//         liked: false,
//       },
//     ],
//   },
// ];

export const SECTIONS: CategoriesType = Array.from({length: 8}, (_, i) => {
  return {
    title: `Category ${i + 1}`,
    data: Array.from({length: 10}, () => {
      return {
        title: 'Item title',
        image: ozas,
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
    icon: i === 0 ? icon1 : icon2,
  };
});
