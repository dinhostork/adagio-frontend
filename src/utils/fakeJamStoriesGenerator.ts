import { JamSession } from "@/components/molecules/JamSessionStories/types";

export const randomStoriesGenerator = (length: number) => {
    const stories: JamSession[] = [];
    for (let i = 0; i < length; i++) {
      stories.push({
        id: `${i}`,
        name: `Jam Session ${i}`,
        ownerName: `Owner ${i}`,
        ownerPhoto: `https://picsum.photos/seed/${i}/112`,
        members: i,
        date: "2021-09-01",
        genre: "Rock",
      });
    }
    return stories;
  };