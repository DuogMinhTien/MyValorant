import { useState } from 'react';
import { useEffect } from 'react';
import styles from './styles.module.scss';
export default function InforPlayer({ data, tier, teamBlue }) {
  const [currentTier, setCurrentTier] = useState({});
  useEffect(() => {
    let x = tier?.filter((item, index) => {
      return item?.tier === data?.currenttier;
    });
    setCurrentTier(x[0]);
  }, [tier]);
  return (
    <div
      className={styles['infor-player']}
      style={{
        flexDirection: teamBlue ? 'row-reverse' : 'row',
      }}
    >
      <div className={styles['avatar']}>
        <img
          src={data?.assets?.agent?.small}
          style={{
            transform: teamBlue ? 'scaleX(-1)' : '',
          }}
        />
        <label
          className={styles['level']}
          style={{
            left: teamBlue ? '' : '0',
            right: teamBlue ? '0' : '',
          }}
        >
          {data?.level}
        </label>
      </div>
      <div
        className={styles['second-col']}
        style={{
          alignItems: teamBlue ? 'flex-end' : '',
        }}
      >
        <span className={styles['name-agent']}>{data?.character}</span>
        <span className={styles['name-player']}>{data?.name}</span>
      </div>
      <div
        className={styles['third-3']}
        style={{
          marginLeft: teamBlue ? '' : 'auto',
          marginRight: teamBlue ? 'auto' : '',
        }}
      >
        <img className={styles['img-tier']} src={currentTier?.largeIcon} />
        {currentTier?.tier > 2 && <label className={styles['name-tier']}>{currentTier?.tierName}</label>}
      </div>
    </div>
  );
}
