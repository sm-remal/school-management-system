import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
      <Link href={"/"}>
        <Image
          src="/assets/SMS-logo.png"
          height={40}
          width={40}
          alt="this is logo"
        />
      </Link>
    );
};

export default Logo;