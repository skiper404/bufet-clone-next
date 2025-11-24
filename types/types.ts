export type WorkTime = {
  monSat: string;
  sun: string;
};

export type Info = {
  id: number;
  address: string;
  note?: string;
  workTime: WorkTime;
  phone: string | null;
  isOpen: boolean;
};

export interface INewsItem {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}

export type NewsPostT = {
  id: number;
  title: string;
  body: string;
  img: string;
  author: string;
  category: string;
  date: string;
};
