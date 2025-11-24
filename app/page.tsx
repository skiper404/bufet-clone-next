import { Promo, Container, Title, Subtitle, InfoBlock, NewsBlock, VotesBlock } from '@/components';

export const metadata = {
  title: 'BUFET | Главная',
};

export default function Home() {
  return (
    <div className="font-bold">
      <Promo />
      <Title text="Ласкаво просимо!" className="mt-12 mb-4 uppercase" />
      <Subtitle text="Мережа кафе швидкого харчування BUFET" className="mt-4" />
      <Container>
        <InfoBlock />
      </Container>
      <div className="h-60 w-full bg-[#bad444] p-20">
        <Title text="Популярне в нашому меню" />
        <Subtitle text="Наші відвідувачі рекомендують" className="mt-4" />
      </div>
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <NewsBlock />
          <VotesBlock />
        </div>
      </Container>
    </div>
  );
}
