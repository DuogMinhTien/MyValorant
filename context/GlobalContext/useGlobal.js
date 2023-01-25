import { useContext } from 'react';
import { GlobalContext } from './GlobalProvider';

const useGlobal = (key = '') => {
  const global = useContext(GlobalContext);
  if (key !== '') {
    if (typeof key === 'string') {
      return global[key];
    } else {
      let obj = {};
      for (let i = 0; i < key.length; i++) {
        obj[key[i]] = global[key[i]];
      }
      return obj;
    }
  }
  return global;
};

export default useGlobal;
