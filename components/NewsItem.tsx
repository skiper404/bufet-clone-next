import React from 'react';
import { NewsPostT } from '@/types/types';

interface Props {
  post: NewsPostT;
}

export const NewsItem: React.FC<React.PropsWithChildren<Props>> = ({ post }) => {
  return (
    <div key={post.id} className="flex items-start gap-4">
      <span className="w-fit rounded-lg bg-orange-500 p-1 text-2xl text-white">{post.date}</span>
      <div>
        <h2 className="text-left text-orange-500">{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};
