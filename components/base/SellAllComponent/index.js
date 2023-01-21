import Link from 'next/link';
import styles from './styles.module.scss';
import { arrowRight } from '~/context/svg-icon';

export default function SeeAllComponent({ text = 'Xem tất cả', to = '#' }) {
  return (
    <Link href={to}>
      <a className={styles['see-all']}>
        <span>{text}</span>
        <span className={styles['icon']}>{arrowRight}</span>
      </a>
    </Link>
  );
}
