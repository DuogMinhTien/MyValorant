import { useState } from 'react';
import BundleFeature from '~/components/bundles/BundleFeature';
import { useGetFeature } from '~/hooks/api/useFeature';
export default function BundlesContainer() {
  const { data } = useGetFeature();
  return (
    <div>
      {data?.data?.map((item, index) => {
        return <BundleFeature data={item} />;
      })}
    </div>
  );
}
