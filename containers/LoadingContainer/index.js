import { useEffect, useState } from 'react';
import { Constant, useGlobal } from '~/context/GlobalContext';
import styles from './styles.module.scss';

export default function LoadingContainer() {
  const [numberDot, setNumberDot] = useState({ number: 0, text: '' });
  const openLoading = useGlobal(Constant.openLoading);
  useEffect(() => {
    if (openLoading.state) {
      const id = setInterval(() => {
        setNumberDot((prev) => {
          let number = ++prev.number;
          if (number > 3) {
            number = 0;
          }
          let text = '';
          for (let i = 0; i < number; i++) {
            text += '.';
          }
          let result = { number, text };
          return result;
        });
      }, 750);
      return () => {
        clearInterval(id);
      };
    }
  }, [numberDot, openLoading]);
  if (openLoading.state) {
    return <div className={styles['loading-container']}>Loading{numberDot.text}</div>;
  } else {
    return null;
  }
}
