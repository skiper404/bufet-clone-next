import { product_categories as categories } from '@/constants/constants';

export const getProduct = (product_slug: string, category_slug: string) =>
  categories
    .find((c) => c.slug === category_slug)
    ?.products.find((product) => product.slug === product_slug);
