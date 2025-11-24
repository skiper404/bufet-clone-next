import { Title, Container } from '@/components';
import { APP_NAME } from '@/constants/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: `${APP_NAME} | Зворотнiй зв'язок`,
};

const Page: React.FC = () => {
  return (
    <div className="font-black">
      <div className="flex h-20 items-center bg-[#bad444]">
        <Title
          text="Вiтаемо Вас на сторiнцi зворотнього зв`язку!"
          className="text-3xl text-white"
        />
      </div>
      <Container>
        <Image
          src="/img/feedback/feedback.svg"
          width={100}
          height={100}
          alt="feedback"
          className="w-full"
        />
        <Title text="Вітаємо! На цій сторінці ви зможете отримати допомогу в будь-якому питанні." />
        <p className="p-2">
          Наші кращі фахівці дадуть відповідь в повному обсязі на Ваші питання і знайдуть вихід із
          ситуації, пов’язаної з нашою піцерією.
        </p>
        <p className="p-2">
          Ми готові детально розібрати кожне Ваше питання і якщо знадобиться передати його
          керівництву, а також вислухати побажання і пропозиції.
        </p>
        <p className="p-2"> Тут ви можете написати будь-які пропозиції і побожання.</p>
        <p className="p-2">
          Саме ваша думка допомагає нам ставати краще. Діліться вашими враженнями з нами, і разом ми
          знайдемо найкраще рішення з усіх питань, для нас це дійсно важливо!
        </p>
        <div className="mt-4 mb-20 flex">
          <Link href="tel:+380501234567" className="mx-auto">
            <Image src="/img/feedback/phone.png" alt="phone" width={200} height={100} />
          </Link>
        </div>
        <div className="my-2 h-5 border-b-8 border-dotted text-orange-500"></div>
      </Container>
    </div>
  );
};

export default Page;
