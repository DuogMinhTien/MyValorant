import Link from 'next/link';
import styles from './styles.module.scss';

export default function NavigateLink({ to, text, outside }) {
  return (
    <Link href={to}>
      <a className={styles['navigate-link']} target={outside ? '_blank' : ''}>
        {text}
      </a>
    </Link>
  );
}
