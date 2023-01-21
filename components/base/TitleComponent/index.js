import styles from './styles.module.scss';
export default function TitleComponent({ title }) {
  return <h2 className={styles['title-component']}>{title}</h2>;
}
