import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MOBILE_WIDTH } from '~/context/defaultConst';
import useResize from '~/hooks/useResize';
import styles from './styles.module.scss';
export default function Button({
  className = '',
  children,
  onClick = function () {},
  style = {},
  styleMobile = {},
  upperCase = true,
  center = false,
  to = '',
  backgroundColor = '',
  responsive = true,
}) {
  let upperCaseClass = '';

  const [styleForMobile, setStyleForMobile] = useState({});
  const device = useResize();
  useEffect(() => {
    if (device === 'mobile') {
      setStyleForMobile(styleMobile);
    } else {
      setStyleForMobile({});
    }
  });

  if (upperCase === false) upperCaseClass = styles.normalCase;

  return (
    <button
      className={`${className} ${styles['btn-primary']} ${upperCaseClass} ${center && styles['center']} ${
        responsive && styles['responsive']
      }`}
      onClick={(e) => {
        onClick(e);
      }}
      style={{ ...style, ...styleForMobile, backgroundColor: backgroundColor }}
    >
      {children}
      {to != '' && (
        <Link href={to}>
          <a className={styles['link-href']}></a>
        </Link>
      )}
    </button>
  );
}
