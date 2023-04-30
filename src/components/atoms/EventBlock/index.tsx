import Link from "next/link";
import {
  BlockWrapper,
  mainTitle,
  subTitle,
  titles,
  titlesBlock,
} from "./styles";
import { EventBlockProps } from "./types";

export const EventBlock: React.FC<EventBlockProps> = ({
  date,
  time,
  title,
  place,
  link,
}) => {
  return (
    <Link href={link} className={BlockWrapper}>
      <div className={titlesBlock}>
        <h1 className={titles}>{date}</h1>
        <h1 className={titles + "ml-2"}>{time}</h1>
      </div>
      <h1 className={mainTitle}>{title}</h1>
      <h1 className={subTitle}>{place}</h1>
    </Link>
  );
};
