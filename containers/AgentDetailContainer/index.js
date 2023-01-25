import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import LineUps from '~/components/agents/LineUps';
import Container from '~/components/base/Container';
import { useGetAgentsDetail, useGetAgentsDetailEn } from '~/hooks/api/useAgents';
import styles from './styles.module.scss';
export default function AgentDetailContainer() {
  const router = useRouter();
  const [voiceLine, setVoiceLine] = useState(null);
  const { data, isLoading } = useGetAgentsDetail({
    slug: router.query.slug,
  });
  const {
    data: dataEn,
    isRefetching,
    refetch,
  } = useGetAgentsDetailEn({
    slug: router.query.slug,
  });
  function handleGradientText(arrColor) {
    return arrColor
      ?.map((item) => {
        return '#' + item;
      })
      ?.join(',');
  }
  function handleAudio() {
    let dataVoiceLine = data?.data?.voiceLine;
    if (!dataVoiceLine) {
      dataVoiceLine = dataEn?.data?.voiceLine;
      if (!dataVoiceLine) {
        refetch();
        return '';
      }
    }
    if (dataVoiceLine?.mediaList?.length > 0) {
      let index = Math.floor(Math.random() * dataVoiceLine?.mediaList?.length);
      return dataVoiceLine?.mediaList[index];
      // if (type === 'wav') {
      //   return ?.wave;
      // } else if (type === 'wem') {
      //   return dataVoiceLine?.mediaList[index]?.wwise;
      // }
    }
  }
  useEffect(() => {
    setVoiceLine(() => {
      let x = handleAudio();
      return { wav: x.wave, wem: x.wise };
    });
  }, [dataEn, isRefetching]);
  return (
    <Container>
      {isLoading ? (
        <></>
      ) : (
        <>
          <div className={styles['main']}>
            <div className={styles['agent-char']}>
              <img src={data?.data?.background} className={styles['background']} />
              <img src={data?.data?.fullPortraitV2} className={styles['character']} />
            </div>
            <div className={styles['infor']}>
              <h2
                className={styles['title']}
                style={{
                  background: `linear-gradient(to top left, ${handleGradientText(
                    data?.data?.backgroundGradientColors
                  )})`,
                }}
              >
                {data?.data?.displayName}
              </h2>
              {voiceLine ? (
                <audio
                  controls
                  className={styles['audio']}
                  onError={(e) => {
                    refetch();
                  }}
                >
                  {voiceLine?.wem && <source src={voiceLine.wem} type="audio/wem" />}
                  {voiceLine?.wav && <source src={voiceLine.wav} type="audio/wav" />}
                  Your browser does not support the audio element.
                </audio>
              ) : (
                <></>
              )}
              <p className={styles['description']}>{data?.data?.description}</p>
              <div className={styles['other-infor']}>
                <p className={styles['infor-other-detail']}>
                  <label className={styles['title-other-infor']}>Vai trò:</label>
                  <div className={styles['other-infor-link']} title={data?.data?.role.description}>
                    <label>{data?.data?.role.displayName}</label>
                    <img src={data?.data?.role?.displayIcon} />
                  </div>
                </p>
                <p className={styles['infor-other-detail']}>
                  <label className={styles['title-other-infor']}>Tên Dev:</label>
                  <label>{data?.data?.developerName}</label>
                </p>
              </div>
            </div>
          </div>
          <LineUps />
        </>
      )}
    </Container>
  );
}
