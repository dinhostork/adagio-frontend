import { Menu } from "@/components/atoms/Menu";
import { MenuHeader } from "@/components/atoms/MenuHeader";
import { MenuItem } from "@/components/atoms/MenuItem";
import { MenuItemWrapper } from "@/components/atoms/MenuItemWrapper";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import { useComponentsMenu } from "@/utils/componentsToggleMenu";
import { useCallback } from "react";
import { BiCalendarPlus } from "react-icons/bi";
import { BsBroadcastPin } from "react-icons/bs";
import { GiGuitarHead } from "react-icons/gi";
import { MdOutlineLibraryMusic } from "react-icons/md";

import { BiMessageSquareDots } from "react-icons/bi";
import { mainMenuWrapperPosition } from "@/styles/shared/componentsStyles";
import { UserWithTextBlock } from "@/components/atoms/UserWithTextBlock";

export const MessagesMenu: React.FC = () => {
  const {
    isOpen: isOpenMessagesMenu,
    toggle: toggleMessagesMenu,
    menuRef: menuRefMessages,
  } = useComponentsMenu();

  const handleMessagesClick = useCallback(() => {
    toggleMessagesMenu();
  }, [toggleMessagesMenu]);

  return (
    <MenuItem href="#">
      <BiMessageSquareDots
        size={24}
        className={isOpenMessagesMenu ? "z-20 text-white" : "z-10"}
        onClick={handleMessagesClick}
      />

      {isOpenMessagesMenu && (
        <MenuWrapper
          ref={menuRefMessages}
          className={mainMenuWrapperPosition}
          style={
            {
              left: "calc(100% - 15rem)",
            }
          }
        >
          <Menu width="w-64" className="flex flex-col relative">
            <MenuHeader title="Mensagens" />
            <MenuItemWrapper>
            <div className="flex flex-row w-full">
              <UserWithTextBlock userName="Dinho Stork" userProfPic="t">
                <span className="
                truncate
                w-40
                block
                text-gray
                ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ut, qui explicabo commodi quos ipsa mollitia praesentium enim, numquam aliquam consectetur. Suscipit quos odit magni alias maiores earum illo excepturi?</span>
              </UserWithTextBlock>
              <span className="text-xs text-gray-dark whitespace-nowrap">2 min</span>
             </div>
             <div className="flex flex-row w-full">
              <UserWithTextBlock userName="Dinho Stork" userProfPic="t">
                <span className="
                truncate
                w-40
                block
                text-gray
                ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ut, qui explicabo commodi quos ipsa mollitia praesentium enim, numquam aliquam consectetur. Suscipit quos odit magni alias maiores earum illo excepturi?</span>
              </UserWithTextBlock>
              <span className="text-xs text-gray-dark whitespace-nowrap">2 min</span>
             </div>
             <div className="flex flex-row w-full">
              <UserWithTextBlock userName="Dinho Stork" userProfPic="t">
                <span className="
                truncate
                w-40
                block
                text-gray
                ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ut, qui explicabo commodi quos ipsa mollitia praesentium enim, numquam aliquam consectetur. Suscipit quos odit magni alias maiores earum illo excepturi?</span>
              </UserWithTextBlock>
              <span className="text-xs text-gray-dark whitespace-nowrap">2 min</span>
             </div>
            </MenuItemWrapper>
            
          </Menu>
        </MenuWrapper>
      )}
    </MenuItem>
  );
};
