import React from 'react';

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={'mx-auto max-w-6xl p-4'}>{children}</div>;
};
