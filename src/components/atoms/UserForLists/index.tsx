export interface UserForListsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  avatar: string;
  online?: boolean;
  slug?: string;
}

export const UserForLists: React.FC<UserForListsProps> = ({
  name,
  avatar,
  online = false,
  slug,
}) => {
  return (
    <div className="flex flex-row items-center justify-between w-full h-10 px-3 py-2 bg-carbone-primary  rounded-lg cursor-pointer hover:bg-carbone-secondary transition-all">
      <div className="flex flex-row items-center relative ">
        <img className="w-5 h-5 rounded-full " src={avatar} alt={name} />
        <div className="flex flex-col ml-4">
          <span className="text-sm font-normal text-white">{name}</span>
          {online && (
            <div className="absolute w-2 h-2 bg-green-light rounded-full -top-2 left-5" />
          )}
          {slug && (
            <span className="text-xs font-normal text-gray-light"> @{slug}</span>)}
        </div>
      </div>
    </div>
  );
};
