export interface ChatUserProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  avatar: string;
  online?: boolean;
}

export const ChatUser: React.FC<ChatUserProps> = ({ name, avatar, online=false }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full h-16 px-4 py-2 bg-carbone-primary rounded-lg cursor-pointer">
      <div className="flex flex-row items-center relative">
        <img className="w-10 h-10 rounded-full " src={avatar} alt={name} />
        <div className="flex flex-col ml-2">
          <span className="text-sm font-normal text-white">{name}</span>
          {online && (
            <div className="absolute w-2 h-2 bg-green-light rounded-full -top-1 left-9" />
          )}
        </div>
      </div>
      <div className="flex flex-row items-center">
        <button className="w-4 h-4 mr-2 text-white bg-red-500 rounded-full" />
        <button className="w-4 h-4 text-white bg-yellow-500 rounded-full" />
      </div>
    </div>
  );
};
