import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const pages = ['/charts', '/whook', '/events', '/news', '/store', '/charge'];

const SwipeNavigator = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const touchStartX = useRef(0); // 최신 터치 시작 좌표 유지
  const touchEndX = useRef(0); // 최신 터치 종료 좌표 유지

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.target instanceof HTMLElement && e.target.closest('.slick-slider')) {
        return;
      }
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.target instanceof HTMLElement && e.target.closest('.slick-slider')) {
        return;
      }
      touchEndX.current = e.changedTouches[0].clientX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const deltaX = touchStartX.current - touchEndX.current;
      const currentIndex = pages.indexOf(location.pathname);

      if (deltaX > 50) {
        // 👉 오른쪽 스와이프 (다음 페이지)
        const nextIndex = (currentIndex + 1) % pages.length;
        navigate(pages[nextIndex]);
      } else if (deltaX < -50) {
        // 👈 왼쪽 스와이프 (이전 페이지)
        const prevIndex = (currentIndex - 1 + pages.length) % pages.length;
        navigate(pages[prevIndex]);
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [navigate, location.pathname]);

  return <>{children}</>;
};

export default SwipeNavigator;
