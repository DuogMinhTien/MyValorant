import styles from './styles.module.scss';

export default function FormCF({ children, title }) {
  return (
    <div className={styles['form-cf']}>
      <h3 className={styles['form-cf__title']}>{title}</h3>
      {children}
    </div>
  );
}
