import Carousel from './components/Carousel';
import { ContentsList } from './components/Contents';

function Charts() {
  return (
    <>
      <Carousel />
      <div className="flex-1 overflow-y-auto bg-gray-100">
        <ContentsList />
      </div>
    </>
  );
}

export default Charts;
