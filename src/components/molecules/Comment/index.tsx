import { IoIosMore } from "react-icons/io";
import { CommentsProps } from "./types";
import AvatarImg from "@/components/atoms/Avatar";
import * as styles from "./styles";

export const Comment: React.FC<CommentsProps> = ({ comment }) => {
  return (
    <div className={styles.commentContainer} key={comment.id}>
      <div className={styles.loggedUserInformationsContainer}>
        <div className={styles.avatarContainer}>
          <AvatarImg
            src={comment.ownerPhoto}
            alt={comment.ownerName}
            width={16}
            height={16}
            className={styles.commentOwnerPhoto}
          />
          <div className={styles.commentOwnerInformationsContainer}>
            <div className={styles.ownerInfoContainer}>
              <div>
                <span className={styles.ownerName}>{comment.ownerName}</span>
                <span className={styles.timeAgo}>2h</span>
              </div>
              <div className={styles.moreButtonContainer}>
                <button
                  className={styles.moreButton}
                  onClick={() => {
                    // TODO - implement like comment
                  }}
                >
                  <IoIosMore />
                </button>
              </div>
            </div>
            <span className={styles.commentText}>{comment.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
