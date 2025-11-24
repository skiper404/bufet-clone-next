import {
  Container,
  Title,
  Promo,
  Subtitle,
  NewsBlock,
  VotesBlock,
  ProductItem,
  Divider,
} from '@/components';
import { APP_NAME, product_categories as categories } from '@/constants/constants';
import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: `${APP_NAME} | Меню`,
};

const Page: React.FC = () => {
  return (
    <>
      <Promo />
      <Container>
        <Title className="mt-12 mb-8 text-orange-500" text="Додаток для замовлення онлайн" />
        <Image src="/img/knopa.svg" alt="1" width={200} height={100} className="mx-auto" />
        <p className="m-8 text-center text-xl font-black text-orange-500"></p>
        <Subtitle
          text="Звернiть увагу! Склад страв може змінюватися, уточнюйте склад у піцерії!"
          className="mt-12 mb-8 text-orange-500"
        />

        {categories.map((category) => (
          <div key={category.id}>
            <Title text={category.title} className="mt-4" />
            <Subtitle text={category.description} />
            <div className="my-10 grid grid-cols-1 gap-4 lg:grid-cols-4">
              {category.products.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  category={category.title}
                  categorySlug={category.slug}
                />
              ))}
            </div>
            <Divider />
          </div>
        ))}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <NewsBlock />
          <VotesBlock />
        </div>
      </Container>
    </>
  );
};

export default Page;
