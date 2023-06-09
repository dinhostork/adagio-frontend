'use client';
import { Leftbar } from "@/components/organisms/Leftbar";
import { Rightbar } from "@/components/organisms/Rightbar";
import { Topbar } from "@/components/organisms/Topbar";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Main } from "@/components/templates/Main";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

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
        <div className="flex flex-col w-full pr-4 pl-4 max-w-3xl h-full flex-grow">
          <Main />
        </div>
        <Rightbar />
      </div>
    </main>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {

 
  const isAuthenticated = true
  
  if (!isAuthenticated) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
