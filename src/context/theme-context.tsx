import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {DARK_THEME, LIGHT_THEME, ids} from '../utils';

type ThemeTypeContext = {
  theme: ThemeType;
  updateTheme?: () => void;
};

const defaultTheme: ThemeTypeContext = {
  theme: DARK_THEME,
};

const ThemeContext = createContext<ThemeTypeContext>(defaultTheme);

export const ThemeContextProvider = ({children}: any) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(
    defaultTheme.theme,
  );

  useEffect(() => {
    AsyncStorage.getItem('THEME')
      .then(
        res =>
          res && setCurrentTheme(res === ids.dark ? DARK_THEME : LIGHT_THEME),
      )
      .catch(err => console.log(err));
  }, []);

  const updateTheme = useCallback(async () => {
    setCurrentTheme(prev => {
      return prev.id === ids.dark ? LIGHT_THEME : DARK_THEME;
    });
    AsyncStorage.setItem('THEME', currentTheme.id).catch(err =>
      console.log(err),
    );
  }, []);

  const theme = useMemo(
    () => ({
      theme: currentTheme,
      updateTheme,
    }),
    [currentTheme, updateTheme],
  );

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
