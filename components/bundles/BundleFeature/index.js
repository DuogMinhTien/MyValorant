import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';
import { useGetBundleSlug } from '~/hooks/api/useFeature';
import styles from './styles.module.scss';
export default function BundleFeature({ data, onClick = () => {} }) {
  const { data: data_bundle } = useGetBundleSlug({
    slug: data.bundle_uuid,
  });
  console.log({ data, data_bundle });
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  function formatTime(seconds) {
    var days = Math.floor(seconds / (3600 * 24));
    seconds -= days * 3600 * 24;
    var hrs = Math.floor(seconds / 3600);
    seconds -= hrs * 3600;
    var mnts = Math.floor(seconds / 60);
    seconds -= mnts * 60;

    if (days < 10) {
      days = '0' + days;
    }
    if (hrs < 10) {
      hrs = '0' + hrs;
    }
    if (mnts < 10) {
      mnts = '0' + mnts;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return days + ':' + hrs + ':' + mnts + ':' + seconds;
  }
  function formatMoney(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  useEffect(() => {
    setSecondsRemaining(data?.seconds_remaining);
    const intervalId = setInterval(() => {
      setSecondsRemaining((timeLeft) => {
        if (timeLeft === 0) {
          clearInterval(intervalId);
          return 0;
        }
        return timeLeft - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [data_bundle]);

  return (
    <div className={styles['bundle-feature']} onClick={onClick}>
      <img src={data_bundle?.data?.displayIcon} className={styles['bg-img']} />
      <div className={styles['infor']}>
        <div className={styles['time-remain']}>
          <label>FEATURE</label>
          <label>|</label>
          <label className={styles['remaining']}>{formatTime(secondsRemaining)}</label>
        </div>
        <h3 className={styles['title']}>{data_bundle?.data?.displayName}</h3>
        <p className={styles['sub-title']}>Bộ sưu tập</p>
      </div>
      <div className={styles['price']}>
        <Image src={'/imgs/icons/vpicon.png'} width={40} height={40} />
        {formatMoney(data?.bundle_price)}
      </div>
    </div>
  );
}
