export const settingsStoreMock = {
  city: null,
  cityUid: null,
  isOnboardingPassed: '',
  isLoading: true,
  uploadSettingsData: async () => Promise,
  updateCity: () => Promise,
  updateOnboarding: async () => Promise,
};

export const cityStoreMock = {
  data: [],
  isLoading: false,
  uploadCitiesData: () => PromiseConstructor,
  setData: () => null,
  setIsLoading: () => null,
};

export const sectionsStoreMock = {
  categories: [],
  data: [],
  isLoading: false,
  uploadData: async () => Promise,
  updateLikeStatus: () => Promise,
};
