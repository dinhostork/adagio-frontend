import tw from "tailwind-styled-components";
import { TopbarProps } from "./types";
import { Avatar } from "@/components/molecules/AvatarMenu";
import { CreateMenu } from "@/components/molecules/CreateMenu";
import { SolicitationsMenu } from "@/components/molecules/SolicitationsMenu";
import { MessagesMenu } from "@/components/molecules/MessagesMenu";
import { NotificationsMenu } from "@/components/molecules/NotificationsMenu";
import { mainMenuBlock } from "./styles";
import TopbarWrapper from "@/components/atoms/TopBarWrapper";



export const Topbar: React.FC<TopbarProps> = ({ children }) => {
  return (
    <TopbarWrapper>
      {children}
      <div className={mainMenuBlock}>
        <CreateMenu />
        <SolicitationsMenu />
        <MessagesMenu />
        <NotificationsMenu />
      </div>
      <Avatar />
    </TopbarWrapper>
  );
};
