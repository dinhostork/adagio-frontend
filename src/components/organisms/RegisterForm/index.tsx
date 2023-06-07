import { AuthForm } from "@/components/molecules/AuthForm";
import { Input } from "@/components/atoms/Input";
import { BiLock } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { useRef, useState } from "react";
import { UserRegister, handleRegister } from "@/pages/api/auth/handleRegister";
import { signIn } from "next-auth/react";

export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegisterSubmit = async () => {
    setError("");
    setLoading(true);

    const userData: UserRegister = {
      name,
      email,
      password,
    };

    try {
      const response = await handleRegister(userData);

      if (!response.ok) {
        const errorResponse = await response.json();
        throw errorResponse.error;
      } else {
        setLoading(true);

        signIn("credentials", {
          email: userData.email,
          password: userData.password,
          callbackUrl: "/dashboard",
        });
      }
    } catch (error) {
      setLoading(false);
      setError(error as string);
    }
  };
  return (
    <AuthForm
      info="Digite suas informações para se cadastrar"
      forgotPassword={false}
      register
      submit={async (e) => {
        e.preventDefault();
        await handleRegisterSubmit();
      }}
      loading={loading}
      error={error}
    >
      <Input
        placeholder="Nome Completo"
        icon={<BsPerson size={16} type="text" />}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Input
        placeholder="Email"
        icon={<MdEmail size={16} type="email" />}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        placeholder="Senha"
        icon={<BiLock size={16} type="password" />}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
    </AuthForm>
  );
};
