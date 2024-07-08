/* eslint-disable */
// @ts-nocheck
import {omit} from 'lodash';

export function mapKeys<T extends object>(
  object: T,
  keys: Partial<Record<keyof T, string>>,
) {
  return (Object.keys(keys) as Array<keyof typeof keys>).reduce(
    (prev, value) => ({
      ...prev,
      [keys[value]]: object[value],
    }),
    omit(object, Object.keys(keys)),
  );
}

export const getKeys = Object.keys as <T extends object>(
  obj: T,
) => Array<keyof T>;
