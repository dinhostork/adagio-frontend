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

export const Avatar: React.FC = () => {
  const { isOpen, toggle, menuRef } = useComponentsMenu();

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
          style={{
            right: 50,
            zIndex: 10,
          }}
        >
          <Menu width="w-64">
            <MenuHeader userName="Dinho Stork" />

            <MenuItemWrapper>
              <MenuItem href="/profile">
                <BsPerson size={24} className="mr-4" />
                Perfil
              </MenuItem>
              <MenuItem href="/settings">
                <IoSettingsOutline size={24} className="mr-4" />
                Configurações
              </MenuItem>
              <MenuItem href="/privacy">
                <BiLockAlt size={24} className="mr-4" />
                Privacidade
              </MenuItem>
              <MenuItem href="/logout">
                <IoIosLogOut size={24} className="mr-4" />
                Sair
              </MenuItem>
            </MenuItemWrapper>
          </Menu>
        </MenuWrapper>
      )}
    </div>
  );
};
