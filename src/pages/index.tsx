import { Leftbar } from "@/components/organisms/Leftbar";
import { Rightbar } from "@/components/organisms/Rightbar";
import { Topbar } from "@/components/organisms/Topbar";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg-carbone-secondary h-screen w-full p-8 flex-row `}>
      <div>
        <Head>
          <title>Adagio</title>
        </Head>
        <Topbar />
      </div>
      <div className="flex flex-row justify-between h-full w-full mt-8">
        <Leftbar />
        <div>posts</div>
        <Rightbar />
      </div>
    </main>
  );
}
