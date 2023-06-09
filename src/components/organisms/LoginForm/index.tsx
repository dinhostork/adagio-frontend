import { AuthForm } from "@/components/molecules/AuthForm";
import { Input } from "@/components/atoms/Input";
import { BiLock } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if(!email || !password){
      setError("Preencha todos os campos");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError("");
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    } else {
      setLoading(true);
      router.push("/");
    }
  };
  return (
    <AuthForm
      info="Digite seu email e senha para entrar"
      forgotPassword={true}
      loading={loading}
      error={error}
      submit={async (e) => {
        e.preventDefault();
        setLoading(true);
        await handleLogin();
      }}
    >
      <Input
        placeholder="Email"
        icon={<MdEmail size={16} />}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Senha"
        icon={<BiLock size={16} />}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
    </AuthForm>
  );
};
