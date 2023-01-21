import Link from 'next/link';
import Image from 'next/image';

export default function LogoHeader() {
  return (
    <div>
      <Link href="/">
        <a>
          <Image src="/imgs/logo/logo.svg" width={190} height={43} />
        </a>
      </Link>
    </div>
  );
}
