import { useEffect, useState } from 'react';
import { closeIcon } from '~/context/svg-icon';
import useResize from '~/hooks/useResize';
import Space from '../../../base/Space';
import NavBar from '../NavBar';
import styles from './styles.module.scss';

export default function PopupNavbar({ open, onClose }) {
  const device = useResize();
  const [firstOpen, setFirstOpen] = useState();
  useEffect(() => {
    if (device === 'pc') onClose();
  }, [device]);
  useEffect(() => {
    if (open === true) setFirstOpen(true);
  });
  return (
    <div
      className={`${styles['popup-nav-bar']} ${
        open ? styles['open-nav-bar'] : firstOpen ? styles['close-nav-bar'] : ''
      }`}
    >
      <span
        className={styles['close-icon']}
        onClick={() => {
          onClose();
        }}
      >
        {closeIcon}
      </span>
      <Space height="40px" />
      <NavBar />
    </div>
  );
}
