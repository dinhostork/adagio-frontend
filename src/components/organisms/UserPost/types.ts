import { CommentType } from "@/components/molecules/Comment/types";
import { PrivacyOption } from "@/components/molecules/PublicationInput/types";

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
    commentsList?: CommentType[];
    privacy: PrivacyOption;
    ownerId: string;
  }
  
  
  export type UserPostProps = {
    post: Post;
    loggedUserId: string;
  };

 