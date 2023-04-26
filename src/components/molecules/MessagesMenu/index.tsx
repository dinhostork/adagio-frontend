import { Menu } from "@/components/atoms/Menu";
import { MenuHeader } from "@/components/atoms/MenuHeader";
import { MenuItem } from "@/components/atoms/MenuItem";
import { MenuItemWrapper } from "@/components/atoms/MenuItemWrapper";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import { useComponentsMenu } from "@/utils/componentsToggleMenu";
import { useCallback } from "react";
import { BiCalendarPlus } from "react-icons/bi";
import { BsBroadcastPin } from "react-icons/bs";
import { GiGuitarHead } from "react-icons/gi";
import { MdOutlineLibraryMusic } from "react-icons/md";

import { BiMessageSquareDots } from "react-icons/bi";

export const MessagesMenu: React.FC = () => {
  const {
    isOpen: isOpenMessagesMenu,
    toggle: toggleMessagesMenu,
    menuRef: menuRefMessages,
  } = useComponentsMenu();

  const handleMessagesClick = useCallback(() => {
    toggleMessagesMenu();
  }, [toggleMessagesMenu]);

  return (
    <MenuItem href="#">
      <BiMessageSquareDots
        size={24}
        className={isOpenMessagesMenu ? "z-20 text-white" : "z-10"}
        onClick={handleMessagesClick}
      />

      {isOpenMessagesMenu && (
        <MenuWrapper
          ref={menuRefMessages}
          style={{
            top: -10,
            left: -150,
            zIndex: 10,
          }}
        >
          <Menu width="w-48" className="flex flex-col relative">
            <MenuHeader title="Mensagens" />
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
  );
};
