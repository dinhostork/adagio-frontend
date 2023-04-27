import { Item } from "./styles";
import { MenuItemProps } from "./types";

export const MenuItem: React.FC<MenuItemProps> = ({ children, href}) => {
  return <Item href={href} className="relative">{children}</Item>;
};
