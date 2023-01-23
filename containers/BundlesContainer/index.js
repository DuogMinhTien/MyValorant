import { useState } from 'react';
import Container from '~/components/base/Container';
import BundleFeature from '~/components/bundles/BundleFeature';
import { useGetFeature } from '~/hooks/api/useFeature';
export default function BundlesContainer() {
  const { data } = useGetFeature();
  return (
    <Container>
      {data?.data?.map((item, index) => {
        return <BundleFeature data={item} />;
      })}
    </Container>
  );
}
