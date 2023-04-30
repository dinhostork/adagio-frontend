import Link from "next/link";

export interface EventBlockProps {
  date: string;
  time: string;
  title: string;
  place: string;
  link: string;
}

export const EventBlock: React.FC<EventBlockProps> = ({
  date,
  time,
  title,
  place,
  link
}) => {
  return (
    <Link href={link} className="flex flex-col items-start justify-start w-full h-auto bg-carbone-secondary rounded-lg p-4">
      <div className="flex flex-row items-center justify-start w-full">
        <h1 className="text-gray-light text-xs">{date}</h1>
        <h1 className="text-gray-light text-xs  ml-2">{time}</h1>
      </div>
      <h1 className="text-white text-sm font-bold mt-2">{title}</h1>
      <h1 className="text-white text-xs mt-2">{place}</h1>
    </Link>
  );
};
