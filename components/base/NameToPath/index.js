import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NameToPath({ pathName, text, className, to = '', style = {} }) {
  const [path, setPath] = useState('');
  useEffect(() => {
    if (to === '') {
      setPath('/' + pathName + '/' + text?.toString().replaceAll(' ', '-').toLowerCase());
    } else {
      setPath('/' + pathName + '/' + to);
    }
  }, []);
  return (
    <Link href={path}>
      <a style={{ ...style }} className={className} title={text}>
        {text}
      </a>
    </Link>
  );
}
