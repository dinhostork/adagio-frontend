import { useEffect, useRef, useState } from "react";
import AvatarImg from "@/components/atoms/Avatar";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";
import { IoClose } from "react-icons/io5";
import { GrEmoji } from "react-icons/gr";
import { MdPermMedia } from "react-icons/md";
import { TbFileUpload } from "react-icons/tb";
import { MediaFile } from "./types";
import { PublicationTextArea } from "@/components/atoms/PublicationTextArea";

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
    if (emojiPickerRef.current && !emojiPickerRef.current.contains(e.target as Node)) {
      setShowEmojiPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  });

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // const uploadedFiles = await Promise.all(Array.from(event.target.files).map(upload));
    // const updatedFiles = [...files, ...uploadedFiles];
    // setFiles(updatedFiles);
    // console.log(files);
  };

  const handleFileRemove = (publicId: string) => {
    // deleteFile(publicId).then((res) => {
    //   const newFiles = files.filter((file) => file.publicId !== publicId);
    //   setFiles(newFiles);
    // }).catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col justify-between w-full pr-4 pl-4 max-w-3xl relative">
      <div className="relative">
        <PublicationTextArea
          inputRef={inputRef}
          onChange={(e) => {
            setText(e.target.value);
          }}
          text={text}
        />

        <div className="absolute bottom-2 right-4">
          <button
            onClick={() => setShowEmojiPicker(true)}
            className="focus:outline-none"
          >
            <span role="img" aria-label="emoji-button">
              <GrEmoji />
            </span>
          </button>
          <button
            className="ml-2 focus:outline-none"
          >
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
        className="absolute top-5 left-10"
      />

      {showEmojiPicker && (
        <div ref={emojiPickerRef} className="absolute -top-24 right-2 z-10">
          <button
            onClick={() => setShowEmojiPicker(false)}
            className="focus:outline-none bg-carbone"
          >
            <IoClose className="absolute right-0 -top-2 text-white" size={24} />
          </button>
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            theme={"dark" as Theme}
            height={400}
          />
        </div>
      )}

      {oppenedMediaArea && (
        <div className="w-full h-24 bg-carbone rounded-md mt-4 flex items-center flex-row gap-4 overflow-scroll">
          <div className="w-10 h-10 flex flex-row justify-center items-center border-2 border-gray-dark ml-8 transition ease-in-out">
            <label htmlFor="file-upload" className="cursor-pointer">
              <TbFileUpload
                className="text-gray-dark transition ease-in-out hover:text-white"
                size={24}
              />
            </label>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileSelect}
              multiple
            />
          </div>

          {files.map((file, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-between items-center w-20 h-20 border-2 border-gray-dark relative"
              >
                <img src={file.secureUrl} alt={file.name} />
                <button
                  onClick={() => handleFileRemove(file.publicId)}
                  className="absolute right-0 top-0"
                >
                  <IoClose className="text-white" size={24} />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {text.length > 0 && (
        <button
          className="bg-blue-light rounded-md h-10 mt-4 disabled:bg-carbone transition ease-in-out hover:bg-b shadow-md"
          disabled={text.length <= 0}
          onClick={() => {
            files.map(async (file: MediaFile) => {});
          }}
        >
          Publicar
        </button>
      )}
    </div>
  );
};
