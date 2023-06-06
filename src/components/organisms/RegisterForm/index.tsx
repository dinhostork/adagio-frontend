import { AuthForm } from "@/components/molecules/AuthForm";
import { Input } from "@/components/atoms/Input";
import { BiLock } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

export const RegisterForm = () => {
  return (
    <AuthForm
      info="Digite suas informações para se cadastrar"
      forgotPassword={false}
      register
    >
      <Input placeholder="Nome Completo" icon={<BsPerson size={16} />} />
      <Input placeholder="Email" icon={<MdEmail size={16} />} />
      <Input placeholder="Senha" icon={<BiLock size={16} />} />
    </AuthForm>
  );
};
