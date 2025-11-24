import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MediaLinks, Container } from '@/components';

export const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <Link href="/">
            <Image src="/img/bufet_logo.svg" alt="logo" width={200} height={200} />
          </Link>
          <MediaLinks />
        </div>
      </Container>
    </header>
  );
};
