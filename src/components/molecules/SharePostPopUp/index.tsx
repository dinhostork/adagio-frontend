import { PublicationTextArea } from "@/components/atoms/PublicationTextArea";
import { useEffect, useRef, useState } from "react";
import { BiShare } from "react-icons/bi";
import {
  IoIosArrowDown,
  IoMdGlobe,
  IoMdLock,
  IoMdPeople,
} from "react-icons/io";
import { renderPrivacyIcon } from "@/utils/renderPrivacyIcon";
import { PrivacyOption } from "../../organisms/PublicationInput/types";
import { sharePost } from "./actions";
import {
  handleEmojiBoxOutsideClick,
  handleEmojiClick,
} from "@/utils/handleEmojiClick";
import { GrEmoji } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import EmojiPicker, { Theme } from "emoji-picker-react";
import { SharePostPopUpProps } from "./types";
import * as styles from "./styles";

export const SharePostPopUp: React.FC<SharePostPopUpProps> = ({
  postId,
  open,
  onClose,
  postOwner,
  userPrivacyDefault = "public",
}) => {
  const [text, setText] = useState<string>("");
  const [privacy, setPrivacy] = useState<PrivacyOption>(
    userPrivacyDefault
  );
  const [privacyMenuOpen, setPrivacyMenuOpen] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const inputRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

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

  const changePrivacy = (privacy: PrivacyOption) => {
    setPrivacy(privacy);
    setPrivacyMenuOpen(false);
  };

  return (
    <div
      className={styles.popUpContainer}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      style={{ display: open ? "block" : "none" }}
    >
      {showEmojiPicker && (
        <div ref={emojiPickerRef} className={styles.emojiPickerContainer}>
          <button
            onClick={() => setShowEmojiPicker(false)}
            className={styles.closeButton}
          >
            <IoClose className={styles.closeIcon} size={24} />
          </button>
          <EmojiPicker
            onEmojiClick={(emoji) =>
              handleEmojiClick(emoji, text, setText, inputRef)
            }
            theme={"dark" as Theme}
            height={400}
          />
        </div>
      )}
      <div className={styles.dialogContainer}>
        <div className={styles.backdrop} aria-hidden="true"></div>
        <span className={styles.hiddenSpan} aria-hidden="true">
          &#8203;
        </span>
        <div className={styles.modalContentContainer}>
          <div className={styles.modalHeader}>
            <div className={styles.headerContent}>
              <div className={styles.iconContainer}>
                <BiShare />
              </div>
              <div className={styles.titleContainer}>
                <div className={styles.popUpTitles}>
                  <h3 className={styles.title} id="modal-title">
                    Compartilhar publicação
                  </h3>
                  <div
                    className={styles.privacyMenuIconContainer}
                    onClick={() => setPrivacyMenuOpen(!privacyMenuOpen)}
                  >
                    {renderPrivacyIcon(privacy)}

                    <IoIosArrowDown
                      className={`${
                        privacyMenuOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                  {privacyMenuOpen && (
                    <div className={styles.privacyIconContainer}>
                      <div className={styles.privacyOptionsContainer}>
                        <button
                          className={styles.privacyOptionButton}
                          onClick={() => {
                            changePrivacy("public");
                          }}
                        >
                          <IoMdGlobe />
                          Público
                        </button>
                        <button
                          className={styles.privacyOptionButton}
                          onClick={() => {
                            changePrivacy("friends");
                          }}
                        >
                          <IoMdPeople />
                          Amigos
                        </button>
                        <button
                          className={styles.privacyOptionButton}
                          onClick={() => {
                            changePrivacy("only-me");
                          }}
                        >
                          <IoMdLock />
                          Somente eu
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.textAreaContainer}>
                  <div className={styles.textAreaWrapper}>
                    <PublicationTextArea
                      placeholder="Escreva uma legenda..."
                      rows={3}
                      className={styles.textArea}
                      maxLength={300}
                      text={text}
                      onChange={(e) => setText(e.target.value)}
                      inputRef={inputRef}
                    />
                    <div className={styles.emojiButtonContainer}>
                      <button
                        onClick={() => setShowEmojiPicker(true)}
                        className={styles.emojiButton}
                      >
                        <span role="img" aria-label="emoji-button">
                          <GrEmoji />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.postOwnerTextContainer}>
                  <p className={styles.postOwnerText}>
                    Você está compartilhando a publicação de {postOwner}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button
                type="button"
                className={styles.shareButton}
                onClick={() => {
                  onClose();
                  sharePost(postId, text, privacy);
                  setText("");
                }}
              >
                Compartilhar
              </button>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={() => {
                  onClose();
                  setText("");
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
