import { Menu } from "@/components/atoms/Menu";
import { MenuHeader } from "@/components/atoms/MenuHeader";
import { MenuItem } from "@/components/atoms/MenuItem";
import { MenuItemWrapper } from "@/components/atoms/MenuItemWrapper";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import { useComponentsMenu } from "@/utils/componentsToggleMenu";
import { useCallback } from "react";
import { BiMessageSquareDots } from "react-icons/bi";
import { largeMenu, largeMenuWrapperPosition } from "@/styles/shared/componentsStyles";
import { UserWithTextBlock } from "@/components/atoms/UserWithTextBlock";
import { menuStyle, wrapperMessage } from "./styles";

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
    <MenuItem >
      <BiMessageSquareDots
        size={24}
        className={isOpenMessagesMenu ? "z-20 text-white" : "z-10"}
        onClick={handleMessagesClick}
      />

      {isOpenMessagesMenu && (
        <MenuWrapper
          ref={menuRefMessages}
          className={largeMenuWrapperPosition}
          
        >
          <Menu width={largeMenu} className={menuStyle}>
            <MenuHeader title="Mensagens" />
            <MenuItemWrapper>
            <div className={wrapperMessage}>
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
             <div className={wrapperMessage}>
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
             <div className={wrapperMessage}>
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
