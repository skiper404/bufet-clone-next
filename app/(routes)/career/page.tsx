import { Title, Container, NewsBlock, VotesBlock, Divider } from '@/components';
import { APP_NAME, benefits, facilities } from '@/constants/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: `${APP_NAME} | Кар'ера`,
};

const Page: React.FC = () => {
  return (
    <div className="font-black">
      <div className="flex h-20 items-center bg-[#bad444]">
        <Title text="Кар`ера" className="text-3xl text-white" />
      </div>
      <Container>
        <Image
          src="/img/career/bufet-carier.webp"
          alt="career"
          width={1000}
          height={100}
          className="w-full"
        />
        <div className="ml-auto w-66 text-right text-orange-500">
          ‹‹BUFET — це бiльше, нiж пiца. Це про команду, дружбу, пiдтримку та стабiльнiсть››
        </div>
        <p>
          Ми працюємо з 2002 року, головне для нас — наші співробітники. Ми цінуємо кожного і щодня
          доводимо це своїми діями.
        </p>
        <Title text="Чому саме BUFET?" />
        <p>Якщо у тебе немає досвіду — ми самі тебе навчимо!</p>
        <p>
          Кожен новачок отримує наставника, який допоможе освоїти всі завдання, надасть підтримку і
          навчить необхідним навичкам. Ми маємо розроблену програму стажування, яка дозволить тобі
          швидко адаптуватися та впевнено працювати.
        </p>
        <Title text="Чому саме BUFET?" />
        <ul className="m-4 flex flex-col gap-2">
          {benefits.map((item) => (
            <li key={item.id} className="flex items-center gap-2">
              <span className="size-4 rounded-full bg-orange-500"></span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <Title text="Комфортні умови праці" />
        <p>У нас завжди комфортно працювати, незалежно від обставин:</p>
        <ul className="m-4 flex flex-col gap-2">
          {facilities.map((item) => (
            <li key={item.id} className="flex items-center gap-2">
              <span className="size-4 rounded-full bg-orange-500"></span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <Title text="Чому обирають нас?" />
        <p>
          BUFET — це місце, де ти можеш розвиватися, будувати свою кар’єру незалежно від
          попереднього досвіду.
        </p>
        <p>BUFET — це стабільність, працюємо більше 20 років.</p>
        <p>
          BUFET — це сучасне обладнання та інноваційні рішення, а значить, можна працювати комфортно
          і з задоволенням.
        </p>
        <p>У нас ВСЕ ПО ЧЕСНОМУ — зарплата завжди вчасно без затримок.</p>
        <p>У нас є для тебе робота — ПРИЄДНУЙСЯ!</p>
        <p>Телефонуй або заповнюй анкету прямо зараз!</p>
        <div className="m-10 flex justify-center gap-4">
          <Link href="tel:+380501234567">
            <Image
              src="/img/career/call-button.webp"
              alt="call"
              width={1000}
              height={100}
              className="w-full"
            />
          </Link>

          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfLX6hp4V8ooLEnv45paBuVu2YlR-P-tRGTf11cKq07RV4niw/viewform?pli=1">
            <Image
              src="/img/career/carier-button.webp"
              alt="call"
              width={1000}
              height={100}
              className="w-full"
            />
          </Link>
        </div>
        <Divider />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <NewsBlock />
          <VotesBlock />
        </div>
      </Container>
    </div>
  );
};

export default Page;
