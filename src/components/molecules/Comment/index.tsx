import { IoIosMore } from "react-icons/io";
import { CommentType, CommentsProps } from "./types";
import AvatarImg from "@/components/atoms/Avatar";

export const Comment: React.FC<CommentsProps> = ({ comment }) => {
  return (
    <div className="flex flex-col w-full" key={comment.id}>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row h-auto">
          <AvatarImg
            src={comment.ownerPhoto}
            alt={comment.ownerName}
            width={16}
            height={16}
            className="rounded-full"
          />
          <div className="flex flex-col ml-2">
            <div className="flex flex-row justify-between h-auto ">
              <div>
                <span className="text-white font-normal text-sm cursor-pointer h-auto">
                  {comment.ownerName}
                </span>
                <span className="text-gray-light fonte-normal text-sm ml-4">
                  2h
                </span>
              </div>
              <div className="flex flex-row  h-auto right-2 bottom-1 gap-2">
                <button
                  className="text-gray-dark font-normal text-sm cursor-pointer h-auto hover:text-white transition-all ease-in-out"
                  onClick={() => {
                    // TODO - implement like comment
                  }}
                >
                  <IoIosMore />
                </button>
              </div>
            </div>
            <span className="text-white font-light text-sm cursor-text h-auto mt-2">
              {comment.text}
            </span>
            <div className="flex flex-row justify-start h-auto mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
