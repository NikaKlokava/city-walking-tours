import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type SettingsContextValueType = {
  data: {
    city: string | null;
    isOnboardingPassed: string | null;
    isLoading: boolean;
  };
};
type SettingsContextType = SettingsContextValueType & {
  updateCity?: (city: string) => void;
  updateOnboarding?: (value: string) => void;
};

const defaultSettingsValues: SettingsContextValueType = {
  data: {
    city: null,
    isOnboardingPassed: null,
    isLoading: true,
  },
};

const SettingsContext = createContext<SettingsContextType>(
  defaultSettingsValues,
);

type SettingsContextProviderType = {
  children: React.ReactNode;
};

export const SettingsContextProvider = ({
  children,
}: SettingsContextProviderType) => {
  const [settings, setSettings] = useState<SettingsContextValueType>(
    defaultSettingsValues,
  );

  useEffect(() => {
    AsyncStorage.getItem('ONBOARDING')
      .then(result =>
        setSettings(prev => ({
          data: {
            ...prev.data,
            isOnboardingPassed: result,
            isLoading: result ? true : false,
          },
        })),
      )
      .catch(err => console.log(err));

    AsyncStorage.getItem('CITY')
      .then(result =>
        setSettings(prev => ({
          data: {
            ...prev.data,
            city: result,
            isLoading: result ? true : false,
          },
        })),
      )
      .catch(err => console.log(err))
      .finally(() =>
        setSettings(prev => ({
          data: {
            ...prev.data,
            isLoading: false,
          },
        })),
      );
  }, []);

  const updateCity = useCallback((city: string) => {
    setSettings(prev => ({
      data: {
        ...prev.data,
        city,
      },
    }));

    AsyncStorage.setItem('CITY', city).catch(err => console.log(err));
  }, []);

  const updateOnboarding = (value: string) => {
    setSettings(prev => ({
      data: {
        ...prev.data,
        isOnboardingPassed: value,
      },
    }));
    AsyncStorage.setItem('ONBOARDING', value).catch(err => console.log(err));
  };

  const value = useMemo(
    () => ({
      ...settings,
      updateCity,
      updateOnboarding,
    }),
    [settings, updateCity, updateOnboarding],
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => useContext(SettingsContext);
