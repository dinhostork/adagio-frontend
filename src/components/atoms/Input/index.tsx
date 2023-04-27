import { InputAtom, iconWrapper, inputWrapper } from "./styles";
import { InputTypes } from "./types";

export const Input: React.FC<InputTypes> = ({
  icon,
  placeholder,
  type,
  id,
  onChange,
}) => {
  return (
    <div className={inputWrapper}>
      <div className={iconWrapper}>{icon}</div>
      <InputAtom
        placeholder={placeholder}
        type={type}
        id={id}
        onChange={onChange}
      />
    </div>
  );
};
