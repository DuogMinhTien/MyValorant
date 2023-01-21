import Image from 'next/image';
import React from 'react';

import { Constant, useGlobal } from '~/context/GlobalContext';
import ItemNav from './ItemNav';

import styles from './styles.module.scss';

const NavBar = () => {
  const openNavBar = useGlobal(Constant.openNavBar);
  return (
    <div className={`${styles['nav-bar']} ${openNavBar.state ? styles['show'] : ''}`}>
      <div className={styles['logo-nav']}>
        <Image src="/imgs/logo/logo.png" width={50} height={50} />
        <label>MyValorant</label>
      </div>
      <div className={styles['list']}>
        <ItemNav
          icon={'fa-solid fa-list'}
          label={'Thông tin'}
          list={[
            {
              icon: 'fa-solid fa-user',
              label: 'Đặc vụ',
              to: '/agents',
            },
            {
              icon: 'fas fa-boxes',
              label: 'Bundles',
              to: '/bundles',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default NavBar;
