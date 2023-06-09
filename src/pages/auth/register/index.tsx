import { RegisterForm } from "@/components/organisms/RegisterForm";
import Head from "next/head";
import Image from "next/image";
import * as authStyles from '../../../styles/shared/authStyles'
import {useSession} from "next-auth/react";

export default function Register() {
  const {data: session} = useSession();
  if(session){
    window.location.href = "/";
  }
  return(
    <main className={authStyles.mainContainer}>
      <Head>
        <title>Adagio - Registro</title>
      </Head>
      <div className={authStyles.content}>
        <Image
          src={"/musicians.svg"}
          width={500}
          height={500}
          alt="Musicians"
        />
        <RegisterForm />
      </div>
    </main>
  )
}
