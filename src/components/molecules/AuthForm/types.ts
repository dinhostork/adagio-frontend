export interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    info?: string;
    forgotPassword: boolean;
    register?: boolean;
  }