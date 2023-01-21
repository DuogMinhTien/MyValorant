import Input from '~/components/base/Input';
import styles from './styles.module.scss';

export default function PopupSearch({ iconSearch, value, onChange, searchFunction, onClose }) {
  return (
    <div className={styles['popup-search']}>
      <Input
        type="text"
        placeholder={'Search'}
        icon={iconSearch}
        responsive={false}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        iconOnClick={() => {
          searchFunction();
          onClose();
        }}
        onKeyPressEnter={() => {
          searchFunction();
          onClose();
        }}
      />
    </div>
  );
}
