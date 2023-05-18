import { EmojiClickData } from "emoji-picker-react";
import { SetStateAction } from "react";

export const handleEmojiClick = (emoji: EmojiClickData, text: string, setText: (text: string) => void, inputRef: React.MutableRefObject<any>) => {
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
  export const handleEmojiBoxOutsideClick = (e: MouseEvent, emojiPickerRef: React.MutableRefObject<HTMLDivElement>, set: (value: SetStateAction<boolean>) => void) => {
    if (
      emojiPickerRef.current &&
      !emojiPickerRef.current.contains(e.target as Node)
    ) {
      set(false);
    }
  };


