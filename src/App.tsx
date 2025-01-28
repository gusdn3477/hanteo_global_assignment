import { useState } from 'react';

const headerMenu = [
  {
    id: 1,
    title: '챠트',
    url: 'charts',
  },
  {
    id: 2,
    title: 'Whook',
    url: 'whook',
  },
  {
    id: 3,
    title: '이벤트',
    url: 'events',
  },
  {
    id: 4,
    title: '뉴스',
    url: 'news',
  },
  {
    id: 5,
    title: '스토어',
    url: 'store',
  },
  {
    id: 6,
    title: '충전소',
    url: 'charge',
  },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-full w-full flex-col">
      <header className="h-[54px] bg-red-200">
        <ul className="flex h-full">
          {headerMenu.map((menu) => (
            <li key={menu.id} className="flex items-center">
              {menu.title}
            </li>
          ))}
        </ul>
      </header>
      <div className="h-[200px]">Carousel</div>
      <div className="flex-1 overflow-y-auto bg-gray-200">콘텐츠 큐레이션</div>

      <footer className="h-[74px] bg-gray-300">푸터</footer>
    </div>
  );
}

export default App;
