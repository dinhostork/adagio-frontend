import { IconCounter } from "@/components/atoms/IconCounter";
import { MenuItem } from "@/components/atoms/MenuItem";
import { Item } from "@/components/atoms/MenuItem/styles";
import { useComponentsMenu } from "@/utils/componentsToggleMenu";
import { useCallback } from "react";
import { AiOutlineBell, AiOutlinePlus } from "react-icons/ai";
import { BiCalendarPlus, BiGroup, BiMessageSquareDots } from "react-icons/bi";
import { Menu } from "@/components/atoms/Menu";
import { MenuItemWrapper } from "@/components/atoms/MenuItemWrapper";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import { MenuHeader } from "@/components/atoms/MenuHeader";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { BsBroadcastPin } from "react-icons/bs";
import { GiGuitarHead } from "react-icons/gi";
import { CreateMenu } from "../CreateMenu";
import { SolicitationsMenu } from "../SolicitationsMenu";
import { MessagesMenu } from "../MessagesMenu";
import { NotificationsMenu } from "../NotificationsMenu";

export const TopbarMainMenu: React.FC = () => {
  
 

  return (
    <div className="flex flex-row w-80 h-12 items-center justify-between text-gray-dark relative gap-0">
      <CreateMenu />
      <SolicitationsMenu />
      <MessagesMenu />
      <NotificationsMenu />
    </div>
  );
};
