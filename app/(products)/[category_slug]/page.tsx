import { Divider, NewsBlock, ProductItem, VotesBlock, Container } from '@/components';
import { APP_NAME } from '@/constants/constants';
import { getProducts, getCategory } from '@/lib';
import React from 'react';

interface Props {
  params: { category_slug: string };
}

export const metadata = {
  title: `${APP_NAME} | Категорii`,
};

export const CategoryPage: React.FC<Props> = async ({ params }) => {
  const { category_slug } = await params;

  const products = getProducts(category_slug);
  const category = getCategory(category_slug);

  return (
    <Container>
      <div className="my-10 grid grid-cols-1 gap-4 lg:grid-cols-4">
        {products?.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            category={category}
            categorySlug={category_slug}
          />
        ))}
      </div>
      <Divider />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <NewsBlock />
        <VotesBlock />
      </div>
    </Container>
  );
};

export default CategoryPage;
