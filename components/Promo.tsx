'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { promo } from '@/constants/constants';

export const Promo: React.FC = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true}
      autoplay={{ delay: 5000 }}
      pagination={{
        clickable: true,
      }}
      className="w-full"
    >
      {promo.map((story) => (
        <SwiperSlide key={story.id}>
          <Link href="/news">
            <Image src={story.img} alt={story.name} width={1920} height={100} className="w-full" />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
