import Filter from '~/components/common/Filter';
import { useGetLineups } from '~/hooks/api/useLineup';
import styles from './styles.module.scss';
export default function LineUps() {
  const { data } = useGetLineups();
  console.log(data);
  return (
    <div className={styles['lineups']}>
      <h3 className={styles['title']}>LINEUPS</h3>
      <div className={styles['filters']}>
        <Filter
          title={'Maps'}
          list={[
            {
              text: 'All',
              value: 'all',
            },
            {
              text: 'Lotus',
              value: 'lotus',
            },
            {
              text: 'Split',
              value: 'split',
            },
          ]}
        />
      </div>
      <div className={styles['list-videos']}></div>
    </div>
  );
}
