import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Charts from './Charts';
import Layout from './components/Layout';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/charts" />} />
        <Route element={<Layout />}>
          <Route path="/charts" element={<Charts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
