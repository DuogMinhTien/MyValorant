import { useState } from 'react';
import Container from '~/components/base/Container';
import BundleFeature from '~/components/bundles/BundleFeature';
import DetailBundle from '~/components/bundles/DetailBundle';
import { useGetFeature } from '~/hooks/api/useFeature';
export default function BundlesContainer() {
  const { data } = useGetFeature();
  const [openDetail, setOpenDetail] = useState(false);
  return (
    <Container>
      {openDetail ? (
        <>
          <DetailBundle
            data={data?.data[0]}
            onClickBack={() => {
              setOpenDetail(false);
            }}
          />
        </>
      ) : (
        <>
          {data?.data?.map((item, index) => {
            return (
              <BundleFeature
                data={item}
                onClick={() => {
                  setOpenDetail(true);
                }}
              />
            );
          })}
        </>
      )}
    </Container>
  );
}
