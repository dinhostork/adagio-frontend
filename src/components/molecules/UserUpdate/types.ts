export interface UserUpdateProps extends React.HTMLAttributes<HTMLDivElement>{
    userName: string;
    text: string;
    picture: string;
    date?: string | undefined;
    link: string ;
}