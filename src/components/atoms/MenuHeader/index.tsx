import { Header } from "./styles";
import { HeaderProps } from "./types";

export const MenuHeader: React.FC<HeaderProps> = ({ title }) => {
  return <Header>{title}</Header>;
};
