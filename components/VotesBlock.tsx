import React from 'react';
import { Title } from '@/components';

export const VotesBlock: React.FC = () => {
  return (
    <div className="flex flex-col text-center font-black">
      <Title text="Голосування" className="m-8" />
      <h3 className="rounded-full bg-orange-500 text-center leading-10 text-white">
        Нам важлива Ваша думка!
      </h3>
      <div className="mt-4 text-xl font-bold text-orange-500">
        Що для Вас важливо в кавових напоях?
      </div>
      <div className="flex flex-col gap-2 text-left text-sm">
        <div>Насичений смак кави - ( 62572 голосів )</div>
        <div className="h-3 w-1/3 bg-gray-600"></div>
        <div>Заряд бадьорості - ( 88499 голосів )</div>
        <div className="h-3 w-1/2 bg-gray-600"></div>
        <div>Лагідний смак кавового напою - ( 13974 голосів )</div>
        <div className="h-3 w-1/5 bg-gray-600"></div>
      </div>
    </div>
  );
};
