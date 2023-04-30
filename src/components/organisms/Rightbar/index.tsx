import Line from "@/components/atoms/LineDivider";
import { sideBarWrapper, boxContainer, sideBarTitle, sectionWrapper } from "../../../styles/shared/SidebarStyles";
import { MenuItem } from "@/components/atoms/MenuItem";
import { BiCalendarPlus } from "react-icons/bi";
import { GiGClef, GiGuitarHead } from "react-icons/gi";
import { UserForLists } from "@/components/atoms/UserForLists";

export const Rightbar: React.FC = () => {
  return (
    <aside className={sideBarWrapper}>
      <div className={boxContainer}>
        <h1 className={sideBarTitle}>Crie Algo Novo</h1>
        <Line />
        <div className={sectionWrapper + "h-auto pl-3"}>
          <MenuItem>
            <div className="flex justify-between w-10 h-10 o p-3 bg-gray-dark rounded-lg">
              <BiCalendarPlus size={18} />
            </div>
            <span className={"ml-4"}>Marcar um Evento</span>
          </MenuItem>
          <MenuItem>
            <div className="flex justify-between w-10 h-10 p-3 bg-gray-dark rounded-lg">
              <GiGClef size={18} />
            </div>
            <span className={"ml-4"}>Iniciar Jam Session</span>
          </MenuItem>
          <MenuItem>
            <div className="flex justify-between w-10 h-10 p-3 bg-gray-dark rounded-lg">
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
          <UserForLists
            avatar="https://avatars.githubusercontent.com/u/5059050"
            name="Dinho Stork"
          />

          <UserForLists
            avatar="https://avatars.githubusercontent.com/u/5059050"
            name="Dinho Stork"
          />
        </div>
      </div>
      <div className={boxContainer}>
        <h1 className={sideBarTitle}>Amigos</h1>
        <Line />
        <div className={sectionWrapper}>
          <UserForLists
            avatar="https://avatars.githubusercontent.com/u/5059050"
            name="Dinho Stork"
            online
          />
          <UserForLists
            avatar="https://avatars.githubusercontent.com/u/5059050"
            name="Dinho Stork"
          />
        </div>
      </div>
    </aside>
  );
};
