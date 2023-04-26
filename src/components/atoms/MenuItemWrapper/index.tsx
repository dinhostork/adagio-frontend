import { MenuWrapperProps } from "./types";
import {  ItemContainer } from "./styles";

export const MenuItemWrapper: React.FC<MenuWrapperProps> = ({ children }) => {
  return <ItemContainer>{children}</ItemContainer>;
};
