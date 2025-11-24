import React from 'react';

interface Props {
  className?: string;
  text: string;
}

export const Title: React.FC<Props> = ({ text, className }) => {
  return (
    <h1 className={`mx-auto my-2 text-center text-2xl font-black text-orange-500 ${className}`}>
      {text}
    </h1>
  );
};
