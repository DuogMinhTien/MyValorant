const { useState, useEffect } = require('react');
import { checkPC } from '~/utils/base';

export default function useResize() {
  const [device, setDevice] = useState('mobile');
  function resizeDevice() {
    if (checkPC()) setDevice('pc');
    else setDevice('mobile');
  }
  useEffect(() => {
    resizeDevice();
    window.addEventListener('resize', resizeDevice);
    return () => {
      window.removeEventListener('resize', resizeDevice);
    };
  }, []);
  return device;
}
