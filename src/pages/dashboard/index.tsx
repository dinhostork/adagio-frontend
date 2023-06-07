import { signOut, useSession } from "next-auth/react";

export default function Index() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>{session ? `${session.user?.name}` : "Não logado"}</h1>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Sair
      </button>
    </div>
  );
}
