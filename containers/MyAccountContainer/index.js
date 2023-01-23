import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Container from '~/components/base/Container';
import { useGetAccount, useGetBorderLevel } from '~/hooks/api/useAccount';
import styles from './styles.module.scss';
export default function MyAccountContainer() {
  const [nowLevel, setNowLevel] = useState({});
  const { data } = useGetAccount({
    username: 'BáoQuáTiếnÊi',
    tagline: '7290',
  });
  const { data: dataBorderLevel } = useGetBorderLevel();
  useEffect(() => {
    let x = dataBorderLevel?.data.filter((item) => {
      return item.startingLevel < data?.data?.account_level;
    });
    if (x) {
      setNowLevel(x[x?.length - 1]);
    }
  }, [data, dataBorderLevel]);
  console.log(data, nowLevel);
  return (
    <Container>
      <p
        className={styles['puuid']}
        onClick={() => {
          navigator.clipboard.writeText(data?.data?.puuid);
          toast.success('Copy thành công!');
        }}
      >
        PUUID: {data?.data?.puuid}
      </p>
      <div className={styles['infor-account']}>
        <img src={data?.data?.card?.small} className={styles['avatar']} />
        <div className={styles['detail-infor']}>
          <div className={styles['name-tag']}>
            <h3 className={styles['name-acc']}>{data?.data?.name}</h3>
            <label className={styles['tagline-acc']}>#{data?.data?.tag}</label>
          </div>
          <div
            className={styles['level']}
            style={{
              background: `url(${nowLevel?.levelNumberAppearance})`,
            }}
          >
            {/* <img src={nowLevel?.levelNumberAppearance} className={styles['border-level']} /> */}
            <label
              className={styles['label-level']}
              style={{
                fontSize: data?.data?.account_level >= 100 ? '1rem' : '1.2rem',
              }}
            >
              {data?.data?.account_level}
            </label>
          </div>
        </div>
      </div>
      <div className={styles['get-now-match']}>Thông tin trận hiện tại</div>
    </Container>
  );
}
