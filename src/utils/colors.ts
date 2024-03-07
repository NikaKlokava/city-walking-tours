export const ids = {
  dark: 'dark',
  light: 'light',
};

export const DARK_THEME: ThemeType = {
  id: 'dark',
  colors: {
    standart: 'black',
    primary1: 'white',
    primary2: 'black',
    semi_primary1: 'rgba(250,250,250,0.7)',
    semi_primary2: 'rgba(0,0,0,0.7)',
    semi_grey: 'rgba(20, 20, 20, 0.6)',
    semi_pink: 'rgba(255, 85, 110, 0.8)',
    active_bright: '#FF677E', // #5EDFFF
    active_dark: '#031F2B',
    grey: '#F5F5F5',
    input_background: '#263238',
    gradient: ['#031F2B', '#031F2B', '#000000'],
  },
};

export const LIGHT_THEME: ThemeType = {
  id: 'light',
  colors: {
    standart: 'black',
    primary1: 'black',
    primary2: 'white',
    semi_primary1: 'rgba(0,0,0,0.7)',
    semi_primary2: 'rgba(250,250,250,0.7)',
    semi_grey: 'rgba(20, 20, 20, 0.6)',
    semi_pink: 'rgba(255, 85, 110, 0.8)',
    active_bright: '#FF677E',
    active_dark: '#FFE6EA',
    grey: '#F5F5F5',
    input_background: '#C6C6C6',
    gradient: ['#FFE6EA', '#fff', '#fff'], //
  },
};
