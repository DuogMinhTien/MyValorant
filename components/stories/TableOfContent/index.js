import { useState } from 'react';
import { useEffect } from 'react';
import { addClass } from '~/utils/HandleClass';

import styles from './styles.module.scss';

export default function TableOfContent({ dataLoaded = false, selectorContent = '' }) {
  const [htmlTable, setHtmlTable] = useState('');
  useEffect(() => {
    function setClassHeading(selector) {
      document.querySelectorAll(`.${selectorContent} ${selector}`).forEach((item) => {
        addClass(item, 'title-heading');
      });
    }
    if (dataLoaded) {
      setClassHeading('h1');
      setClassHeading('h2');
      setClassHeading('h3');
      setClassHeading('h4');
      setClassHeading('h5');
      setClassHeading('h6');
      let listHeading = document.querySelectorAll('.title-heading');
      if (listHeading.length !== 0) {
        let k = '<ol>';
        listHeading.forEach((item, index) => {
          item.id = 'heading-content-index-' + index;
          k +=
            '<li class="' +
            styles['item-title-' + item.localName] +
            '"><a href="#heading-content-index-' +
            index +
            '">' +
            item.innerText +
            '</a></li>';
        });
        k += '</ol>';
        setHtmlTable(k);
      }
    }
  });
  return (
    <div className={styles['table-of-contents']}>
      <h2 className={styles['title-table']}>Mục lục bài viết</h2>
      <div dangerouslySetInnerHTML={{ __html: htmlTable }}></div>
      {/* <ol className={styles['content-table']}>
        <li className={styles['item-table']}>Không có mục lục cho bài viết này</li>
        <ol className={styles['content-table']}>
          <li className={styles['item-table']}>Không có mục lục cho bài viết này</li>
          <ol className={styles['content-table']}>
            <li className={styles['item-table']}>Không có mục lục cho bài viết này</li>
          </ol>
        </ol>
      </ol> */}
    </div>
  );
}
