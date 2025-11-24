import React from 'react';
import { Container, MediaLinks } from '@/components';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-500 p-2 font-black">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <div>
            <div className="text-sm">© всі права збережені</div>
            <div className="text-2xl">Bufet 2025</div>
          </div>
          <MediaLinks />
        </div>
      </Container>
    </footer>
  );
};
