import { news } from '@/constants/constants';
import React from 'react';
import { NewsItem, Title } from '@/components';

export const NewsBlock: React.FC = () => {
  return (
    <div className="my-10 flex flex-col font-black">
      <Title text="Новини" />
      <div className="flex flex-col gap-8">
        {news.slice(0, 3).map((post) => (
          <NewsItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
