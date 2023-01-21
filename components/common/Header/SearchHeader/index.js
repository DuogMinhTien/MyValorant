import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useResize from '~/hooks/useResize';
import { checkPC } from '~/utils/base';
import Input from '../../../base/Input';
import PopupModal from '../../../base/PopupModal';
import PopupSearch from './PopupSearch';
import styles from './styles.module.scss';
export default function SearchHeader() {
  const searchIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.09436 14.3199C8.44904 15.3729 10.1513 16 12 16C16.4183 16 20 12.4183 20 8C20 3.58172 16.4183 0 12 0C7.58172 0 4 3.58172 4 8C4 9.84871 4.62708 11.551 5.68014 12.9056L0.292892 18.2929C-0.0976315 18.6834 -0.0976315 19.3166 0.292892 19.7071C0.683418 20.0976 1.31658 20.0976 1.70711 19.7071L7.09436 14.3199ZM6 8C6 11.3137 8.68629 14 12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8Z"
        fill="#6B6B6B"
      ></path>
    </svg>
  );
  const [isOpen, setIsOpen] = useState(false);
  const [valueInput, setValueInput] = useState('');
  const device = useResize();
  const router = useRouter();
  function Search() {
    if (valueInput.trim() === '') {
      toast.error('Bạn chưa nhập gì để tìm kiếm cả');
    } else {
      router.push('/?s=' + valueInput);
      setValueInput('');
    }
  }
  return (
    <>
      <div
        className={styles['search-header-pc']}
        style={{ marginLeft: 'auto', marginRight: '20px', maxWidth: '250px', flex: '1' }}
      >
        <Input
          type="text"
          placeholder={'Search'}
          icon={searchIcon}
          border={true}
          backgroundColor={'transparent'}
          styleIcon={{ top: '3px', cursor: 'pointer' }}
          iconOnClick={() => {
            Search();
          }}
          onKeyPressEnter={() => {
            Search();
          }}
          value={valueInput}
          onChange={(e) => {
            setValueInput(e.target.value);
          }}
        />
      </div>
      <PopupModal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        centerChild={false}
        alignItems={'flex-start'}
      >
        <PopupSearch
          iconSearch={searchIcon}
          value={valueInput}
          onChange={(e) => {
            setValueInput(e);
          }}
          searchFunction={() => {
            Search();
          }}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      </PopupModal>
      <div className={styles['search-header']}>
        <span
          onClick={(e) => {
            setIsOpen(true);
          }}
          style={{ marginTop: '-4px', height: 'max-content', display: 'block', cursor: 'pointer' }}
        >
          {searchIcon}
        </span>
      </div>
    </>
  );
}
