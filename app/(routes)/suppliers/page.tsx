import { Title, NewsBlock, VotesBlock, Divider, Container } from '@/components';
import { APP_NAME, requreties, suppliers_products, suppliers_req } from '@/constants/constants';
import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: `${APP_NAME} | Партнерам`,
};

const Page: React.FC = () => {
  return (
    <div className="font-black">
      <div className="flex h-20 items-center bg-[#bad444]">
        <Title text="Партнерам" className="text-3xl text-white" />
      </div>
      <Container>
        <div>
          <Image
            src="/img/suppliers/sup.jpg"
            width={1920}
            height={100}
            alt="about"
            className="w-full border"
          />
          <p>
            Наша головна мета – взаємовигідне партнерство побудоване на довгостроковій основі.
            Взаємовідносини з постачальниками базуються на чіткому дотриманні діючого законодавства.
            Пріоритетним напрямком діяльності мережі піцерій BUFET є продовження плідної співпраці з
            існуючими постачальниками та залучення нових українських партнерів. Відповідальність за
            щоденне обслуговування наших відвідувачів робить якість продуктів нашим основним
            пріоритетом. Основу нашого меню складає все те, що використовується щодня вдома: овочі,
            куряче м’ясо, яловичина, картопля, яйця й молочні вироби.
          </p>
          <Title text="Принципи взаємодії з партнерами:" />
          <ul className="m-4 flex flex-col gap-2">
            {requreties.map((item) => (
              <li key={item.id} className="flex items-center gap-2">
                <span className="size-4 shrink-0 rounded-full bg-orange-500"></span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <Title text="Співробітництво з відділом закупівель." />
          <p>
            Фахівці компанії постійно працюють над асортиментом продукції, що закуповується й
            коригують його відповідно до запитів наших клієнтів. Ми відкриті для співробітництва й
            готові розглянути комерційні пропозиції від нових постачальників товарів і послуг:
          </p>
          <ul className="m-4 flex flex-col gap-2">
            {suppliers_products.map((item) => (
              <li key={item.id} className="flex items-center gap-2">
                <span className="size-4 shrink-0 rounded-full bg-orange-500"></span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <Title text="За інших рівних умов перевага надається:" />
          <ul className="m-4 flex flex-col gap-2">
            {suppliers_req.map((item) => (
              <li key={item.id} className="flex items-center gap-2">
                <span className="size-4 shrink-0 rounded-full bg-orange-500"></span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <p>
            Заздалегідь дякуємо Вам за бажання співпрацювати з мережею BUFET. Сподіваємося, наша
            співпраця буде плідною, довготривалою й взаємовигідною.
          </p>
          <Title text="Звертайтеся до відділу постачання" />
          <p>
            Менеджер з виготовлення продукції:
            <br />
            <b className="text-orange-500">+38 095 482 04 72</b>
          </p>
          <p>
            Менеджер торгівельних підприємств:
            <br />
            <b className="text-orange-500">+38 066 494 04 52</b>
          </p>
          <p>
            Email: <b className="text-orange-500">manager@bufet.ua</b>
          </p>
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
