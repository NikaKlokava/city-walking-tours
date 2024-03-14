jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('@react-native-firebase/firestore', () => ({collection: []}));
jest.mock('@react-native-firebase/storage', () => ({}));
jest.mock('@react-native-community/geolocation', () => ({}));
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: {},
    }),
    useRoute: () => ({
      params: sectionsDataMock,
    }),
  };
});

jest.mock('react-native-splash-screen', () => ({
  hide: jest.fn(),
  show: jest.fn(),
}));

const sectionsDataMock = {
  uid: '123',
  title: 'mock title',
  rating: '5.0',
  liked: false,
  image: 'mock.png',
  description: 'description mock',
  gallery: ['mock_image.png'],
  details: {
    location: 'location',
    hours: '00:00',
    site: 'www',
    coordinates: {
      latitude: 123,
      longitude: 22,
    },
  },
};
