import { EventBlock } from "@/components/atoms/EventBlock";
import { UserUpdate } from "@/components/molecules/UserUpdate";
import { SidebarItensContainer, sideBarWrapper } from "../../../styles/shared/SidebarStyles";
import { SidebarSection } from "@/components/molecules/SidebarSection";

export const Leftbar: React.FC = () => {
  return (
    <aside className={sideBarWrapper}>
      <SidebarItensContainer>
      <SidebarSection title="Atividades">
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
      </SidebarSection>
      <SidebarSection title="Eventos" >
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
      </SidebarSection>
      </SidebarItensContainer>
    </aside>
  );
};
