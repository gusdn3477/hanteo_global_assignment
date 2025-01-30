import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import spinner from '../assets/spinner.svg';
import { contentsData } from '../data/contentsData';

interface ContentsItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

type ContentType = typeof contentsData;

export const ContentsItem = ({ title, description, imageUrl }: ContentsItemProps) => {
  return (
    <div className="flex w-full items-center justify-between p-4">
      <img src={imageUrl} alt={description} className="h-[40px] w-[55px]" />
      <section className="ml-2 flex-1 flex-col truncate">
        <strong className="truncate">{title}</strong>
        <p className="truncate">{description}</p>
      </section>
    </div>
  );
};

export const ContentsList = () => {
  const [page, setPage] = useState(0);
  const [contents, setContets] = useState<ContentType>([]);
  const countPerPage = 6;
  const hasNext = contentsData.length >= page * countPerPage;

  const { ref, inView } = useInView({ threshold: 1 });

  const loadMoreItems = () => {
    setTimeout(() => {
      setContets([
        ...contents,
        ...contentsData.slice(page * countPerPage, page * countPerPage + countPerPage),
      ]);
      setPage((page) => page + 1);
    }, 1000);
  };

  useEffect(() => {
    if (inView) {
      loadMoreItems();
    }
  }, [inView]);

  return (
    <>
      {contents.map((content) => (
        <ContentsItem
          key={content.id}
          title={content.title}
          description={content.description}
          imageUrl={content.imageUrl}
        />
      ))}
      {hasNext && (
        <div ref={ref} className="flex items-center justify-center">
          <img src={spinner} alt="spinner" className="h-[30px] w-[30px]" />
        </div>
      )}
    </>
  );
};
