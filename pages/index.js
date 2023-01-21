import { useRouter } from 'next/router';
import HomeContainer from '~/containers/HomeContainer';
import SearchContainer from '~/containers/SearchContainer';
import MainLayout from '~/layout/MainLayout';

export default function HomePage() {
  const router = useRouter();
  // console.log(router.query['s']);
  return <MainLayout>{!!router.query['s'] !== false ? <SearchContainer /> : <HomeContainer />}</MainLayout>;
}
