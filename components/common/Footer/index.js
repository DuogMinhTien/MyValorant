import CopyrightFooter from './CopyrightFooter';
import FollowSocial from './FollowSocial';
import NavigationFooter from './NavigationFooter';
import styles from './styles.module.scss';
import Container from '../../base/Container';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <Container className={styles['footer-container']}>
        <div className={styles['main-footer']}>
          <div className={styles['infor-main']}>
            <Image src={'/imgs/logo/logo.png'} width={50} height={50} />
            <label>MyValorant</label>
          </div>
          <p className={styles['des-main']}>Phần này là mô tả. Còn mô tả cái gì thì chưa nghĩ ra =))</p>
        </div>
        <NavigationFooter
          title="APIs"
          list={[
            {
              to: 'https://github.com/Henrik-3/unofficial-valorant-api',
              text: 'Henrik Github',
              outside: true,
            },
            {
              to: 'https://dash.valorant-api.com/',
              text: 'API Valorant',
              outside: true,
            },
          ]}
        />
      </Container>
    </footer>
  );
}
