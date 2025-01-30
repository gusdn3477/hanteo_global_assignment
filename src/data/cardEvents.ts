type KpopEvent = {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  link: string;
};

export const cardEvents: KpopEvent[] = [
  {
    id: 1,
    title: 'BTS World Tour "Beyond the Stage"',
    date: '2025-06-15 ~ 2025-07-30',
    imageUrl: '/image1.jpg',
    link: 'https://www.mnetplus.world/ko',
  },
  {
    id: 2,
    title: 'BLACKPINK "Pink Venom" 콘서트',
    date: '2025-05-20',
    imageUrl: '/image2.jpg',
    link: 'https://www.instagram.com/mnetplus_official/#',
  },
  {
    id: 3,
    title: 'NCT 127 "Neo City: The Link"',
    date: '2025-08-10',
    imageUrl: '/image3.jpg',
    link: 'https://x.com/mnetplus',
  },
  {
    id: 4,
    title: 'Stray Kids "Thunderous Night" 팬미팅',
    date: '2025-04-05',
    imageUrl: '/image4.jpg',
    link: 'https://mnetplus.zendesk.com/hc/ko/requests/new',
  },
  {
    id: 5,
    title: 'TWICE "Feel Special" 팬콘',
    date: '2025-09-02',
    imageUrl: '/image5.jpg',
    link: 'https://x.com/mnetplus',
  },
  {
    id: 6,
    title: 'SEVENTEEN "Diamond Edge" 투어',
    date: '2025-07-14',
    imageUrl: '/image6.jpg',
    link: 'https://mnet-plus.notion.site/Mnet-Plus-AD-c918dddf0bd74971af0e687e78992a4f',
  },
];
