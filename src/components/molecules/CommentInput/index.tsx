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
    <div className="flex flex-row justify-between w-full ">
      <div className="flex flex-row h-auto w-full ">
        <AvatarImg
          src={loggedUserPhoto}
          alt={loggedUserName}
          width={16}
          height={16}
          className="rounded-full"
        />
        <div className="flex flex-col ml-2 w-full ">
          <div className="flex flex-row justify-start h-auto w-full relative">
            <InputAtom
              className={`bg-carbone bg-opacity-75 text-white font-normal text-sm cursor-text w-full h-16 flex justify-normal pl-4 items-start pr-4 ${
                commentText.length > 0 ? "ring-2" : " "
              }`}
              placeholder="Escreva um comentário..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              ref={commentInputRef}
            />
            <div className="flex flex-row justify-end h-auto absolute right-2 bottom-1 gap-2">
              <button
                className="text-white font-normal text-sm cursor-pointer h-auto"
                onClick={() => {
                  setShowEmojiPicker(!showEmojiPicker);
                }}
              >
                <GrEmoji className="hover:text-gray-dark" />
              </button>
              <button
                className="text-white font-normal text-sm cursor-pointer h-auto"
                onClick={() => {
                  // TODO - implement send comment
                }}
              >
                <AiOutlineSend className="hover:text-gray-dark" />
              </button>
            </div>
          </div>
          {showEmojiPicker && (
            <div
              className="absolute bottom-0 right-2 z-20"
              ref={emojiPickerRef}
            >
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
