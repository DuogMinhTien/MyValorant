import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import Container from '~/components/base/Container';
import Input from '~/components/base/Input';
import Button from '~/components/base/Button';
import Space from '~/components/base/Space';

export default function SearchContainer() {
  const [valueInput, setValueInput] = useState('');
  const router = useRouter();
  function Search() {
    if (valueInput.trim() === '') {
      toast.error('Bạn chưa nhập gì để tìm kiếm cả');
    } else {
      router.push('/?s=' + valueInput);
    }
  }
  useEffect(() => {
    setValueInput(router.query['s']);
  }, [router.query['s']]);

  // const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
  //   useGetPostHeadlinesInfinity({ keyword: valueInput, limit: 8 });
  return (
    <Container>
      {' '}
      <Space height="180px" heightMobile={10} />
      <div style={{ display: 'flex', columnGap: '20px' }}>
        <Input
          placeholder={'Tìm kiếm bài viết'}
          value={valueInput}
          onChange={(e) => {
            setValueInput(e.target.value);
          }}
          style={{ width: 'auto', flex: '1', padding: '15px 20px' }}
          responsive={false}
        />
        <Button
          styleMobile={{ fontSize: '1.6rem' }}
          onClick={() => {
            Search();
          }}
        >
          Tìm kiếm
        </Button>
      </div>
      <Space height="100px" />
      {/* <NotFound /> */}
      {/* <ListNews data={data} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} isFetchingNextPage={isFetchingNextPage} /> */}
      <Space height="100px" />
    </Container>
  );
}
