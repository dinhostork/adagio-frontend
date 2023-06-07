import AvatarImg from "@/components/atoms/Avatar";
import { Menu } from "@/components/atoms/Menu";
import { useComponentsMenu } from "@/utils/componentsToggleMenu";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";
import { MenuItemWrapper } from "@/components/atoms/MenuItemWrapper";
import { MenuItem } from "@/components/atoms/MenuItem";
import { MenuHeader } from "@/components/atoms/MenuHeader";
import { avatarMenuWrapperPosition, itemSpacing, menuWidth } from "./styles";
import { signOut, useSession } from "next-auth/react";

export const Avatar: React.FC = () => {
  const { isOpen, toggle, menuRef } = useComponentsMenu();
  const {data: session} = useSession();
  
  const handleAvatarClick = (event: React.MouseEvent) => {
    if (menuRef.current && menuRef.current.contains(event.target as Node)) {
      return;
    }
    toggle(!isOpen);
  };
  return (
    <div className="flex items-center justify-center relative ">
      <AvatarImg
        src="https://avatars.githubusercontent.com/u/5059050?v=4"
        onClick={handleAvatarClick}
      />

      {isOpen && (
        <MenuWrapper
          ref={menuRef}
          className={avatarMenuWrapperPosition}
        >
          <Menu width={menuWidth}>
            <MenuHeader title={session ? session.user?.name : "  "} />

            <MenuItemWrapper>
              <MenuItem >
                <BsPerson size={24} className={itemSpacing} />
                Perfil
              </MenuItem>
              <MenuItem >
                <IoSettingsOutline size={24} className={itemSpacing} />
                Configurações
              </MenuItem>
              <MenuItem >
                <BiLockAlt size={24} className={itemSpacing} />
                Privacidade
              </MenuItem>
              <MenuItem>
                <IoIosLogOut size={24} className={itemSpacing} />
                <span onClick={() => signOut({
                  
                })}>Sair</span>
              </MenuItem>
            </MenuItemWrapper>
          </Menu>
        </MenuWrapper>
      )}
    </div>
  );
};
