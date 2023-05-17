
export interface PostMedia {
    id: string;
    type: "image" | "video" | "audio";
    url: string;
    thumbnail: string;
  }
  export interface Post {
    id: string;
    ownerName: string;
    ownerPhoto: string;
    text: string;
    likes: number;
    comments: number;
    shares: number;
    liked: boolean;
    media: PostMedia[];
  }
  
  
  export type UserPostProps = {
    post: Post;
  };