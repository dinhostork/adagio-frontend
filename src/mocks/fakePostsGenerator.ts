import { Post } from "@/components/organisms/UserPost/types";
import {v4 as uuid4} from "uuid";

export const randomPostsGenerator = (count: number): Post[] => {
    const posts: Post[] = [];
    for (let i = 0; i < count; i++) {
      posts.push({
        id: uuid4(),
        ownerName: "John Doe",
        ownerPhoto: "https://picsum.photos/seed/" + i + "/32",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nunc",
        likes: Math.floor(Math.random() * 100),
        comments: Math.floor(Math.random() * 100),
        shares: Math.floor(Math.random() * 100),
        liked: Math.random() > 0.5,
        media: [
          {
            id: uuid4(),
            type: "image",
            url: "https://picsum.photos/seed/" + i + "/800/600",
            thumbnail: "https://picsum.photos/seed/" + i + "/800/600",
          },
          {
            id: uuid4(),
            type: "image",
            url: "https://picsum.photos/seed/" + i + 2 + "/800/600",
            thumbnail: "https://picsum.photos/seed/" + i + "/800/600",
          },
          {
            id: uuid4(),
            type: "image",
            url: "https://picsum.photos/seed/" + i + 1 + "/800/600",
            thumbnail: "https://picsum.photos/seed/" + i + "/800/600",
          },
          {
            id: uuid4(),
            type: "video",
            url: "https://www.w3schools.com/html/mov_bbb.mp4",
            thumbnail: "https://picsum.photos/seed/" + i + "/800/600",
          },
          {
            id: uuid4(),
            type: "audio",
            url: "https://www.w3schools.com/html/horse.ogg",
            thumbnail: "https://picsum.photos/seed/" + i + "/800/600",
          },
        ],
        commentsList: [
          {
            id: uuid4(),
            ownerName: "John Doe",
            ownerPhoto: "https://picsum.photos/seed/" + i+1 + "/32",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nunc",
            createdAt: new Date(),
            updatedAt: new Date(),
            
          },
          {
            id: uuid4(),
            ownerName: "John Doe",
            ownerPhoto: "https://picsum.photos/seed/" + i+1 + "/32",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nunc",
            createdAt: new Date(),
            updatedAt: new Date(),
            
          },
          {
            id: uuid4(),
            ownerName: "John Doe",
            ownerPhoto: "https://picsum.photos/seed/" + i+1 + "/32",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nunc",
            createdAt: new Date(),
            updatedAt: new Date(),
            
          },
          {
            id: uuid4(),
            ownerName: "John Doe",
            ownerPhoto: "https://picsum.photos/seed/" + i+1 + "/32",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nunc",
            createdAt: new Date(),
            updatedAt: new Date(),
            
          }
        ],

      });
    }
    return posts;
  };
  