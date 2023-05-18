export interface CommentType {
  id: string;
  ownerName: string;
  ownerPhoto: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface CommentsProps {
  comment: CommentType;
}
