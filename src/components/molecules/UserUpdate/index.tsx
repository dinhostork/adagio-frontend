import { NotificationBlock } from "@/components/atoms/NotificationBlock";
import { UserUpdateProps } from "./types";
import Link from "next/link";

export const UserUpdate: React.FC<UserUpdateProps> = ({
  picture,
  userName,
  text,
  date = undefined,
  link
}) => {
  return (
    <Link href={link} className="bg-carbone-secondary w-full flex p-4 rounded-lg cursor-pointer">
      <NotificationBlock
        picture={picture}
        title={userName}
        text={text}
        date={date}
      />
    </Link>
  );
};
