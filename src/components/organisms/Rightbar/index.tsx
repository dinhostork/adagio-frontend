import Line from "@/components/atoms/LineDivider";
import { boxContainer, sideBarTitle } from "../Leftbar/styles";
import { sideBarWrapper } from "../Leftbar/styles";
import { sectionWrapper } from "../Leftbar/styles";
import { MenuItem } from "@/components/atoms/MenuItem";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { UserWithTextBlock } from "@/components/atoms/UserWithTextBlock";
import { BiCalendarPlus } from "react-icons/bi";
import { GiGClef, GiGuitarHead } from "react-icons/gi";
import { ChatUser } from "@/components/atoms/ChatUser";

export const Rightbar: React.FC = () => {
  return (
    <aside className={sideBarWrapper}>
      <div className={boxContainer}>
        <h1 className={sideBarTitle}>Crie Algo Novo</h1>
        <Line />
        <div className={sectionWrapper + "h-auto"}>
          <MenuItem>
            <div className="flex justify-between w-auto h-auto p-3 bg-gray-dark rounded-lg">
              <BiCalendarPlus size={18} />
            </div>
            <span className={"ml-4"}>Marcar um Evento</span>
          </MenuItem>
          <MenuItem>
            <div className="flex justify-between w-auto h-auto p-3 bg-gray-dark rounded-lg">
              <GiGClef size={18} />
            </div>
            <span className={"ml-4"}>Iniciar Jam Session</span>
          </MenuItem>
          <MenuItem>
            <div className="flex justify-between w-auto h-auto p-3 bg-gray-dark rounded-lg">
              <GiGuitarHead size={18} />
            </div>
            <span className={"ml-4"}>Adicionar Habilidades</span>
          </MenuItem>
        </div>
      </div>
      <div className={boxContainer}>
        <h1 className={sideBarTitle}>Artistas Sugeridos</h1>
        <Line />
        <div className={sectionWrapper + "h-auto"}>
          <UserWithTextBlock userName="Dinho Stork" userProfPic="t">
            <span>@dinhostork</span>
          </UserWithTextBlock>
          <UserWithTextBlock userName="Dinho Stork" userProfPic="t">
            <span>@dinhostork</span>
          </UserWithTextBlock>
        </div>
      </div>
      <div className={boxContainer}>
        <h1 className={sideBarTitle}>Amigos</h1>
        <Line />
        <div className={sectionWrapper}>
            <ChatUser avatar="https://avatars.githubusercontent.com/u/5059050" name="Dinho Stork" online/>
            <ChatUser avatar="https://avatars.githubusercontent.com/u/5059050" name="Dinho Stork"/>

        </div>
      </div>
    </aside>
  );
};
