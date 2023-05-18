import { InputAtom } from "@/components/atoms/Input/styles";
import { AiOutlineSend } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import AvatarImg from "@/components/atoms/Avatar";
import { useEffect, useRef, useState } from "react";
import EmojiPicker, { Theme } from "emoji-picker-react";
import {
  handleEmojiBoxOutsideClick,
  handleEmojiClick,
} from "@/utils/handleEmojiClick";
import { CommentInputProps } from "./types";
import * as styles from "./styles";

export const CommentInput: React.FC<CommentInputProps> = ({
  postId,
  loggedUserPhoto,
  loggedUserName,
  ...props
}) => {
  const [commentText, setCommentText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const commentInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const emojiPickerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    document.addEventListener(
      "click",
      (e) => handleEmojiBoxOutsideClick(e, emojiPickerRef, setShowEmojiPicker),
      true
    );
    return () => {
      document.removeEventListener(
        "click",
        (e) =>
          handleEmojiBoxOutsideClick(e, emojiPickerRef, setShowEmojiPicker),
        true
      );
    };
  });

  return (
    <div className={styles.commentInputContainer}>
      <div className={styles.avatarContainer}>
        <AvatarImg
          src={loggedUserPhoto}
          alt={loggedUserName}
          width={16}
          height={16}
          className="rounded-full"
        />
        <div className={styles.inputContainer}>
          <div className={styles.commentInputWrapper}>
            <InputAtom
              className={`${styles.inputAtom} ${
                commentText.length > 0 ? styles.inputRing : ""
              }`}
              placeholder="Escreva um comentário..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              ref={commentInputRef}
            />
            <div className={styles.actionButtonsContainer}>
              <button
                className={styles.emojiButton}
                onClick={() => {
                  setShowEmojiPicker(!showEmojiPicker);
                }}
              >
                <GrEmoji className="hover:text-gray-dark" />
              </button>
              <button
                className={styles.sendButton}
                onClick={() => {
                  // TODO - implement send comment
                }}
              >
                <AiOutlineSend className="hover:text-gray-dark" />
              </button>
            </div>
          </div>
          {showEmojiPicker && (
            <div className={styles.emojiPickerContainer} ref={emojiPickerRef}>
              <EmojiPicker
                theme={"dark" as Theme}
                height={400}
                previewConfig={{
                  showPreview: false,
                }}
                onEmojiClick={(emoji) =>
                  handleEmojiClick(
                    emoji,
                    commentText,
                    setCommentText,
                    commentInputRef
                  )
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
