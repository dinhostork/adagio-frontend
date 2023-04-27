import { MenuItem } from "@/components/atoms/MenuItem";
import { MenuItemWrapper } from "@/components/atoms/MenuItemWrapper";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import { TopMenuBlock } from "@/components/atoms/TopMenuBlock";
import {
  smallMenu,
  smallMenuWrapperPosition,
} from "@/styles/shared/componentsStyles";
import { useComponentsMenu } from "@/utils/componentsToggleMenu";
import React, { useCallback } from "react";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { Menu } from "@/components/atoms/Menu";
import { BsGlobeAmericas } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";
import { GiGuitarHead } from "react-icons/gi";
import { AiOutlineCompass } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  textSpacing,
  menuStyle,
  oppenedMenuIconStyle,
  closedMenuIconStyle,
  oppenedMenuTextStyle,
  textStyle,
  menuPosition,
} from "./styles";

export const BrowseMenu: React.FC = () => {
  const {
    isOpen: isOpenBrowseMenu,
    toggle: toggleBrowseMenu,
    menuRef: menuRefBrowse,
  } = useComponentsMenu();

  const handleBrowseClick = useCallback(() => {
    toggleBrowseMenu();
  }, [toggleBrowseMenu]);

  return (
    <MenuItem menuRef={menuRefBrowse}>
      <TopMenuBlock onClick={handleBrowseClick} className="bg-gray">
        <AiOutlineCompass
          size={24}
          className={
            isOpenBrowseMenu ? oppenedMenuIconStyle : closedMenuIconStyle
          }
        />
        <p
          className={`${textStyle} ${
            isOpenBrowseMenu ? oppenedMenuTextStyle : ""
          }`}
        >
          Explorar
        </p>
        <MdKeyboardArrowDown
          size={24}
          className={
            isOpenBrowseMenu ? oppenedMenuIconStyle : closedMenuIconStyle
          }
        />
      </TopMenuBlock>

      {isOpenBrowseMenu && (
        <MenuWrapper ref={menuRefBrowse} className={menuPosition}>
          <Menu width={smallMenu} className={menuStyle}>
            <MenuItemWrapper>
              <MenuItem>
                <BsGlobeAmericas size={24} />
                <span className={textSpacing}>Populares</span>
              </MenuItem>
              <MenuItem>
                <MdOutlinePlace size={24} />
                <span className={textSpacing}>Ao Redor</span>
              </MenuItem>
              <MenuItem>
                <GiGuitarHead size={24} />
                <span className={textSpacing}>Habilidades</span>
              </MenuItem>
              <MenuItem>
                <MdOutlineLibraryMusic size={24} />
                <span className={textSpacing}>Bandas</span>
              </MenuItem>
            </MenuItemWrapper>
          </Menu>
        </MenuWrapper>
      )}
    </MenuItem>
  );
};
