import { useContext } from 'react';
import { GlobalContext } from './GlobalProvider';

const useGlobal = (key = '') => {
  const global = useContext(GlobalContext);
  if (key !== '') {
    return global[key];
  }
  return global;
};

export default useGlobal;
