import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import {AiOutlineCompass} from "react-icons/ai";
import tw from "tailwind-styled-components";
import { useTheme } from "styled-components";



interface NavProps {
  items: { name: string; href: string }[];
}

const Nav: React.FC<NavProps> = ({ items }) => {
  const [showMenu, setShowMenu] = useState(false);
  const theme = useTheme();

  return (
    <div className="flex w-48 bg-carbone-secondary h-12 items-center p-4">
            asfkjasf
        
    </div>
  );
};

export default Nav;
