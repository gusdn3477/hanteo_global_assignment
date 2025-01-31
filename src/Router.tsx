import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import SwipeNavigator from './components/SwipeNavigator';
import Charts from './pages/Charts';

export default function Router() {
  return (
    <BrowserRouter>
      <SwipeNavigator>
        <Routes>
          <Route path="/" element={<Navigate to="/charts" />} />
          <Route element={<Layout />}>
            <Route path="/charts" element={<Charts />} />
            <Route path="/whook" element={<div className="flex-1">whook 페이지</div>} />
            <Route path="/events" element={<div className="flex-1">events 페이지</div>} />
            <Route path="/news" element={<div className="flex-1">news 페이지</div>} />
            <Route path="/store" element={<div className="flex-1">store 페이지</div>} />
            <Route path="/charge" element={<div className="flex-1">charge 페이지</div>} />
          </Route>
        </Routes>
      </SwipeNavigator>
    </BrowserRouter>
  );
}
