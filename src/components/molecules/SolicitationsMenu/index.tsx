import { FriendRequestActions } from "@/components/atoms/FriendRequestActions";
import { Menu } from "@/components/atoms/Menu";
import { MenuHeader } from "@/components/atoms/MenuHeader";
import { MenuItem } from "@/components/atoms/MenuItem";
import { MenuItemWrapper } from "@/components/atoms/MenuItemWrapper";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import { UserWithTextBlock } from "@/components/atoms/UserWithTextBlock";
import { mainMenuWrapperPosition } from "@/styles/shared/componentsStyles";
import { useComponentsMenu } from "@/utils/componentsToggleMenu";
import { useCallback } from "react";
import { BiCalendarPlus, BiGroup } from "react-icons/bi";
import { BsBroadcastPin } from "react-icons/bs";
import { GiGuitarHead } from "react-icons/gi";
import { MdOutlineLibraryMusic } from "react-icons/md";

export const SolicitationsMenu: React.FC = () => {
  const {
    isOpen: isOpenMenuSolicitacoes,
    toggle: toggleMenuSolicitacoes,
    menuRef: menuRefSolicitacoes,
  } = useComponentsMenu();

  const handleSolicitationsClick = useCallback(() => {
    toggleMenuSolicitacoes();
  }, [toggleMenuSolicitacoes]);

  return (
    <MenuItem href="#" menuRef={menuRefSolicitacoes} className="relative">
      <BiGroup
        size={24}
        className={isOpenMenuSolicitacoes ? "z-20 text-white" : "z-10"}
        onClick={handleSolicitationsClick}
      />
      {isOpenMenuSolicitacoes && (
        <MenuWrapper
          ref={menuRefSolicitacoes}
          className={mainMenuWrapperPosition}
          style={
            {
              left: "calc(100% - 15rem)",
            }
          }
        >
          <Menu width="w-64" className="flex flex-col relative">
            <MenuHeader title="Solicitações" />
            <MenuItemWrapper>
            <div className="flex flex-row w-full">
              <UserWithTextBlock userName="Dinho Stork" userProfPic="t">
                <span >@dinhostork</span>
              </UserWithTextBlock>
              <FriendRequestActions />
             </div>
            </MenuItemWrapper>
          </Menu>
        </MenuWrapper>
      )}
    </MenuItem>
  );
};
