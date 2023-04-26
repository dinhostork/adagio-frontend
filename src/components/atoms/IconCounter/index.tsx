import { IconCounterProps } from "./types";

export const IconCounter: React.FC<IconCounterProps> = ({ count }) => {
  return (
    <div className="flex items-center justify-center w-6 h-6 text-xs text-white bg-red-light rounded-full absolute -top-4 -right-4">
        {count > 99 ? '99+' : count}
    </div>
  );
};
