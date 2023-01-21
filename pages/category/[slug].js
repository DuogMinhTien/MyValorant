import CategoryContainer from '~/containers/CategoryContainer';
import MainLayout from '~/layout/MainLayout';
import { useGetPostHeadlinesInfinity } from '~/hooks';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useGetPostHeadlines } from '~/hooks';

export default function Category() {
  const router = useRouter();
  const { slug } = router.query;

  const [isLatest, setIsLatest] = useState(false);

  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = isLatest
    ? useGetPostHeadlinesInfinity({ latest: 1, limit: 8 })
    : useGetPostHeadlinesInfinity({ category: slug, limit: 8 });

  const [titleCategory, setTitleCategory] = useState('');
  useEffect(() => {
    function getTitle(listCategory) {
      let k = listCategory.filter((item) => {
        return '/category/' + item?.slug === router.asPath;
      });
      return k[0]?.name;
    }
    if (router.asPath === '/category/latest') {
      setTitleCategory('Bài viết mới nhất');
    } else if (!!data?.pages[0]?.data?.data?.length) {
      setTitleCategory(getTitle(data?.pages[0]?.data?.data[0]?.category));
    } else {
      setTitleCategory('');
    }
  }, [data]);

  useEffect(() => {
    setIsLatest(router.asPath === '/category/latest');
  }, []);

  return (
    <MainLayout title={titleCategory}>
      <CategoryContainer
        title={titleCategory}
        data={data}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        isTopData={false}
      />
    </MainLayout>
  );
}
