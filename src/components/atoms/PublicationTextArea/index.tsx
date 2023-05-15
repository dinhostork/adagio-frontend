import { useRef, useState } from "react";
import { TextArea } from "./styles"

export interface PublicationTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    inputRef?: React.RefObject<HTMLTextAreaElement>
    text: string
}

export const PublicationTextArea: React.FC<PublicationTextAreaProps> = ({inputRef, text, ...props}) => {

    return(
        <TextArea
          placeholder="Fale sobre suas atualizações musicais"
          value={text}
          ref={inputRef}
            {...props}
        />
    )
}