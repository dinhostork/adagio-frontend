import { Menu } from "@/components/atoms/Menu";
import { MenuHeader } from "@/components/atoms/MenuHeader";
import { MenuItem } from "@/components/atoms/MenuItem";
import { MenuItemWrapper } from "@/components/atoms/MenuItemWrapper";
import MenuWrapper from "@/components/atoms/MenuWrapper";
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

        >
          <Menu width="w-48" className="flex flex-col relative">
            <MenuHeader title="Solicitações" />
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
