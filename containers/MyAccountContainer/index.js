import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import ChangeAcc from '~/components/account/ChangeAcc';
import CurrentMatch from '~/components/account/CurrentMatch';
import Container from '~/components/base/Container';
import PopupModal from '~/components/base/PopupModal';
import { Constant, useGlobal } from '~/context/GlobalContext';
import { useGetAccount, useGetBorderLevel } from '~/hooks/api/useAccount';
import styles from './styles.module.scss';
export default function MyAccountContainer() {
  const [nowLevel, setNowLevel] = useState({});
  const { inforAcc, openLoading } = useGlobal([Constant.inforAcc, Constant.openLoading]);
  const [open, setOpen] = useState(false);
  const [openChangeAcc, setOpenChangeAcc] = useState(false);
  const { data, refetch, status } = useGetAccount({
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
  useEffect(() => {
    refetch();
  }, [inforAcc]);
  useEffect(() => {
    if (inforAcc.state.username === data?.data?.name) {
      openLoading.setState(false);
    } else {
      setTimeout(() => {
        if (status === 'error') {
          openLoading.setState(false);
        }
      }, 500);
    }
  }, [data, inforAcc, status]);
  return (
    <>
      <PopupModal
        open={openChangeAcc}
        onClose={() => {
          setOpenChangeAcc(false);
        }}
      >
        <ChangeAcc
          setInforAcc={inforAcc.setState}
          onClose={() => {
            setOpenChangeAcc(false);
          }}
          setStateLoading={() => {
            openLoading.setState(true);
          }}
        />
      </PopupModal>
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
            <div className={styles['under']}>
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
              <i
                className={`fa-solid fa-repeat ${styles['switch-account']}`}
                onClick={() => {
                  setOpenChangeAcc(true);
                }}
              ></i>
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
