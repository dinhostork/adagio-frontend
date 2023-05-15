export interface PublicationTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    inputRef?: React.RefObject<HTMLTextAreaElement>
    text: string
}
