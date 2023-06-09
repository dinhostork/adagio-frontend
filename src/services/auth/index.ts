import { API } from "../api";

const api = new API();



export const login = async (email: string, password: string) => {
  try {
    const response = await api.post("auth", {
      email,
      password,
    });

    return response;
  } catch (err) {
    throw new Error("Erro ao fazer login");
  }
};


export const saveUserAndToken = (data: string) => {
  try {
    const userData = JSON.stringify(data);
    localStorage.setItem("_informations", userData);
  } catch (err) {
    console.log(err);
    throw new Error("Erro ao salvar token");
  }
};

