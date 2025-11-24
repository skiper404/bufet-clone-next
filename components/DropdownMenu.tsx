import { product_categories as categories } from '@/constants/constants';
import Link from 'next/link';
import React from 'react';

export const DropdownMenu: React.FC = () => {
  return (
    <div className="w-40 bg-orange-500 text-xl font-extrabold">
      <ul className="flex flex-col">
        {categories.map((category) => (
          <li key={category.id} className="hover:bg-orange-700 hover:text-[#bad444]">
            <Link href={category.href} className="inline-block w-full p-2">
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
