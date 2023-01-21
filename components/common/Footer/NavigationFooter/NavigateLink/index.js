import Link from 'next/link';
import styles from './styles.module.scss';

export default function NavigateLink({ to, text }) {
  return (
    <Link href={to}>
      <a className={styles['navigate-link']}>{text}</a>
    </Link>
  );
}
