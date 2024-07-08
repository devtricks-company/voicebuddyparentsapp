import {atomWithStorage, createJSONStorage} from 'jotai/utils';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export function createAtomStorage<Item>() {
  return createJSONStorage<Item>(() => ({
    getItem,
    setItem,
    removeItem,
    clearAll,
  }));
}

export function getItem<T>(key: string): T | null {
  const value = storage.getString(key);
  return value ? (JSON.parse(value) as T) : null;
}

export function setItem<T>(key: string, value: T): void {
  storage.set(key, JSON.stringify(value));
}

export function removeItem(key: string): void {
  storage.delete(key);
}

export function clearAll(): void {
  storage.clearAll();
}

export const atomWithMMKV = <T>(key: string, initialValue: T) =>
  atomWithStorage<T>(key, initialValue);
