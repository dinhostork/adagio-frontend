import { AiOutlineCompass } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TopMenuBlockComponent } from "./styles";

interface TopMenuBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

export const TopMenuBlock: React.FC<TopMenuBlockProps> = ({
  onClick,
  children,
  
}) => {
  return (
    <TopMenuBlockComponent
      onClick={onClick}
    >
      {children}
    </TopMenuBlockComponent>
  );
};
