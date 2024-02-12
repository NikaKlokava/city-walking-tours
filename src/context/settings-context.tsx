import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  memo,
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
          },
        })),
      )
      .catch(err => console.log(err));
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
