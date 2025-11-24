import Image from 'next/image';
import React from 'react';
import { Subtitle } from '@/components';
import Link from 'next/link';

export type Product = {
  id: number;
  title: string;
  slug: string;
  description: string;
  ingredients: string[];
  weight: number;
  ccal: number;
  price: number;
  preview: string;
  product: string;
};

interface Props {
  product: Product;
  category: string;
  categorySlug: string;
}

export const ProductItem: React.FC<Props> = ({ product, category, categorySlug }) => {
  return (
    <div key={product?.id} className="flex flex-col items-center rounded-2xl font-black">
      <Link href={`/${categorySlug}/${product.slug}`}>
        <Image
          src={product?.preview || '/img/no-image.png'}
          alt={product?.title}
          width={400}
          height={100}
          className="w-full rounded-2xl border-gray-300 shadow-xl transition hover:-translate-y-2 hover:opacity-50"
        />
      </Link>
      <Subtitle text={product.title} className="leading-6 text-orange-500" />
      <div className="mt-2 flex w-full flex-col items-center gap-2">
        <div className="flex gap-4">
          <span className="flex items-center rounded-lg bg-orange-500 px-1 text-white">
            {product?.price} грн
          </span>
          <Link
            href={`/${categorySlug}/${product.slug}`}
            className="rounded-lg border bg-[#bad444] px-1 text-white transition hover:bg-white hover:text-[#bad444]"
          >
            Детальнiше
          </Link>
        </div>
        <Link
          href={`${categorySlug}`}
          className="rounded-lg border px-1 text-gray-300 transition hover:bg-gray-300 hover:text-white"
        >
          {category}
        </Link>
      </div>
    </div>
  );
};
