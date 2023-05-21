export interface SharePostPopUpProps {
    postId: string;
    open: boolean;
    onClose: () => void;
    postOwner: string;
    userPrivacyDefault?: "public" | "friends" | "only-me";
  }