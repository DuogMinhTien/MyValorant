import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './styles.module.scss';
export default function ItemNav({ icon, label, list = [], to = '/' }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <div
        className={styles['item-nav']}
        onClick={() => {
          if (list?.length > 0) {
            setOpen((prev) => !prev);
          } else {
            router.push(to);
          }
        }}
      >
        <span
          className={`mud-icon-root mud-icon-default mud-icon-size-medium mud-nav-link-icon mud-nav-link-icon-default ${icon}`}
        ></span>
        {label}
        {list?.length > 0 ? (
          <svg
            className={`${
              styles['icon-list']
            } mud-icon-root mud-svg-icon mud-icon-size-medium mud-nav-link-expand-icon ${
              open ? styles['transform-rotate'] : ''
            }`}
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 10l5 5 5-5z"></path>
          </svg>
        ) : (
          <></>
        )}
      </div>
      {list?.length > 0 ? (
        <div className={`${styles['list-nav']} ${open ? styles['show'] : ''}`}>
          {list?.map((item, index) => {
            return (
              <Link key={index} href={item.to || '/'}>
                <a className={styles['item-nav']}>
                  <span
                    className={`mud-icon-root mud-icon-default mud-icon-size-medium mud-nav-link-icon mud-nav-link-icon-default ${item?.icon}`}
                  ></span>
                  {item?.label}
                </a>
              </Link>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
