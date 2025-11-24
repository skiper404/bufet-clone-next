'use client';

import Link from 'next/link';
import React from 'react';
import { Container } from '@/components';
import { nav } from '@/constants/constants';
import { DropdownMenu } from './DropdownMenu';
import { useMainStore } from '@/store/store';
import { useRouter } from 'next/navigation';

export const Nav: React.FC = () => {
  const router = useRouter();
  const { currentPageId, setCurrentPageId } = useMainStore();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = Number(event.target.value);
    setCurrentPageId(selectedId);

    const selectedNav = nav.find((item) => item.id === selectedId);
    if (selectedNav) {
      router.push(selectedNav.href);
    }
  };

  return (
    <nav className="bg-orange-500 font-black">
      <Container>
        <div className="hidden h-10 justify-between gap-4 lg:flex">
          {nav.map((item) => (
            <div key={item.id} className="group relative flex items-center">
              <Link
                href={item.href}
                className={`text-md relative uppercase transition-all hover:text-[#bad422] ${currentPageId === item.id ? 'text-[#bad422]' : 'text-white'}`}
                onClick={() => setCurrentPageId(item.id)}
              >
                {item.name}
              </Link>
              {item.hasDropdown && (
                <div className="absolute top-full -left-4 z-10 hidden group-hover:block hover:block">
                  <DropdownMenu />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center lg:hidden">
          <select className="uppercase" value={currentPageId} onChange={handleSelectChange}>
            {nav.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </Container>
    </nav>
  );
};
