import { API } from "@/services/api";

export interface Post {
  text: string;
  hasMedia: boolean;
  privacy_id: number;
  files: any[];
}

const api = new API();

export const handlePostCreate = async (data: Post, token: string) => {
  const postData = data;
  let postId = "";

  const response = await api
    .post(
      "posts",
      {
        text: postData.text,
        privacy_id: postData.privacy_id,
      },
      token
    )
    .then(async (response) => {
      if (response.ok) {
        const body = await response.json();
        postId = body.id;
      }
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

  if (response.ok && postData.hasMedia) {
    const files = postData.files;
    return await handleFileUpload(files, token, postId);
  }
  return response;
};

export const handleFileUpload = async (
  files: File[],
  token: string,
  postId: string
) => {
  try {
    const formData = new FormData();

    files.forEach((file: any) => {
      formData.append("file", file.file);
    });

    const response = await api.postMultiPart(
      `posts/${postId}/files`,
      formData,
      token
    );

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
