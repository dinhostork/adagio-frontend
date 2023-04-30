import { EventBlock } from "@/components/atoms/EventBlock";
import Line from "@/components/atoms/LineDivider";
import { UserUpdate } from "@/components/molecules/UserUpdate";
import {
  sideBarTitle,
  sideBarWrapper,
  sectionWrapper,
  boxContainer,
} from "../../../styles/shared/SidebarStyles";

export const Leftbar: React.FC = () => {
  return (
    <aside className={sideBarWrapper}>
      <div className={boxContainer}>
        <h1 className={sideBarTitle}>Atividades</h1>
        <Line />
        <div className={sectionWrapper}>
          <UserUpdate
            picture="https://avatars.githubusercontent.com/u/5059050"
            userName="Dinho Stork"
            date="3 min"
            text="Atualizou sua foto de perfil"
            link="/"
          />
          <UserUpdate
            picture="https://avatars.githubusercontent.com/u/5059050"
            userName="Dinho Stork"
            date="3 min"
            text="Atualizou sua foto de perfil"
            link="/"
          />
          <UserUpdate
            picture="https://avatars.githubusercontent.com/u/5059050"
            userName="Dinho Stork"
            date="3 min"
            text="Atualizou sua foto de perfil"
            link="/"
          />
          <UserUpdate
            picture="https://avatars.githubusercontent.com/u/5059050"
            userName="Dinho Stork"
            date="3 min"
            text="Atualizou sua foto de perfil"
            link="/"
          />
          <UserUpdate
            picture="https://avatars.githubusercontent.com/u/5059050"
            userName="Dinho Stork"
            date="3 min"
            text="Atualizou sua foto de perfil"
            link="/"
          />
          <UserUpdate
            picture="https://avatars.githubusercontent.com/u/5059050"
            userName="Dinho Stork"
            date="3 min"
            text="Atualizou sua foto de perfil"
            link="/"
          />
        </div>
      </div>
      <div className={boxContainer}>
        <h1 className={sideBarTitle}>Eventos</h1>
        <Line />
        <div className={sectionWrapper}>
          <EventBlock
            date="02/02/2023"
            time="8h"
            place="Cruz das Almas"
            title="Encontro de Guitarristas"
            link="/"
          />
          <EventBlock
            date="02/02/2023"
            time="8h"
            place="Cruz das Almas"
            title="Encontro de Guitarristas"
            link="/"
          />
          <EventBlock
            date="02/02/2023"
            time="8h"
            place="Cruz das Almas"
            title="Encontro de Guitarristas"
            link="/"
          />
          <EventBlock
            date="02/02/2023"
            time="8h"
            place="Cruz das Almas"
            title="Encontro de Guitarristas"
            link="/"
          />
          <EventBlock
            date="02/02/2023"
            time="8h"
            place="Cruz das Almas"
            title="Encontro de Guitarristas"
            link="/"
          />
          <EventBlock
            date="02/02/2023"
            time="8h"
            place="Cruz das Almas"
            title="Encontro de Guitarristas"
            link="/"
          />
          <EventBlock
            date="02/02/2023"
            time="8h"
            place="Cruz das Almas"
            title="Encontro de Guitarristas"
            link="/"
          />
          <EventBlock
            date="02/02/2023"
            time="8h"
            place="Cruz das Almas"
            title="Encontro de Guitarristas"
            link="/"
          />
        </div>
      </div>
    </aside>
  );
};
