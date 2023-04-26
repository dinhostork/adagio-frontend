import tw from "tailwind-styled-components";
import { TopbarProps } from "./types";
import { Avatar } from "@/components/molecules/AvatarMenu";
import { CreateMenu } from "@/components/molecules/CreateMenu";
import { SolicitationsMenu } from "@/components/molecules/SolicitationsMenu";
import { MessagesMenu } from "@/components/molecules/MessagesMenu";
import { NotificationsMenu } from "@/components/molecules/NotificationsMenu";
import { mainMenuBlock } from "./styles";

export const TopbarComponent = tw.header`
    flex
    justify-between
    items-center
    h-24
    w-full
    bg-carbone
    rounded-lg
    px-8
    py-4
    text-white
`;

export const Topbar: React.FC<TopbarProps> = ({ children }) => {
  return (
    <TopbarComponent>
      {children}
      <div className={mainMenuBlock}>
        <CreateMenu />
        <SolicitationsMenu />
        <MessagesMenu />
        <NotificationsMenu />
      </div>
      <Avatar />
    </TopbarComponent>
  );
};
