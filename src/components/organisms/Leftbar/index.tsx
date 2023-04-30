import { EventBlock } from "@/components/atoms/EventBlock";
import Line from "@/components/atoms/LineDivider";
import { UserUpdate } from "@/components/molecules/UserUpdate";

export const Leftbar: React.FC = () => {
  return (
    <aside className="flex flex-col items-start h-full w-96 bg-carbone rounded-lg p-8">
      <h1 className="text-lg text-white mb-4 pl-1">Atividades</h1>
      <Line />
      <div className="flex flex-col items-center justify-normal w-full mt-4 gap-4 h-48 overflow-y-auto mb-8 z-0">
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

      <h1 className="text-lg text-white mb-4 pl-1">Eventos</h1>
      <Line />
      <div className="flex flex-col items-center justify-normal w-full mt-4 gap-4 h-60 overflow-y-auto mb-8">
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
    </aside>
  );
};
