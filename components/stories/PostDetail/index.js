import NameToPath from '~/components/base/NameToPath';
import Space from '~/components/base/Space';
import styles from './styles.module.scss';
import Dot from '~/components/base/Dot';
import dayjs from 'dayjs';
import { FacebookIcon, FacebookShareButton, TwitterShareButton } from 'react-share';
import { useState } from 'react';
import { useEffect } from 'react';
import Tags from '~/components/base/Tags';
import TableOfContent from '../TableOfContent';

export default function PostDetail({ data }) {
  const [pathPost, setPathPost] = useState('');
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    setPathPost(window.location.href);
    if (!!data) {
      setDataLoaded(true);
    }
  }, [data]);
  function setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
  function getIdYoutube(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }
  useEffect(() => {
    if (dataLoaded) {
      let x = document.querySelectorAll('oembed');
      x.forEach((item) => {
        let child = document.createElement('iframe');
        setAttributes(child, {
          src: 'https://www.youtube.com/embed/' + getIdYoutube(item.getAttribute('url')),
          width: '100%',
          title: 'Youtube video player',
          frameborder: '0',
          allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
          allowfullscreen: true,
        });
        child.style.aspectRatio = '5/3';
        item.appendChild(child);
      });
    }
  }, [dataLoaded]);
  return (
    <div>
      <div className={styles['head-post']}>
        <img className={styles['head-post__img']} src={data?.image} alt="image-post" />
        <div className={styles['head-post__right']}>
          {data?.category?.length > 0 && <Tags name={data?.category[0].name} to={data?.category[0].slug} />}
          <h1 className={styles['post-title']}>{data?.title}</h1>
          <div className={styles['post-infor']}>
            <p className={styles['infor-text']}>{dayjs(data?.updated_at).format('DD-MM-YYYY')}</p>
            <Dot color="#6b6b6b" />
            <NameToPath
              className={styles['infor-text']}
              text={data?.author?.username}
              pathName="author"
              to={data?.author?.username}
            />
          </div>
          <div className={styles['share']}>
            Chia sẻ
            <FacebookShareButton url={pathPost}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${styles['icon-social']} ${styles['facebook-share-icon']}`}
              >
                <path d="M0.169922 16.003C0.171764 23.7921 5.83573 30.4241 13.5285 31.6448V20.5789H9.51159V16.003H13.5333V12.5197C13.3535 10.8691 13.9172 9.22414 15.0717 8.03084C16.2261 6.83755 17.8516 6.21964 19.5072 6.3447C20.6955 6.36389 21.8809 6.46973 23.0538 6.66137V10.5548H21.0525C20.3635 10.4645 19.6708 10.6921 19.1696 11.1733C18.6683 11.6546 18.4127 12.3374 18.4748 13.0295V16.003H22.8623L22.1608 20.5805H18.4748V31.6448C26.7944 30.33 32.6284 22.7319 31.7503 14.3549C30.8722 5.97795 23.5895 -0.245246 15.1781 0.193733C6.76666 0.632711 0.171259 7.58019 0.169922 16.003Z"></path>
              </svg>
            </FacebookShareButton>
            <TwitterShareButton url={pathPost} title={data?.title}>
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${styles['icon-social']} ${styles['twitter-share-icon']}`}
              >
                <circle cx="19" cy="19" r="16"></circle>
                <path
                  d="M26.7619 13.3652C27.5762 12.8921 28.1854 12.1471 28.4759 11.2694C27.7108 11.7107 26.8737 12.0215 26.0008 12.1884C24.7905 10.9441 22.873 10.6413 21.3197 11.4492C19.7664 12.2571 18.9618 13.9756 19.3556 15.6446C16.2216 15.4916 13.3017 14.0528 11.3225 11.6861C10.2896 13.4176 10.8174 15.6311 12.5287 16.7445C11.9099 16.7252 11.3048 16.5623 10.7639 16.2696C10.7639 16.2855 10.7639 16.3014 10.7639 16.3173C10.7642 18.1209 12.0722 19.6746 13.8912 20.0321C13.3172 20.1838 12.7151 20.2062 12.1309 20.0974C12.6425 21.6399 14.1051 22.6966 15.7723 22.7281C14.3915 23.7814 12.6863 24.3526 10.931 24.3498C10.6199 24.3502 10.309 24.3328 10 24.2977C11.7825 25.4109 13.857 26.0018 15.9758 25.9997C18.9235 26.0194 21.7563 24.89 23.8406 22.8641C25.9249 20.8382 27.0867 18.0848 27.0662 15.2199C27.0662 15.0557 27.0623 14.8924 27.0544 14.73C27.8178 14.1938 28.4766 13.5295 29 12.7684C28.2888 13.0748 27.5344 13.276 26.7619 13.3652Z"
                  fill="white"
                ></path>
              </svg>
            </TwitterShareButton>
          </div>
        </div>
      </div>

      <div className={styles['post-content']}>
        <TableOfContent dataLoaded={dataLoaded} selectorContent={styles['content']} />
        <div
          className={`post-outside-content ${styles['content']}`}
          dangerouslySetInnerHTML={{ __html: data?.content }}
        ></div>
        <Space height="80px" />
        <div className={styles['author']}>
          <img className={styles['author__avatar']} src={data?.author?.avatar} />
          <div className={styles['author__infor']}>
            <h5>
              <NameToPath
                text={data?.author?.username}
                className={styles['author__username']}
                pathName={'author'}
                to={data?.author?.username}
              />
            </h5>
            <p className={styles['author__des']}>{data?.author?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
