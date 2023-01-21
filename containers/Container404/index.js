import styles from './styles.module.scss';
import Image from 'next/image';

import Button from '~/components/base/Button';
import { homePath } from '~/context/routerPath';

export default function Container404() {
  return (
    <div className={styles['container-404']}>
      <div className={styles['img']}></div>
      <h1 className={styles['text-404']}>404</h1>
      <Button backgroundColor="#fff" style={{ color: '#6E33F2' }} to={homePath}>
        Trang chủ
      </Button>
    </div>
  );
}
