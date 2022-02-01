import AsyncStorage from '@react-native-async-storage/async-storage';

// blacklist reducer not persist data
const blacklist: string[] = [];

export const reduxPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist,
};
