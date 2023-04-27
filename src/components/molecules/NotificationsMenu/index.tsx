import { IconCounter } from "@/components/atoms/IconCounter";
import { Menu } from "@/components/atoms/Menu";
import { MenuHeader } from "@/components/atoms/MenuHeader";
import { MenuItem } from "@/components/atoms/MenuItem";
import { MenuItemWrapper } from "@/components/atoms/MenuItemWrapper";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import { NotificationBlock } from "@/components/atoms/NotificationBlock";
import { largeMenu, largeMenuWrapperPosition } from "@/styles/shared/componentsStyles";
import { useComponentsMenu } from "@/utils/componentsToggleMenu";
import { useCallback } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { menuStyle } from "./styles";


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
            className={largeMenuWrapperPosition}
          >
            <Menu width={largeMenu} className={menuStyle}>
              <MenuHeader title="Notificações" />
              <MenuItemWrapper>
                <NotificationBlock
                  title="Solicitações de Amizade"
                  text="Dinho aceitou sua solicitação de amizade"
                  picture="https://avatars.githubusercontent.com/u/5059050"
                  date="há 2 dias"
                />
                <NotificationBlock
                  title="Bandas"
                  text="Dinho te enviou um convite para a banda 'Stork'"
                  picture="https://avatars.githubusercontent.com/u/5059050"
                  date="há 2 dias"
                />
                <NotificationBlock
                  title="Comentários"
                  text="Dinho comentou em seu post 'O que é música?'"
                  picture="https://avatars.githubusercontent.com/u/5059050"
                  date="há 2 dias"
                />
                <NotificationBlock
                  title="Curtidas"
                  text="Dinho curtiu seu post 'O que é música?'"
                  picture="https://avatars.githubusercontent.com/u/5059050"
                  date="há 2 dias"
                />
              </MenuItemWrapper>
            </Menu>
          </MenuWrapper>
        )}
      </MenuItem>
    )
}