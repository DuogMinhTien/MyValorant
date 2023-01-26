import styles from './styles.module.scss';

export default function BoxItem({ data }) {
  return (
    <div className={styles['box-item']}>
      <img src={data?.image} />
      {data?.amount > 1 && <label className={styles['amount']}>x{data?.amount}</label>}
      {data?.discount_percent === 1 && <span className={styles['free-in-bundle']}>Free In Bundle</span>}
    </div>
  );
}
