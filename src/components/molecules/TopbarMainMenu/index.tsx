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

export const TopbarMainMenu: React.FC = () => {
  
  const {
    isOpen: isOpenMenuNotificacoes,
    toggle: toggleMenuNotificacoes,
    menuRef: menuRefNotificacoes,
  } = useComponentsMenu();



  const handleNotificationsClick = useCallback(() => {
    toggleMenuNotificacoes();
  }, [toggleMenuNotificacoes]);

  return (
    <div className="flex flex-row w-80 h-12 items-center justify-between text-gray-dark relative gap-0">
      <CreateMenu />
      <SolicitationsMenu />
      <MessagesMenu />

      <MenuItem href="#">
        {!isOpenMenuNotificacoes && <IconCounter count={4} />}
        <AiOutlineBell
          size={24}
          className={isOpenMenuNotificacoes ? "z-20" : "z-10"}
          onClick={handleNotificationsClick}
        />
        {isOpenMenuNotificacoes && (
          <MenuWrapper
            ref={menuRefNotificacoes}
            style={{
              top: -10,
              left: -150,
              zIndex: 10,
            }}
          >
            <Menu width="w-48" className="flex flex-col relative">
              <MenuHeader title="Notificações" />
              <MenuItemWrapper>
                <MenuItem href="#">
                  <MdOutlineLibraryMusic size={24} />
                  <span className="ml-4">Banda</span>
                </MenuItem>
                <MenuItem href="#">
                  <BiCalendarPlus size={24} />
                  <span className="ml-4">Evento</span>
                </MenuItem>
                <MenuItem href="#">
                  <BsBroadcastPin size={24} />
                  <span className="ml-4">Live</span>
                </MenuItem>
                <MenuItem href="#">
                  <GiGuitarHead size={24} />
                  <span className="ml-4">Habilidade</span>
                </MenuItem>
              </MenuItemWrapper>
            </Menu>
          </MenuWrapper>
        )}
      </MenuItem>
      {/* menu de notificações */}
    </div>
  );
};
