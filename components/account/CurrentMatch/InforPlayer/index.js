import { useState } from 'react';
import { useEffect } from 'react';
import styles from './styles.module.scss';
export default function InforPlayer({ data, tier }) {
  const [currentTier, setCurrentTier] = useState({});
  useEffect(() => {
    let x = tier?.filter((item, index) => {
      return item?.tier === data?.currenttier;
    });
    setCurrentTier(x[0]);
  }, [tier]);
  return (
    <div className={styles['infor-player']}>
      <div className={styles['avatar']}>
        <img src={data?.assets?.agent?.small} />
        <label className={styles['level']}>{data?.level}</label>
      </div>
      <div className={styles['second-col']}>
        <span className={styles['name-agent']}>{data?.character}</span>
        <span className={styles['name-player']}>{data?.name}</span>
      </div>
      <div className={styles['third-3']}>
        <img className={styles['img-tier']} src={currentTier?.largeIcon} />
        <label className={styles['name-tier']}>{currentTier?.tierName}</label>
      </div>
    </div>
  );
}
