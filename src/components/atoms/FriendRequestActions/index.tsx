import { BsFillPersonCheckFill, BsFillPersonXFill } from "react-icons/bs";

export const FriendRequestActions: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center w-32">
      <BsFillPersonCheckFill className="text-green-light" />
      <BsFillPersonXFill className="text-red-light" />
    </div>
  );
};
