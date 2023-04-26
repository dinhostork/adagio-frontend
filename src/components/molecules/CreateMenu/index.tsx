import { Menu } from "@/components/atoms/Menu";
import { MenuHeader } from "@/components/atoms/MenuHeader";
import { MenuItem } from "@/components/atoms/MenuItem";
import { MenuItemWrapper } from "@/components/atoms/MenuItemWrapper";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import { useComponentsMenu } from "@/utils/componentsToggleMenu";
import { useCallback } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiCalendarPlus } from "react-icons/bi";
import { BsBroadcastPin } from "react-icons/bs";
import { GiGuitarHead } from "react-icons/gi";
import { MdOutlineLibraryMusic } from "react-icons/md";

export const CreateMenu: React.FC = () => {
    const {
        isOpen: isOpenMenuCriacao,
        toggle: toggleMenuCriacao,
        menuRef: menuRefCriacao,
      } = useComponentsMenu();

      const handleCreateClick = useCallback(() => {
        toggleMenuCriacao();
      }, [toggleMenuCriacao]);
    
    return(
        <MenuItem href="#" menuRef={menuRefCriacao}>
        <AiOutlinePlus
          size={24}
          onClick={handleCreateClick}
          className={isOpenMenuCriacao ? "z-20 text-white" : "z-10"}
        />
        {isOpenMenuCriacao && (
          <MenuWrapper
            ref={menuRefCriacao}
            style={{
              top: -10,
              left: -140,
              zIndex: 10,
            }}
          >
            <Menu width="w-48" className="flex flex-col">
              <MenuHeader userName="Criar" />
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