import { links } from '@/constants/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const MediaLinks: React.FC = () => {
  return (
    <div className="flex items-center gap-6 font-black">
      <Link
        href="https://bufet-stage.ffsua.com/storelink"
        className="flex h-8 items-center gap-2 rounded-2xl bg-[#bad444] px-2 uppercase"
      >
        передзамовлення
        <span className="inline-flex size-5 items-center justify-center rounded-full bg-orange-500 p-1">
          ?
        </span>
      </Link>
      <div className="flex gap-2">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            target="_blank"
            className="rounded-lg bg-white p-0.5"
          >
            <Image src={link.img} alt={link.name} width={26} height={26} />
          </Link>
        ))}
      </div>
    </div>
  );
};
