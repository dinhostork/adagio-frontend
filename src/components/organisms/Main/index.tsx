import { JamSessionStories } from "@/components/molecules/JamSessionStories";
import { PublicationInput } from "@/components/molecules/PublicationInput";
import { UserPost } from "@/components/molecules/UserPost";

export const Main = () => {
  return (
    <div className="overflow-y-auto pt-2 h-full pb-1 mb-4 flex-grow">
      <PublicationInput />
      <JamSessionStories />
      <UserPost />
    </div>
  );
};
