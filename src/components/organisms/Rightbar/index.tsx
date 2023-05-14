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
    <aside className={sideBarWrapper}>
      <SidebarItensContainer>
        <div className={smallSection}>
          <h1 className={sideBarTitle}>Artitas Sugeridos </h1>
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
          <h1 className={sideBarTitle}>Artitas Sugeridos </h1>
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
