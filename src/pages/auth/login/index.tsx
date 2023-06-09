import { LoginForm } from "@/components/organisms/LoginForm";
import Head from "next/head";
import Image from "next/image";
import * as authStyles from "../../../styles/shared/authStyles";
import {useSession} from "next-auth/react";

export default function Login() {
  const {data: session} = useSession();
  if(session){
    window.location.href = "/";
  }
  return (
    <main className={authStyles.mainContainer}>
      <Head>
        <title>Adagio - Login</title>
      </Head>
      <div className={authStyles.content}>
        <Image
          src={"/musicians.svg"}
          width={500}
          height={500}
          alt="Musicians"
        />
        <LoginForm />
      </div>
    </main>
  );
}
