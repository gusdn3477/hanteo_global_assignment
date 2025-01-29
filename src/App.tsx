import Carousel from './components/Carousel';
import { headerMenu } from './data/headerMenu';

function App() {
  return (
    <div className="flex h-full w-full flex-col">
      <header className="h-[54px] bg-red-200 p-2">
        <ul className="flex h-full justify-center gap-4">
          {headerMenu.map((menu) => (
            <li key={menu.id} className="flex items-center font-extrabold">
              {menu.title}
            </li>
          ))}
        </ul>
      </header>
      <div className="h-[200px]">
        <Carousel />
      </div>
      <div className="flex-1 overflow-y-auto bg-gray-200">콘텐츠 큐레이션</div>

      <footer className="flex gap-8 bg-[#f8f9fa] px-4 py-4">
        <span className="text-neutral-secondary text-xs">© CJ ENM. All Rights Reserved.</span>
      </footer>
    </div>
  );
}

export default App;
