import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { headerMenu } from '../data/headerMenu';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col">
      <header className="h-[54px] bg-red-200 p-2">
        <nav className="flex h-full justify-center">
          <ul className="flex justify-center gap-4">
            {headerMenu.map((menu) => (
              <li
                key={menu.id}
                className={`flex items-center font-extrabold ${location.pathname === menu.url ? 'text-white' : ''}`}
                onClick={() => navigate(`${menu.url}`)}
              >
                {menu.title}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Outlet />

      <footer className="flex h-[48px] gap-8 bg-[#f8f9fa] px-4 py-4">
        <span className="text-neutral-secondary text-xs">© CJ ENM. All Rights Reserved.</span>
      </footer>
    </div>
  );
}
