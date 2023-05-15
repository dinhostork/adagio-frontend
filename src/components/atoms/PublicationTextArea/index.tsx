import { TextArea } from "./styles"
import { PublicationTextAreaProps } from "./types";


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