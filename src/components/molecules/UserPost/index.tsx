import AvatarImg from "@/components/atoms/Avatar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiCommentEdit, BiLike, BiShare } from "react-icons/bi";
import { IoIosMore } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import * as styles from "./styles";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export interface PostMedia {
  id: string;
  type: "image" | "video" | "audio";
  url: string;
  thumbnail: string;
}
export interface Post {
  id: string;
  ownerName: string;
  ownerPhoto: string;
  text: string;
  likes: number;
  comments: number;
  shares: number;
  liked: boolean;
  media: PostMedia[];
}

const randomPostsGenerator = (count: number): Post[] => {
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

export const UserPost = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showFullText, setShowFullText] = useState(false);
  useEffect(() => {
    setPosts(randomPostsGenerator(10));
  }, []);
  return (
    <div className="overflow-y-auto">
      {posts.map((post: Post) => (
        <div className={styles.postWrapper} key={post.id}>
          <div className={styles.postContainer}>
            <div className={styles.postHeader}>
              <div className={styles.ownerContainer}>
                <AvatarImg
                  src={post.ownerPhoto}
                  alt={post.ownerName}
                  width={32}
                  height={32}
                  className={styles.ownerPhoto}
                />
                <div className={styles.ownerInfo}>
                  <span className={styles.ownerName}>{post.ownerName}</span>
                  <span className={styles.postTime}>2h</span>
                </div>
              </div>
              <div
                className={styles.postMenu}
                onClick={() => {
                  // TODO - implement post menu
                }}
              >
                <IoIosMore />
              </div>
            </div>
            <div className={styles.postContent}>
              <span className={styles.postText}>
                {showFullText ? post.text : post.text.slice(0, 500)}
                {post.text.length > 500 && (
                  <>
                    {showFullText ? (
                      <span
                        className={styles.viewMoreLess}
                        onClick={() => setShowFullText(false)}
                      >
                        Ver menos
                      </span>
                    ) : (
                      <span
                        className={styles.viewMoreLess}
                        onClick={() => setShowFullText(true)}
                      >
                        Ver mais...
                      </span>
                    )}
                  </>
                )}
              </span>
            </div>
            <div className={styles.mediaContainer}>
              {post.media.length > 0 && (
                <Swiper
                  pagination={{
                    type: "progressbar",
                  }}
                  centeredSlides
                  navigation={true}
                  modules={[Pagination, Navigation]}
                >
                  {post.media.map((media: PostMedia) => (
                    <SwiperSlide key={media.id}>
                      {media.type === "image" && (
                        <Image
                          src={media.url}
                          alt={media.id}
                          width={800}
                          height={600}
                        />
                      )}
                      {media.type === "video" && (
                        <video
                          src={media.url}
                          loop
                          controls
                          className={styles.mediaVideo}
                        />
                      )}
                      {media.type === "audio" && (
                        <audio
                          src={media.url}
                          controls
                          className={styles.mediaAudio}
                        />
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
            <div className={styles.postFooter}>
              <div className={styles.footerButtons}>
                <button
                  className={`${styles.footerButton} ${
                    post.liked ? styles.likedButton : ""
                  }`}
                  onClick={() => {
                    // TODO - implement like
                    post.liked = !post.liked;
                    post.liked ? post.likes++ : post.likes--;
                    setPosts([...posts]);
                  }}
                >
                  <BiLike size={16} className={styles.likeIcon} />
                  Curtir
                  {post.likes > 0 && (
                    <span className={styles.likeCount}>{post.likes}</span>
                  )}
                </button>
                <button
                  className={styles.footerButton}
                  onClick={() => {
                    // TODO - implement comment modal
                  }}
                >
                  <BiCommentEdit size={16} className={styles.commentIcon} />
                  Comentar
                  {post.comments > 0 && (
                    <span className={styles.commentCount}>{post.comments}</span>
                  )}
                </button>
                <button
                  className={styles.footerButton}
                  onClick={() => {
                    // TODO - implement share modal
                  }}
                >
                  <BiShare size={16} className={styles.shareIcon} />
                  Compartilhar
                  {post.shares > 0 && (
                    <span className={styles.shareCount}>{post.shares}</span>
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
