import styles from './styles.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NameToPath from '../NameToPath';
export default function Tags({ className = '', name, to = '', style = {} }) {
  if (!!name) {
    return (
      <NameToPath className={`${styles['tag']} ${className}`} pathName="category" text={name} to={to} style={style} />
    );
  }
}
