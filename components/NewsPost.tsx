import Image from 'next/image';
import React from 'react';
import { Title } from '@/components';
import { NewsPostT } from '@/types/types';

export interface Props {
  post: NewsPostT;
}

export const NewsPost: React.FC<Props> = ({ post }) => (
  <div className="flex items-start gap-2 text-black">
    <span className="rounded-lg bg-orange-500 p-1 text-2xl text-white">{post.date}</span>
    <div>
      <Image
        src={post.img}
        alt={post.title}
        width={1000}
        height={200}
        className="w-full rounded-2xl"
      />
      <Title text={post.title} className="m-2 text-left" />
      <p className="text-sm">
        Ми знаємо, що іноді обставини складаються так що ви не можете прийти до нас. Тому ми
        співпрацюємо з bolt food. Для оформлення замовлення необхідно завантажити мобільний додаток
        та зробити в ньому замовлення. А ми все одно чекатимемо вас у гості.
      </p>
      <div className="flex gap-2 border-y border-gray-200 font-extrabold">
        Автор: <span>{post.author}</span>
        <span className="text-gray-200">|</span>
        Категорiя: <span className="text-orange-500">{post.category}</span>
        <span className="text-gray-200">|</span>
      </div>
    </div>
  </div>
);
