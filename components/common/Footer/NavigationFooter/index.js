import NavigateLink from './NavigateLink';
import styles from './styles.module.scss';

export default function NavigationFooter({ className, title = '', list = [] }) {
  return (
    <div className={`${styles['navigation-footer']} ${className}`}>
      <h4 className={styles['title']}>{title}</h4>
      <div className={styles['navigation-footer__list']}>
        {list?.map((item) => {
          return <NavigateLink to={item.to} text={item.text} outside={item?.outside} />;
        })}
      </div>
    </div>
  );
}
