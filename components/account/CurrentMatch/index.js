import { useEffect } from 'react';
import { useState } from 'react';
import PopupModal from '~/components/base/PopupModal';
import { Constant, useGlobal } from '~/context/GlobalContext';
import { useGetCurrentMatch, useGetListTier } from '~/hooks/api/useMatches';
import InforPlayer from './InforPlayer';
import styles from './styles.module.scss';

export default function CurrentMatch({ open, setOpen }) {
  const { data: dataTier } = useGetListTier({
    language: 'vi-VN',
  });
  const { openLoading, inforAcc } = useGlobal([Constant.openLoading, Constant.inforAcc]);
  const { data, isFetching, isFetched, refetch, isRefetching } = useGetCurrentMatch({
    puuid: inforAcc?.state?.puuid,
  });
  const [dataMatch, setDataMatch] = useState();
  useEffect(() => {
    if (open) {
      refetch();
    }
  }, [open]);
  useEffect(() => {
    if ((isFetching || !isFetched || isRefetching) && open) {
      openLoading.setState(true);
    } else {
      openLoading.setState(false);
    }
  }, [isFetching, isFetched, open]);
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
            <div className={styles['other-infor']}>
              <span className={styles['item-other-infor']}>
                <label className={styles['title-other-infor']}>Mode</label> {dataMatch?.metadata?.mode}
              </span>
              <span className={styles['item-other-infor']}>
                <label className={styles['title-other-infor']}>Map</label> {dataMatch?.metadata?.map}
              </span>
            </div>
            <div className={styles['match-team']}>
              <div className={styles['team-red']}>
                {dataMatch?.players?.red?.map((item, index) => {
                  return (
                    <InforPlayer data={item} key={index} tier={dataTier?.data[dataTier?.data?.length - 1]?.tiers} />
                  );
                })}
              </div>
              <div className={styles['team-blue']}>
                {dataMatch?.players?.blue?.map((item, index) => {
                  return (
                    <InforPlayer
                      data={item}
                      teamBlue={true}
                      key={index}
                      tier={dataTier?.data[dataTier?.data?.length - 1]?.tiers}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </PopupModal>
      )}
    </>
  );
}
