import { Item } from "./styles";
import { MenuItemProps } from "./types";

export const MenuItem: React.FC<MenuItemProps> = ({ children}) => {
  return <Item className="relative">{children}</Item>;
};
