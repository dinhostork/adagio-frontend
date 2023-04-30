export interface NotificationBlockProps extends React.HTMLAttributes<HTMLDivElement>{
    title: string;
    text: string;
    picture: string;
    date?: string | undefined;
}