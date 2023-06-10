import { API } from "@/services/api";

export interface Post {
  text: string;
  hasMedia: boolean;
  privacy_id: number;
}

const api = new API();


export const handlePost = async (data: Post, token: string) => {
  const postData = data;
  const response = await api.post("posts", postData, token);

  return response;
};
