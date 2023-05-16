import AvatarImg from "@/components/atoms/Avatar";
import { useEffect, useState } from "react";
import { BiCommentEdit, BiLike, BiShare } from "react-icons/bi";
import { IoIosMore } from "react-icons/io";

export interface Post {
  id: string;
  ownerName: string;
  ownerPhoto: string;
  text: string;
  likes: number;
  comments: number;
  shares: number;
  liked: boolean;
}

const randomPostsGenerator = (count: number): Post[] => {
  const posts: Post[] = [];
  for (let i = 0; i < count; i++) {
    posts.push({
      id: i.toString(),
      ownerName: "John Doe",
      ownerPhoto: "https://picsum.photos/seed/" + i + "/32",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nun ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nun ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nun ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nun ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nun ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nun ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nisl.",
      likes: Math.floor(Math.random() * 100),
      comments: Math.floor(Math.random() * 100),
      shares: Math.floor(Math.random() * 100),
      liked: Math.random() > 0.5,
    });
  }
  return posts;
};

export const UserPost = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showFullText, setShowFullText] = useState(false);
  useEffect(() => {
    setPosts(randomPostsGenerator(10));
  }, []);
  return (
    <div className="overflow-y-auto">
      {posts.map((post: Post) => (
        <div
          className="flex flex-col justify-between w-full pr-4 pl-4 max-w-3xl relative mt-8"
          key={post.id}
        >
          <div className="flex flex-col bg-carbone w-full h-64 rounded-md">
            <div className="bg-night w-full h-48 rounded-t-md px-10 flex flex-row items-center justify-between">
              <div className="flex flex-row cursor-pointer">
                <AvatarImg
                  src={post.ownerPhoto}
                  alt={post.ownerName}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="flex flex-col ml-4 justify-center">
                  <span className="text-white font-medium text-sm">
                    {post.ownerName}
                  </span>
                  <span className="text-gray-light font-light text-xs">2h</span>
                </div>
              </div>
              <div
                className="flex flex-row ml-auto items-center text-gray-dark hover:text-white transition ease-in-out cursor-pointer"
                onClick={() => {
                  // TODO - implement post menu
                }}
              >
                <IoIosMore />
              </div>
            </div>
            <div className="flex flex-col w-full h-full p-4 px-10">
              <span className="text-white font-light text-sm">
                {showFullText ? post.text : post.text.slice(0, 300)}
                {post.text.length > 300 && (
                  <>
                    {showFullText ? (
                      <span
                        className="text-blue-light font-light text-sm cursor-pointer"
                        onClick={() => setShowFullText(false)}
                      >
                        Ver menos
                      </span>
                    ) : (
                      <span
                        className="text-blue-light font-light text-sm cursor-pointer"
                        onClick={() => setShowFullText(true)}
                      >
                        Ver mais
                      </span>
                    )}
                  </>
                )}
              </span>
            </div>
            <div className="flex flex-row w-full h-32 rounded-b-md bg-night-light justify-between items-center px-10 bg-night ">
              <div className="flex flex-row items-center justify-between w-full">
                <button
                  className={`flex flex-row items-center w-auto font-light text-xs  ${
                    post.liked ? "text-blue-light" : "text-white"
                  }`}
                  onClick={() => {
                    // TODO - implement like
                    post.liked = !post.liked;
                    post.liked ? post.likes++ : post.likes--;

                    setPosts([...posts]);
                  }}
                >
                  <BiLike size={16} className="text-xl mr-2" />
                  Curtir
                  {post.likes > 0 && (
                    <span className="font-light text-xs ml-2">
                      {post.likes}
                    </span>
                  )}
                </button>
                <button
                  className="flex flex-row items-center w-auto font-light text-xs"
                  onClick={() => {
                    // TODO - implement comment modal
                  }}
                >
                  <BiCommentEdit
                    size={16}
                    className="text-white text-xl mr-2"
                  />
                  Comentar
                  {post.comments > 0 && (
                    <span className="text-white font-light text-xs ml-2">
                      {post.comments}
                    </span>
                  )}
                </button>
                <button
                  className="flex flex-row items-center w-auto font-light text-xs"
                  onClick={() => {
                    // TODO - implement share modal
                  }}
                >
                  <BiShare size={16} className="text-white text-xl mr-2" />
                  Compartilhar
                  {post.shares > 0 && (
                    <span className="text-white font-light text-xs ml-2">
                      {post.shares}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
