import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Container from '~/components/base/Container';
import Space from '~/components/base/Space';
import TitleComponent from '~/components/base/TitleComponent';
// import ListNews from '~/components/common/ListNews';
// import ListNewsLoading from '~/components/skeleton/ListNewsLoading';
// import NewsItemLoading from '~/components/skeleton/NewsItemLoading';
// import TitleLoading from '~/components/skeleton/TitleLoading';
// import { demoNewsItem } from '~/context/data-demo';
import styles from './styles.module.scss';
import { useState } from 'react';

export default function CategoryContainer({ title, data, fetchNextPage, isFetchingNextPage, hasNextPage, isTopData }) {
  const router = useRouter();

  return (
    <Container className={styles['category']}>
      <Space height="100px" heightMobile="0px" />
      {/* {title !== '' ? <TitleComponent title={title} /> : <TitleLoading />} */}
      <Space height="40px" heightMobile="20px" />
      {/* {data ? (
        <ListNews
          data={data}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          fetchNextPage={fetchNextPage}
          isTopData={isTopData}
        />
      ) : (
        <ListNewsLoading />
      )} */}

      <Space height="80px" />
    </Container>
  );
}
