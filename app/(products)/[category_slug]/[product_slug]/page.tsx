import { Title, NewsBlock, VotesBlock, Divider, Container } from '@/components';
import { APP_NAME } from '@/constants/constants';
import { getProduct, getCategory } from '@/lib';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  params: { category_slug: string; product_slug: string };
}

export const metadata = {
  title: `${APP_NAME} | Продукт`,
};

export const ProductPage: React.FC<Props> = async ({ params }) => {
  const { category_slug, product_slug } = await params;

  const product = getProduct(product_slug, category_slug);
  const category = getCategory(category_slug);

  return (
    <Container>
      <div className="flex flex-col gap-2 font-black lg:flex-row">
        <div className="flex-2">
          <Image
            src={product?.product || '/img/no-image.png'}
            alt={product?.title || 'Image'}
            width={1920}
            height={1280}
            className="rounded-2xl border-gray-300 shadow-xl"
          />
        </div>
        <div className="flex-1">
          <Title text={product?.title || 'Loading...'} className="text-orange-500" />
          <p className="">{product?.description}</p>
          <ul className="m-4 flex flex-col">
            {product?.ingredients.map((ingredient, id) => (
              <li key={id}>
                ✔️
                {ingredient}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-2">
            <span className="rounded-lg bg-orange-500 px-1 text-white">{product?.price} грн</span>
            <span className="rounded-lg bg-gray-400 px-1 text-white">{product?.weight} г</span>
            <span className="rounded-lg bg-orange-500 px-1 text-white">
              {product?.ccal} Ккал / 100 г
            </span>
          </div>
          <div className="m-4 text-center">
            <Link
              href={`/${category_slug}`}
              className="inline-block rounded-lg border px-1 font-black text-gray-300 hover:bg-gray-400 hover:text-white"
            >
              {category}
            </Link>
          </div>
        </div>
      </div>
      <Divider />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <NewsBlock />
        <VotesBlock />
      </div>
    </Container>
  );
};

export default ProductPage;
