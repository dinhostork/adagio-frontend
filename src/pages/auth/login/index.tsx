import { LoginForm } from "@/components/organisms/LoginForm";
import Head from "next/head";
import Image from "next/image";
import * as authStyles from "../../../styles/shared/authStyles";

export default function Login() {
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
