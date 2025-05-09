// storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

// Save data
export const storeData = async (key, value) => {
  try {
    const jsonValue = typeof value === 'string' ? value : JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error saving data:', e);
  }
};

// Read data
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch {
      return value; // if it wasn't JSON
    }
  } catch (e) {
    console.error('Error reading data:', e);
  }
};

// Remove data
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Error removing data:', e);
  }
};

// Clear all storage
export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.error('Error clearing storage:', e);
  }
};
