import { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '~/components/base/Button';
import Input from '~/components/base/Input';
import styles from './styles.module.scss';
export default function ChangeAcc({ setInforAcc = () => {}, onClose = () => {}, setStateLoading = () => {} }) {
  const [username, setUsername] = useState('');
  const [tagline, setTagline] = useState('');
  function submit() {
    if (username === '') {
      toast.error('Vui lòng điền username');
    } else if (tagline === '') {
      toast.error('Vui lòng điền tagline');
    } else {
      setInforAcc((prev) => {
        let newInfor = { ...prev, username: username, tagline: tagline };
        return newInfor;
      });
      setUsername('');
      setTagline('');
      onClose();
      setStateLoading(true);
    }
  }
  return (
    <div className={styles['change-acc']}>
      <h3 className={styles['title']}>Đổi tài khoản</h3>
      <Input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        id="username"
        name="username"
        border
        label="Username"
        placeholder="BáoQuáTiếnÊi"
        required
        onKeyPressEnter={submit}
      />
      <Input
        value={tagline}
        onChange={(e) => {
          setTagline(e.target.value);
        }}
        id="tagline"
        name="tagline"
        border
        label="Tagline"
        placeholder="7290"
        required
        onKeyPressEnter={submit}
      />
      <Button
        style={{
          width: '100%',
        }}
        backgroundColor="#27272f"
        onClick={() => {
          submit();
        }}
      >
        XÁC NHẬN
      </Button>
    </div>
  );
}
