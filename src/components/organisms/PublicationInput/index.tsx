import React, { useEffect, useRef, useState } from "react";
import AvatarImg from "@/components/atoms/Avatar";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";
import { IoClose } from "react-icons/io5";
import { GrEmoji } from "react-icons/gr";
import { MdPermMedia } from "react-icons/md";
import { TbFileUpload } from "react-icons/tb";
import {
  MediaFile,
  PrivacyOption,
  PublicationInputProps,
  publicationFile,
} from "./types";
import { PublicationTextArea } from "@/components/atoms/PublicationTextArea";
import * as styles from "./styles";
import Image from "next/image";
import {
  handleEmojiBoxOutsideClick,
  handleEmojiClick,
} from "@/utils/handleEmojiClick";
import {
  IoIosArrowDown,
  IoMdGlobe,
  IoMdLock,
  IoMdPeople,
} from "react-icons/io";
import { renderPrivacyIcon } from "@/utils/renderPrivacyIcon";
import { useSession } from "next-auth/react";
import { handlePostCreate } from "@/pages/api/posts";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "react-toastify";
import { RemoveFilesPopUp } from "../../molecules/RemoveAllFilesPopup";

export const PublicationInput: React.FC<PublicationInputProps> = ({
  userPrivacyDefault = "public",
}) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [oppenedMediaArea, setoppenedMediaArea] = useState(false);
  const [fileRemovePopupOpen, setFileRemovePopupOpen] = useState(false);
  const [files, setFiles] = useState<any[]>([]);
  const [text, setText] = useState("");
  const [privacyMenuOpen, setPrivacyMenuOpen] = useState(false);
  const [privacy, setPrivacy] = useState<"public" | "friends" | "only-me">(
    userPrivacyDefault
  );

  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();

  const handlePublish = async () => {
    setLoading(true);
    await handlePostCreate(
      {
        text,
        hasMedia: files.length > 0,
        privacy_id: privacy === "public" ? 1 : privacy === "friends" ? 2 : 3,
        files,
      },
      session?.user.token as string
    )
      .then(() => {
        toast.success(`Publicação realizada com sucesso! 🎉`);
        if (files.length > 0) {
          toast.info(`Os arquivos estão sendo processados e serão exibidos em breve.`);
        }
        setText("");
        setFiles([]);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Erro ao publicar!");
        setLoading(false);
      });
  };

  const changePrivacy = (privacy: PrivacyOption) => {
    setPrivacy(privacy);
    setPrivacyMenuOpen(false);
  };

  const handleMediaAreaIconClick = () => {
    if (files.length > 0) {
      setFileRemovePopupOpen(true);
    } else {
      setoppenedMediaArea((prev) => !prev);
    }
  };

  const inputRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
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
  }, []);

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputFiles = event.target.files;

    if (inputFiles) {
      const processedFiles = await Promise.all(
        Array.from(inputFiles).map(async (file) => {
          const preview = URL.createObjectURL(file);
          let thumbnail;

          if (file.type.startsWith("image/")) {
            thumbnail = await createImageThumbnail(preview);
          } else if (file.type.startsWith("video/")) {
            thumbnail = await createVideoThumbnail(preview);
          }

          return {
            file,
            preview,
            thumbnail,
          };
        })
      );

      const uniqueFiles = processedFiles.filter((processedFile) => {
        return !files.some((existingFile) => {
          toast.error(
            `O arquivo ${processedFile.file.name} já foi selecionado`
          );
          return (
            existingFile.file.name === processedFile.file.name &&
            existingFile.file.size === processedFile.file.size
          );
        });
      });

      setFiles([...files, ...uniqueFiles]);
    }
  };

  const handleFileRemove = (fileToRemove: publicationFile) => {
    const updatedFiles = files.filter(
      (file) => file.file !== fileToRemove.file
    );
    setFiles(updatedFiles);
  };

  const createImageThumbnail = (imageUrl: string) => {
    return new Promise((resolve) => {
      const image = new window.Image();

      image.onload = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = 200;
        canvas.height = (canvas.width * image.height) / image.width;
        context?.drawImage(image, 0, 0, canvas.width, canvas.height);
        const thumbnail = canvas.toDataURL("image/png");
        resolve(thumbnail);
      };
      image.src = imageUrl;
    });
  };

  const createVideoThumbnail = (videoUrl: string) => {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      video.onloadedmetadata = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = 80;
        canvas.height = 80;

        context!.fillStyle = "#E5E5E5";
        context!.fillRect(0, 0, canvas.width, canvas.height);

        const playIcon = new window.Image();
        playIcon.src = "video.png";

        playIcon.onload = () => {
          const iconSize = 48;
          const iconX = (canvas.width - iconSize) / 2;
          const iconY = (canvas.height - iconSize) / 2;
          context?.drawImage(playIcon, iconX, iconY, iconSize, iconSize);

          const thumbnail = canvas.toDataURL("image/png");
          resolve(thumbnail);
        };
      };
      video.src = videoUrl;
    });
  };

  return (
    <div className={styles.container}>
      <RemoveFilesPopUp
        open={fileRemovePopupOpen}
        onConfirm={() => {
          setoppenedMediaArea(!oppenedMediaArea);
          setFiles([]);
        }}
        onClose={() => {
          return setFileRemovePopupOpen(false);
        }}
      />
      <div className={styles.relativeWrapper}>
        <PublicationTextArea
          inputRef={inputRef}
          onChange={(e) => {
            setText(e.target.value);
          }}
          text={text}
        />

        <div className={styles.privacyMenuButtonContainer}>
          <div
            className={styles.privacyMenu}
            onClick={() => setPrivacyMenuOpen(!privacyMenuOpen)}
          >
            {renderPrivacyIcon(privacy)}
            <IoIosArrowDown
              className={`${
                privacyMenuOpen ? styles.privacyMenuButtonIcon : ""
              }`}
            />
          </div>
        </div>

        {privacyMenuOpen && (
          <div className={styles.privacyMenuContainer}>
            <div className={styles.privacyMenuOptions}>
              <button
                className={styles.privacyMenuItem}
                onClick={() => {
                  changePrivacy("public");
                }}
              >
                <IoMdGlobe />
                Público
              </button>
              <button
                className={styles.privacyMenuItem}
                onClick={() => {
                  changePrivacy("friends");
                }}
              >
                <IoMdPeople />
                Amigos
              </button>
              <button
                className={styles.privacyMenuItem}
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
            onEmojiClick={(emoji) =>
              handleEmojiClick(emoji, text, setText, inputRef)
            }
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
                {file.thumbnail && (
                  <Image
                    src={file.thumbnail}
                    alt={file.file.name}
                    fill
                    className={styles.mediaItemThumbnail}
                  />
                )}
                {!file.thumbnail && <span>{file.file.name}</span>}
                <button
                  onClick={() => handleFileRemove(file)}
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
          disabled={text.length <= 0 || loading}
          onClick={handlePublish}
        >
          {loading ? (
            <div className="flex w-full justify-center items-center">
              <AiOutlineLoading className="animate-spin" />
            </div>
          ) : (
            <span>Publicar</span>
          )}
        </button>
      )}
    </div>
  );
};
