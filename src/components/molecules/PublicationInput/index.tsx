import { useEffect, useRef, useState } from "react";
import AvatarImg from "@/components/atoms/Avatar";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";
import { IoClose } from "react-icons/io5";
import { GrEmoji } from "react-icons/gr";
import { MdPermMedia } from "react-icons/md";
import { TbFileUpload } from "react-icons/tb";
import { MediaFile } from "./types";
import { PublicationTextArea } from "@/components/atoms/PublicationTextArea";
import * as styles from "./styles";
import Image from "next/image";

export const PublicationInput = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [oppenedMediaArea, setoppenedMediaArea] = useState(false);
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [text, setText] = useState("");

  const handleEmojiClick = (emoji: EmojiClickData) => {
    const { emoji: emojiImage } = emoji;
    if (!inputRef.current) return;
    const startPos = inputRef.current.selectionStart;
    const endPos = inputRef.current.selectionEnd;
    const textBeforeCursor = text.slice(0, startPos);
    const textAfterCursor = text.slice(endPos);
    const newText = textBeforeCursor + emojiImage + textAfterCursor;
    setText(newText);
    inputRef.current.focus();
    inputRef.current.setSelectionRange(
      startPos + emojiImage.length,
      startPos + emojiImage.length
    );
  };

  const handleMediaAreaIconClick = () => {
    setoppenedMediaArea(!oppenedMediaArea);
  };

  const inputRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const emojiPickerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      emojiPickerRef.current &&
      !emojiPickerRef.current.contains(e.target as Node)
    ) {
      setShowEmojiPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  });

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // TODO @dinhostork: Implementar upload de arquivos
  };

  const handleFileRemove = (publicId: string) => {
    // TODO @dinhostork : Implementar remoção de arquivos
  };

  return (
    <div className={styles.container}>
      <div className={styles.relativeWrapper}>
        <PublicationTextArea
          inputRef={inputRef}
          onChange={(e) => {
            setText(e.target.value);
          }}
          text={text}
        />

        <div className={styles.absoluteButtonWrapper}>
          <button
            onClick={() => setShowEmojiPicker(true)}
            className={styles.emojiButton}
          >
            <span role="img" aria-label="emoji-button">
              <GrEmoji />
            </span>
          </button>
          <button className={styles.mediaButton}>
            <span
              role="img"
              aria-label="image-button"
              onClick={handleMediaAreaIconClick}
            >
              <MdPermMedia
                className={`${
                  oppenedMediaArea ? "text-white" : "text-gray-light"
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      <AvatarImg
        src="https://avatars.githubusercontent.com/u/5059050"
        alt="Dinho Stork"
        className={styles.avatar}
      />

      {showEmojiPicker && (
        <div ref={emojiPickerRef} className={styles.emojiPickerContainer}>
          <button
            onClick={() => setShowEmojiPicker(false)}
            className={styles.emojiPickerButton}
          >
            <IoClose
              className={styles.emojiPickerCloseButton}
              size={styles.iconSize}
            />
          </button>
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            theme={"dark" as Theme}
            height={400}
          />
        </div>
      )}

      {oppenedMediaArea && (
        <div className={styles.mediaArea}>
          <div className={styles.fileUploadWrapper}>
            <label htmlFor="file-upload" className={styles.fileUploadLabel}>
              <TbFileUpload
                className="text-gray-dark transition ease-in-out hover:text-white"
                size={24}
              />
            </label>
            <input
              id="file-upload"
              type="file"
              className={styles.inputFile}
              onChange={handleFileSelect}
              multiple
            />
          </div>

          {files.map((file, index) => {
            return (
              <div key={index} className={styles.mediaItem}>
                <Image
                  src={file.secureUrl || file.url}
                  alt={file.name}
                  width={20}
                  height={20}
                />
                <button
                  onClick={() => handleFileRemove(file.publicId)}
                  className={styles.closeButton}
                >
                  <IoClose className="text-white" size={styles.iconSize} />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {text.length > 0 && (
        <button
          className={styles.publishButton}
          disabled={text.length <= 0}
          onClick={() => {
            // TODO @dinhostork : Implementar publicação
          }}
        >
          Publicar
        </button>
      )}
    </div>
  );
};
