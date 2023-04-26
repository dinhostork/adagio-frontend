import { Header } from "./styles";
import { HeaderProps } from "./types";

export const MenuHeader: React.FC<HeaderProps> = ({ userName }) => {
  return <Header>{userName}</Header>;
};
