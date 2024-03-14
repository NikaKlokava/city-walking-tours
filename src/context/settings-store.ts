import AsyncStorage from '@react-native-async-storage/async-storage';
import {action, observable, makeAutoObservable} from 'mobx';

export class SettingsStore {
  city: string | null = null;
  cityUid: string | null = null;
  isOnboardingPassed: string | null = null;
  isLoading = true;

  constructor() {
    makeAutoObservable(this, {
      city: observable,
      cityUid: observable,
      isOnboardingPassed: observable,
      isLoading: observable,
      updateCity: action,
      updateOnboarding: action,
      uploadSettingsData: action,
      setCity: action,
      setCityUid: action,
      setIsLoading: action,
    });
  }

  uploadSettingsData = async () => {
    try {
      const result = await AsyncStorage.getItem('ONBOARDING');
      if (result) {
        this.setOnboarding(result);
        this.setIsLoading(true);
      } else {
        this.setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }

    try {
      const cityUid = await AsyncStorage.getItem('CITYUID');
      const city = await AsyncStorage.getItem('CITY');

      if (cityUid || city) {
        cityUid && this.setCityUid(cityUid);
        city && this.setCity(city);
        this.setIsLoading(true);
      } else {
        this.setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsLoading(false);
    }
  };

  updateCity = async (city: string, cityUid: string) => {
    this.setCity(city);
    this.setCityUid(cityUid);

    AsyncStorage.setItem('CITY', city).catch(err => console.log(err));
    AsyncStorage.setItem('CITYUID', cityUid).catch(err => console.log(err));
  };

  updateOnboarding = async (value: string) => {
    this.setOnboarding(value);
    AsyncStorage.setItem('ONBOARDING', value).catch(err => console.log(err));
  };

  setCity = (city: string) => {
    this.city = city;
  };

  setCityUid = (cityUid: string) => {
    this.cityUid = cityUid;
  };

  setOnboarding = (onboarding: string) => {
    this.isOnboardingPassed = onboarding;
  };

  setIsLoading = (value: boolean) => {
    this.isLoading = value;
  };
}

export const settingsStore = new SettingsStore();
