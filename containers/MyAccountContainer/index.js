import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import CurrentMatch from '~/components/account/CurrentMatch';
import Container from '~/components/base/Container';
import { Constant, useGlobal } from '~/context/GlobalContext';
import { useGetAccount, useGetBorderLevel } from '~/hooks/api/useAccount';
import styles from './styles.module.scss';
export default function MyAccountContainer() {
  const [nowLevel, setNowLevel] = useState({});
  const inforAcc = useGlobal(Constant.inforAcc);
  const [open, setOpen] = useState(false);
  const { data } = useGetAccount({
    username: inforAcc.state.username,
    tagline: inforAcc.state.tagline,
  });
  const { data: dataBorderLevel } = useGetBorderLevel();
  useEffect(() => {
    let x = dataBorderLevel?.data.filter((item) => {
      return item.startingLevel < data?.data?.account_level;
    });
    if (x) {
      setNowLevel(x[x?.length - 1]);
    }
    inforAcc.setState((prev) => {
      let newVal = { ...prev, puuid: data?.data?.puuid };
      return newVal;
    });
  }, [data, dataBorderLevel]);
  return (
    <>
      <CurrentMatch open={open} setOpen={setOpen} />
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
        <div
          className={styles['get-now-match']}
          onClick={() => {
            setOpen(true);
          }}
        >
          Thông tin trận hiện tại
        </div>
      </Container>
    </>
  );
}
