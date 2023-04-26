import { IconCounter } from "@/components/atoms/IconCounter";
import { MenuItem } from "@/components/atoms/MenuItem";
import { Item } from "@/components/atoms/MenuItem/styles";
import { AiOutlineBell, AiOutlinePlus } from "react-icons/ai";
import { BiGroup, BiMessageSquareDots } from "react-icons/bi";

export const TopbarMainMenu: React.FC = () => {
  
  return (
    <div className="flex flex-row w-80 h-12 items-center justify-between text-gray-dark">
      <MenuItem href="#">
        <AiOutlinePlus size={24} />
      </MenuItem>
      <MenuItem href="#">
        <BiGroup size={24} />
      </MenuItem>
      <MenuItem href="#">
        <BiMessageSquareDots size={24} />
      </MenuItem>

      <MenuItem href="#">
      <IconCounter count={4} />
        <AiOutlineBell size={24} />
      </MenuItem>
    </div>
  );
};
