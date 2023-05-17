import Line from "@/components/atoms/LineDivider";
import {
  SidebarItensContainer,
  sideBarWrapper,
} from "../../../styles/shared/SidebarStyles";
import { MenuItem } from "@/components/atoms/MenuItem";
import { BiCalendarPlus } from "react-icons/bi";
import { GiGClef, GiGuitarHead } from "react-icons/gi";
import { UserForLists } from "@/components/atoms/UserForLists";
import { SidebarSection } from "@/components/molecules/SidebarSection";
import {
  sideBarTitle,
  smallSection,
} from "@/components/molecules/SidebarSection/styles";
import { IconsContainer } from "./styles";

export const Rightbar: React.FC = () => {
  return (
    <aside className="flex flex-col items-start h-full flex-grow max-w-sm bg-carbone rounded-lg p-8 justify-between mb-32">
      <SidebarItensContainer>
        <div className={smallSection}>
          <h1 className={sideBarTitle}>Crie Algo Novo </h1>
          <Line />
          <div className="w-full h-auto overflow-auto flex flex-col gap-3">
            <MenuItem>
              <IconsContainer>
                <BiCalendarPlus size={18} />
              </IconsContainer>
              <span className={"ml-4"}>Marcar um Evento</span>
            </MenuItem>
            <MenuItem>
              <IconsContainer>
                <GiGClef size={18} />
              </IconsContainer>
              <span className={"ml-4"}>Iniciar Jam Session</span>
            </MenuItem>
            <MenuItem>
              <IconsContainer>
                <GiGuitarHead size={18} />
              </IconsContainer>
              <span className={"ml-4"}>Adicionar Habilidades</span>
            </MenuItem>
          </div>
        </div>

        <div className="w-full mb-6">
          <h1 className={sideBarTitle}>Artistas Sugeridos </h1>
          <Line />
          <UserForLists
            avatar="https://avatars.githubusercontent.com/u/5059050"
            name="Dinho Stork"
            slug="dinhostork"
          />
          <UserForLists
            avatar="https://avatars.githubusercontent.com/u/5059050"
            name="Dinho Stork"
            slug="dinhostork"
          />
        </div>

        <div className="w-full">
          <h1 className={sideBarTitle}>Amigos </h1>
          <Line />
          <div className="w-full h-[calc(100vh-40rem)] overflow-auto">
            <UserForLists
              avatar="https://avatars.githubusercontent.com/u/5059050"
              name="Dinho Stork"
              online
            />
            <UserForLists
              avatar="https://avatars.githubusercontent.com/u/5059050"
              name="Dinho Stork"
            />
            <UserForLists
              avatar="https://avatars.githubusercontent.com/u/5059050"
              name="Dinho Stork"
            />
            <UserForLists
              avatar="https://avatars.githubusercontent.com/u/5059050"
              name="Dinho Stork"
            />
            <UserForLists
              avatar="https://avatars.githubusercontent.com/u/5059050"
              name="Dinho Stork"
            />
            <UserForLists
              avatar="https://avatars.githubusercontent.com/u/5059050"
              name="Dinho Stork"
            />
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
      </SidebarItensContainer>
    </aside>
  );
};
