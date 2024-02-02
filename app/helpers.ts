import {size} from './types';

export const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const equalArray = (a: size[], b: size[]) => {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i].size !== b[i].size || a[i].price !== b[i].price) {
      return false;
    }
  }

  return true;
};
