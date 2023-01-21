import React from 'react';
import AgentCard from '~/components/agents/AgentCard';
import Container from '~/components/base/Container';
import { useGetAgents } from '~/hooks/api/useAgents';
import styles from './styles.module.scss';
const AgentsContainer = () => {
  const { data } = useGetAgents({
    language: 'vi-VN',
  });
  console.log(data);
  return (
    <Container className={styles['agent-container']}>
      {data?.data?.map((item, index) => {
        return <AgentCard data={item} />;
      })}
    </Container>
  );
};

export default AgentsContainer;
