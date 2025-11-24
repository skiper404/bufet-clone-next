import { Title, NewsBlock, NewsPost, Container, Subtitle } from '@/components';
import { APP_NAME, product_categories as categories, news } from '@/constants/constants';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: `${APP_NAME} | Новини`,
};

const Page: React.FC = () => {
  return (
    <div className="font-black">
      <div className="flex h-20 items-center bg-[#bad444]">
        <Title text="Новини" className="text-3xl text-white" />
      </div>

      <Container>
        <div className="my-10 flex flex-col gap-4 lg:flex-row">
          <div className="my-2 flex flex-2 flex-col gap-8">
            {news.map((post) => (
              <NewsPost key={post.id} post={post} />
            ))}
          </div>
          <div className="flex-1">
            <Subtitle text="Меню" />
            <ul className="flex flex-col items-center lg:items-start">
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="leading-5 font-extrabold text-orange-500 capitalize transition hover:text-[#9dba23]"
                >
                  <Link href={category.href}>{category.title}</Link>
                </li>
              ))}
            </ul>
            <NewsBlock />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
