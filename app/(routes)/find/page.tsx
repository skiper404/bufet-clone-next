import { Title, Container, Subtitle, NewsBlock, VotesBlock, Divider, CafeInfo } from '@/components';
import { APP_NAME, cafes } from '@/constants/constants';
import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: `${APP_NAME} | Знайти Bufet`,
};

const Page: React.FC = () => {
  return (
    <div className="font-black">
      <div className="flex h-20 items-center bg-[#bad444]">
        <Title text="Знайти BUFET" className="text-3xl text-white" />
      </div>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1mKq1G_el2I8TTQ-UtLY4sg1Nw1Z-3CM&amp;ehbc=2E312F&amp;noprof=1"
        width="100%"
        height="550"
      ></iframe>
      <Container>
        <div className="flex flex-col gap-4 py-10 lg:flex-row">
          <div className="flex-2">
            <p className="p-2">
              BUFET – компанія, що динамічно розвивається. Протягом багатьох років мережа піцерій є
              візитівкою Харкова. Наші піцерії розташовані в найзручніших для Вас районах Харкова,
              аби Ви в будь-який час могли насолодитися своїми улюбленими стравами.
            </p>
            <Image
              src="/img/find/pic-blog.jpg"
              alt="bufet"
              width={1000}
              height={100}
              className="rounded-2xl"
            />
            <p className="p-2">
              Зручна транспортна розв’язка – пріоритет при виборі місця для наших піцерій.
            </p>
            <p className="p-2">
              Щороку ми займаємося упорядкуванням території поблизу піцерій BUFET, аби прогулюючись,
              Ви могли трохи відпочити й присісти на лавочку біля нашого закладу, а влітку
              насолодитися прохолодою в тіні дерев.
            </p>
            <p className="p-2">
              Ми – за активний спосіб життя й всіляко підтримуємо велосипедний рух і стараємося
              забезпечити комфорт, як для піших гостей, так і для гостей із власним транспортом.
              Тому обладнали наші заклади стійками для велосипедів. До більшості піцерій BUFET легко
              під’їхати й на автомобілі, наприклад, за горнятком запашної ранкової кави.
            </p>
            <Image
              src="/img/find/promo.jpg"
              alt="bufet"
              width={1000}
              height={100}
              className="rounded-2xl"
            />
          </div>
          <div className="flex-1">
            <Subtitle
              text="Адреси й час роботи, та номери для предзамовлення"
              className="m-4 text-lg text-orange-500"
            />
            <div className="flex flex-col gap-4">
              {cafes.map((cafe) => (
                <CafeInfo key={cafe.id} info={cafe} />
              ))}
            </div>
          </div>
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
