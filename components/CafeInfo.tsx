import type { Info } from '@/types/types';
import React from 'react';

interface Props {
  info: Info;
}

export const CafeInfo: React.FC<Props> = ({ info }) => (
  <div className="flex flex-col">
    <div>{}</div>
    <span className="w-fit rounded-lg bg-orange-500 px-2 text-white">
      {info.isOpen ? <span>Вiдчинено</span> : <span>Тимчасово зачинено</span>}
    </span>
    <span>{info.address}</span>
    {info.note && <span>{info.note}</span>}
    <span>Час роботи:</span>
    <span className="text-orange-500">Пн-сб : {info.workTime.monSat}</span>
    <span className="text-orange-500">Нд: {info.workTime.sun}</span>
    <span>Телефон: {info.phone}</span>
  </div>
);
