import styled from "styled-components";
import tw from "tailwind-styled-components";
import { TopbarProps } from "./types";
import { Avatar } from "@/components/molecules/AvatarMenu";
import { TopbarMainMenu } from "@/components/molecules/TopbarMainMenu";

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
  return <TopbarComponent>
    {children}
    <TopbarMainMenu />
    <Avatar />
  </TopbarComponent>;
};
