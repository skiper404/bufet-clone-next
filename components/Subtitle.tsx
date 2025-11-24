import React from 'react';

interface Props {
  className?: string;
  text: string;
}

export const Subtitle: React.FC<Props> = ({ className, text }) => {
  return <h2 className={`my-4 text-center font-black ${className}`}>{text}</h2>;
};
