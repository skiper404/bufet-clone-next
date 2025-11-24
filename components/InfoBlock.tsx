import { info } from '@/constants/constants';
import React from 'react';

export const InfoBlock: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      {info.map((info) => {
        const Icon = info.icon;
        return (
          <div
            key={info.id}
            className="my-2 w-full rounded-2xl border border-orange-100 bg-orange-50 p-8 lg:w-1/3"
          >
            <div className="flex items-center gap-2">
              <Icon className="size-10 shrink-0 text-orange-500" />
              <div className="flex h-20 flex-1 items-center text-3xl font-extrabold text-orange-500">
                {info.title}
              </div>
            </div>
            <div className="mt-4 font-bold">{info.description}</div>
          </div>
        );
      })}
    </div>
  );
};
