import { API } from "@/services/api";
export interface UserRegister {
  name: string;
  email: string;
  password: string;
}
const api = new API();

export const handleRegister = async (data: UserRegister) => {
  const userData = data;
  const response = await api.post("users", userData);

  return response;
};
