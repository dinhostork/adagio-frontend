export interface InputTypes extends React.InputHTMLAttributes<HTMLInputElement>{
  placeholder?: string;
  type?: string;
  id?: string;
  icon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}
