import { product_categories as categories } from '@/constants/constants';

export const getProducts = (category: string) =>
  categories.find((c) => c.slug === category)?.products;
