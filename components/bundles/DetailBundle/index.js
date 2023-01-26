import BoxItem from './BoxItem';
import styles from './styles.module.scss';
export default function DetailBundle({ data, onClickBack = () => {} }) {
  console.log(data);
  return (
    <>
      <div className={styles['back-bundles']} onClick={onClickBack}>
        <i class="fa-solid fa-circle-chevron-left"></i>
        <label>Quay Lại</label>
      </div>
      <div className={styles['list-item']}>
        {data?.items?.map((item, index) => {
          return <BoxItem data={item} key={index} />;
        })}
      </div>
    </>
  );
}
