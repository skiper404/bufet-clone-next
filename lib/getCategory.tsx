import { product_categories as categories } from '@/constants/constants';

export const getCategory = (category_slug: string) =>
  categories.find((category) => category.slug === category_slug)?.title || '';
