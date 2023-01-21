import styles from './styles.module.scss';
export default function Container({ children, centerChild = false, className, style = {} }) {
  return (
    <div className={`${styles['container']}`}>
      <div className={`${className}  ${centerChild && styles['center-child']}`} style={{ ...style }}>
        {children}
      </div>
    </div>
  );
}
