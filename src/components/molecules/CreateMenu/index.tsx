import { Menu } from "@/components/atoms/Menu";
import { MenuHeader } from "@/components/atoms/MenuHeader";
import { MenuItem } from "@/components/atoms/MenuItem";
import { MenuItemWrapper } from "@/components/atoms/MenuItemWrapper";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import {
  smallMenu,
  smallMenuWrapperPosition,
} from "@/styles/shared/componentsStyles";
import { useComponentsMenu } from "@/utils/componentsToggleMenu";
import { useCallback } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiCalendarPlus } from "react-icons/bi";
import { BsBroadcastPin } from "react-icons/bs";
import { GiGuitarHead } from "react-icons/gi";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { menuStyle, textSpacing } from "./styles";

export const CreateMenu: React.FC = () => {
  const {
    isOpen: isOpenCreateMenu,
    toggle: toggleCreateMenu,
    menuRef: menuRefCreate,
  } = useComponentsMenu();

  const handleCreateClick = useCallback(() => {
    toggleCreateMenu();
  }, [toggleCreateMenu]);

  return (
    <MenuItem href="#" menuRef={menuRefCreate}>
      <AiOutlinePlus
        size={24}
        onClick={handleCreateClick}
        className={isOpenCreateMenu ? "z-20 text-white" : "z-10"}
      />
      {isOpenCreateMenu && (
        <MenuWrapper ref={menuRefCreate} className={smallMenuWrapperPosition}>
          <Menu width={smallMenu} className={menuStyle}>
            <MenuHeader title="Criar" />
            <MenuItemWrapper>
              <MenuItem href="#">
                <MdOutlineLibraryMusic size={24} />
                <span className={textSpacing}>Banda</span>
              </MenuItem>
              <MenuItem href="#">
                <BiCalendarPlus size={24} />
                <span className={textSpacing}>Evento</span>
              </MenuItem>
              <MenuItem href="#">
                <BsBroadcastPin size={24} />
                <span className={textSpacing}>Live</span>
              </MenuItem>
              <MenuItem href="#">
                <GiGuitarHead size={24} />
                <span className={textSpacing}>Habilidade</span>
              </MenuItem>
            </MenuItemWrapper>
          </Menu>
        </MenuWrapper>
      )}
    </MenuItem>
  );
};
