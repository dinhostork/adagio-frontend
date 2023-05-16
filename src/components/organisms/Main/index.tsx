import { JamSessionStories } from "@/components/molecules/JamSessionStories";
import { PublicationInput } from "@/components/molecules/PublicationInput";
import { UserPost } from "@/components/molecules/UserPost";

export const Main = () => {
  return (
    <div className="overflow-y-auto mb-32">
      <PublicationInput />
      <JamSessionStories />
      <UserPost />
    </div>
  );
};
