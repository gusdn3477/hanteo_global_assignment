import { contentsData } from '../data/contentsData';

interface ContentsItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

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
  return (
    <>
      {contentsData.map((content) => (
        <ContentsItem
          key={content.id}
          title={content.title}
          description={content.description}
          imageUrl={content.imageUrl}
        />
      ))}
    </>
  );
};
