import Image from "next/image";
import { NotificationBlockProps } from "./types";
import AvatarImg from "../Avatar";

export const NotificationBlock: React.FC<NotificationBlockProps> = ({
  title,
  text,
  picture,
  date,
}) => {
  return (
    <div className="flex flex-row items-center">
      <AvatarImg
        src={picture}
        style={{
          width: "32px",
          height: "32px",
        }}
      />
      <div className="flex flex-col ml-2">
        <strong className="font-bold text-gray-dark text-xs">{title}</strong>
        <span className="text-gray text-sm ">{text}</span>
        <span className="text-xs text-gray-dark">{date}</span>
      </div>
    </div>
  );
};
