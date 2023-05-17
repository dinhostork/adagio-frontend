import { Post } from "@/components/molecules/UserPost/types";

export const randomPostsGenerator = (count: number): Post[] => {
    const posts: Post[] = [];
    for (let i = 0; i < count; i++) {
      posts.push({
        id: i.toString(),
        ownerName: "John Doe",
        ownerPhoto: "https://picsum.photos/seed/" + i + "/32",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nunc",
        likes: Math.floor(Math.random() * 100),
        comments: Math.floor(Math.random() * 100),
        shares: Math.floor(Math.random() * 100),
        liked: Math.random() > 0.5,
        media: [
          {
            id: i.toString(),
            type: "image",
            url: "https://picsum.photos/seed/" + i + "/800/600",
            thumbnail: "https://picsum.photos/seed/" + i + "/800/600",
          },
          {
            id: (i + 1).toString(),
            type: "image",
            url: "https://picsum.photos/seed/" + i + 2 + "/800/600",
            thumbnail: "https://picsum.photos/seed/" + i + "/800/600",
          },
          {
            id: (i + 2).toString(),
            type: "image",
            url: "https://picsum.photos/seed/" + i + 1 + "/800/600",
            thumbnail: "https://picsum.photos/seed/" + i + "/800/600",
          },
          {
            id: (i + 3).toString(),
            type: "video",
            url: "https://www.w3schools.com/html/mov_bbb.mp4",
            thumbnail: "https://picsum.photos/seed/" + i + "/800/600",
          },
          {
            id: (i + 4).toString(),
            type: "audio",
            url: "https://www.w3schools.com/html/horse.ogg",
            thumbnail: "https://picsum.photos/seed/" + i + "/800/600",
          },
        ],
      });
    }
    return posts;
  };
  