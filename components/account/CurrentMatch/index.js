import { useEffect } from 'react';
import { useState } from 'react';
import PopupModal from '~/components/base/PopupModal';
import { Constant, useGlobal } from '~/context/GlobalContext';
import { useGetCurrentMatch, useGetListTier } from '~/hooks/api/useMatches';
import InforPlayer from './InforPlayer';
import styles from './styles.module.scss';

export default function CurrentMatch({ open, setOpen }) {
  const { data, isFetching, isFetched, refetch, isRefetching } = useGetCurrentMatch();
  const { data: dataTier } = useGetListTier({
    language: 'vi-VN',
  });
  const openLoading = useGlobal(Constant.openLoading);
  const [dataMatch, setDataMatch] = useState();
  useState(() => {
    if ((isFetching || !isFetched || isRefetching) && open) {
      openLoading.setState(true);
    } else {
      openLoading.setState(false);
    }
  }, [isFetching, isFetched, open, isRefetching]);
  useEffect(() => {
    setDataMatch(data?.data[0]);
  }, [data]);
  return (
    <>
      {isFetched && (
        <PopupModal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <div
            className={styles['reload']}
            onClick={() => {
              refetch();
            }}
          >
            Reload
          </div>
          <div className={styles['current-match']}>
            <div className={styles['team-red']}>
              {dataMatch?.players?.red?.map((item, index) => {
                return <InforPlayer data={item} key={index} tier={dataTier?.data[dataTier?.data?.length - 1]?.tiers} />;
              })}
            </div>
            <div className={styles['team-blue']}>
              {dataMatch?.players?.blue?.map((item, index) => {
                return <InforPlayer data={item} key={index} tier={dataTier?.data[dataTier?.data?.length - 1]?.tiers} />;
              })}
            </div>
          </div>
        </PopupModal>
      )}
    </>
  );
}
