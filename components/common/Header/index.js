import Container from '~/components/base/Container';
import { Constant, useGlobal } from '~/context/GlobalContext';
import styles from './styles.module.scss';
// import LogoHeader from './LogoHeader';
// import SearchHeader from './SearchHeader';
// import NavBar from './NavBar';
// import LoginButton from './LoginButton';
// import useResize from '~/hooks/useResize';
// import PopupModal from '../../base/PopupModal';
// import PopupNavbar from './PopupNavbar';
// import { useState } from 'react';
export default function Header() {
  // const device = useResize();
  // const [isOpen, setIsOpen] = useState(false);
  const openNavBar = useGlobal(Constant.openNavBar);
  return (
    <div className={styles['header']}>
      <Container>
        <div
          className={`${styles['icon-open-menu']} ${openNavBar.state ? styles['open-menu-popup'] : ''}`}
          onClick={() => {
            openNavBar.setState((prev) => !prev);
          }}
        >
          <div className={styles['icon-open-menu__child']}></div>
          <div className={styles['icon-open-menu__child']}></div>
          <div className={styles['icon-open-menu__child']}></div>
        </div>
      </Container>
    </div>
  );
}
