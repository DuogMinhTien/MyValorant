import { useEffect, useState } from 'react';
import { forwardRef } from 'react';
import styles from './styles.module.scss';

function Filter({ title, list = [] }, ref) {
  // {label, value}
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({});
  useEffect(() => {
    if (list?.length > 0) {
      setValue({ text: list[0]?.text, value: list[0]?.value });
    }
  }, [list]);
  return (
    <div className={styles['filter']}>
      <label className={styles['title']}>{title}</label>
      <div
        className={styles['show-option']}
        onClick={() => {
          setOpen((prev) => {
            return !prev;
          });
        }}
      >
        {value?.text}
        <i class="fa-solid fa-caret-down"></i>
      </div>
      {open && (
        <div className={styles['list']}>
          {list?.map((item, index) => {
            return (
              <div
                className={styles['option']}
                value={item?.value}
                onClick={() => {
                  setValue({ text: item?.text, value: item?.value });
                  setOpen(false);
                }}
              >
                {item?.text}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default forwardRef(Filter);
