import { contentsData } from '../data/contentsData';

interface ContentsItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const ContentsItem = ({ title, description, imageUrl }: ContentsItemProps) => {
  return (
    <div className="flex items-center justify-between p-4">
      <img src={imageUrl} width={45} height={45} about={description} />
      <section>
        <strong>{title}</strong>
        <p>{description}</p>
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
