import { useState } from 'react';
import { useEffect } from 'react';
import { useGetDetailAccount } from '~/hooks/api/useAccount';
import styles from './styles.module.scss';
export default function InforPlayer({ data, tier, teamBlue, isUser }) {
  const [currentTier, setCurrentTier] = useState({});
  const { data: dataPlayer, refetch: refetchAcc } = useGetDetailAccount(
    {
      mode: 'mmr',
      puuid: data?.puuid,
    },
    data?.name
  );
  useEffect(() => {
    let x = tier?.filter((item, index) => {
      return item?.tier === dataPlayer?.data?.highest_rank?.tier;
    });
    setCurrentTier(x[0]);
  }, [tier, data, dataPlayer]);
  useEffect(() => {
    refetchAcc();
  }, [data]);
  return (
    <div
      className={styles['infor-player']}
      style={{
        flexDirection: teamBlue ? 'row-reverse' : 'row',
        border: `3px solid ${teamBlue ? '#2B8CEE' : '#FF4655'}`,
        backgroundColor: isUser ? '#b59600' : '',
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
        <img className={styles['img-tier']} src={currentTier?.largeIcon} title={currentTier?.tierName} />
        {/* {currentTier?.tier > 2 && } */}
      </div>
    </div>
  );
}
