import { FriendRequestActions } from "@/components/atoms/FriendRequestActions";
import { Menu } from "@/components/atoms/Menu";
import { MenuHeader } from "@/components/atoms/MenuHeader";
import { MenuItem } from "@/components/atoms/MenuItem";
import { MenuItemWrapper } from "@/components/atoms/MenuItemWrapper";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import { UserWithTextBlock } from "@/components/atoms/UserWithTextBlock";
import {
  largeMenu,
  largeMenuWrapperPosition,
} from "@/styles/shared/componentsStyles";
import { useComponentsMenu } from "@/utils/componentsToggleMenu";
import { useCallback } from "react";
import { menuItemStyle, menuStyle, wrapperStyle } from "./styles";
import { BiGroup } from "react-icons/bi";

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
    <MenuItem  menuRef={menuRefSolicitacoes} className={menuItemStyle}>
      <BiGroup
        size={24}
        className={isOpenMenuSolicitacoes ? "z-20 text-white" : "z-10"}
        onClick={handleSolicitationsClick}
      />
      {isOpenMenuSolicitacoes && (
        <MenuWrapper
          ref={menuRefSolicitacoes}
          className={largeMenuWrapperPosition}
        >
          <Menu width={largeMenu} className={menuStyle}>
            <MenuHeader title="Solicitações" />
            <MenuItemWrapper>
              <div className={wrapperStyle}>
                <UserWithTextBlock userName="Dinho Stork" userProfPic="t">
                  <span>@dinhostork</span>
                </UserWithTextBlock>
                <FriendRequestActions />
              </div>
              <div className={wrapperStyle}>
                <UserWithTextBlock userName="Dinho Stork" userProfPic="t">
                  <span>@dinhostork</span>
                </UserWithTextBlock>
                <FriendRequestActions />
              </div>
              <div className={wrapperStyle}>
                <UserWithTextBlock userName="Dinho Stork" userProfPic="t">
                  <span>@dinhostork</span>
                </UserWithTextBlock>
                <FriendRequestActions />
              </div>
              <div className={wrapperStyle}>
                <UserWithTextBlock userName="Dinho Stork" userProfPic="t">
                  <span>@dinhostork</span>
                </UserWithTextBlock>
                <FriendRequestActions />
              </div>
              <div className={wrapperStyle}>
                <UserWithTextBlock userName="Dinho Stork" userProfPic="t">
                  <span>@dinhostork</span>
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
