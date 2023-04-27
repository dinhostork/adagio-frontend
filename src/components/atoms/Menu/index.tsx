import { StyledMenu } from "./styles";

export const Menu: React.FC<MenuProps> = ({ width, children }) => {
  return <StyledMenu width={width}>{children}</StyledMenu>;
};
