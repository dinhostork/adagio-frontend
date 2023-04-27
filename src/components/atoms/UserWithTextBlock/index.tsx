import { UserWithTextBlockProps } from "./types";
import Image from "next/image";

export const UserWithTextBlock: React.FC<UserWithTextBlockProps> = ({
  children,
  userName,
  userProfPic,
}) => {
  return (
    <div className="flex flex-row h-12 flex-grow relative">
      <img
        src="https://avatars.githubusercontent.com/u/5059050"
        alt="Foto de perfil do usuário"
        className="rounded-full"
      />

      <div className="flex flex-col ml-4 justify-center">
        <span className="text-white text-sm font-bold">{userName}</span>
        <span className="text-xs text-gray-dark">{children}</span>
      </div>
    </div>
  );
};
