import { AuthForm } from "@/components/molecules/AuthForm";
import { Input } from "@/components/atoms/Input";
import { BiLock } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export const LoginForm = () => {
  return (
    <AuthForm info="Digite seu email e senha para entrar" forgotPassword={true}>
      <Input placeholder="Email" icon={<MdEmail size={16} />} />
      <Input placeholder="Password" icon={<BiLock size={16} />} />
    </AuthForm>
  );
};
