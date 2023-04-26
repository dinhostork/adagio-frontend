import { IconCounter } from "@/components/atoms/IconCounter";
import { Menu } from "@/components/atoms/Menu";
import { MenuHeader } from "@/components/atoms/MenuHeader";
import { MenuItem } from "@/components/atoms/MenuItem";
import { MenuItemWrapper } from "@/components/atoms/MenuItemWrapper";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import { useComponentsMenu } from "@/utils/componentsToggleMenu";
import { useCallback } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BiCalendarPlus } from "react-icons/bi";
import { BsBroadcastPin } from "react-icons/bs";
import { GiGuitarHead } from "react-icons/gi";
import { MdOutlineLibraryMusic } from "react-icons/md";

export const NotificationsMenu: React.FC = () => {
    const {
        isOpen: isOpenNotificationsMenu,
        toggle: toggleNotificationsMenu,
        menuRef: menuRefNotifications,
      } = useComponentsMenu();
    
    
    
      const handleNotificationsClick = useCallback(() => {
        toggleNotificationsMenu();
      }, [toggleNotificationsMenu]);

    return(
        <MenuItem href="#">
        {!isOpenNotificationsMenu && <IconCounter count={4} />}
        <AiOutlineBell
          size={24}
          className={isOpenNotificationsMenu ? "z-20 text-white" : "z-10"}
          onClick={handleNotificationsClick}
        />
        {isOpenNotificationsMenu && (
          <MenuWrapper
            ref={menuRefNotifications}
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
    )
}