export interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    info?: string;
    forgotPassword: boolean;
    register?: boolean;
    submit: (e: React.FormEvent<HTMLFormElement>) => void;
    loading?: boolean;
    error?: string;
}