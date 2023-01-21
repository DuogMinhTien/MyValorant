import '~/public/styles/globals.scss';
import { QueryClientProvider } from 'react-query';
import queryClient from '~/core/queryClient';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Progress } from '~/components/base/progress';
import { useProgressStore } from '~/store';
import { GlobalProvider } from '~/context/GlobalContext';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state) => state.isAnimating);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Progress isAnimating={isAnimating} />
        <GlobalProvider>
          <Component {...pageProps} />
        </GlobalProvider>
        <ToastContainer />
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
