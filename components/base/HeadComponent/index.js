import styles from './styles.module.scss';
export default function HeadComponent({ children }) {
  return <div className={styles['head-component']}>{children}</div>;
}
