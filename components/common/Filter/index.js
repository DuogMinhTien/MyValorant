import { useState } from 'react';
import { forwardRef } from 'react';
import styles from './styles.module.scss';

function Filter({ title, list }, ref) {
  // {label, value}
  const [open, setOpen] = useState(false);
  return (
    <div className={styles['filter']}>
      <label className={styles['title']}>Hello</label>
      <div
        className={styles['show-option']}
        onClick={() => {
          setOpen((prev) => {
            return !prev;
          });
        }}
      >
        All
        <i class="fa-solid fa-caret-down"></i>
      </div>
      {open && (
        <div className={styles['list']}>
          <div className={styles['option']} value="hi">
            Hi
          </div>
          <div className={styles['option']} value="hello">
            Hello
          </div>
        </div>
      )}
    </div>
  );
}

export default forwardRef(Filter);
