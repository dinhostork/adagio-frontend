import { RegisterForm } from "@/components/organisms/RegisterForm";
import Head from "next/head";
import Image from "next/image";
import * as authStyles from '../../../styles/shared/authStyles'

export default function Register() {
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
