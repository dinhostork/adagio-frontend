import { JamSessionStories } from "@/components/molecules/JamSessionStories";
import { PublicationInput } from "@/components/molecules/PublicationInput";
import { UserPost } from "@/components/molecules/UserPost";
import { Post } from "@/components/molecules/UserPost/types";
import { randomPostsGenerator } from "@/utils/fakePostsGenerator";
import { useEffect, useState } from "react";

export const Main = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    setPosts(randomPostsGenerator(10));
  }, []);

  return (
    <div className="overflow-y-auto pt-2 h-full pb-1 mb-4 flex-grow">
      <PublicationInput />
      <JamSessionStories />
      {posts.map((post) => (
        <UserPost post={post} key={post.id} />
      ))}
    </div>
  );
};
