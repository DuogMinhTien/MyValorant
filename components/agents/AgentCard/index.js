import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';
const AgentCard = ({ data }) => {
  return (
    <Link href={`/agents/${data?.uuid}`}>
      <a className={styles['agent-card']}>
        <img src={data?.displayIcon} className={styles['image']} />
        <div className={styles['name-char']}>{data?.displayName}</div>
      </a>
    </Link>
  );
};

export default AgentCard;
