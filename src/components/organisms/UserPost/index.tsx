import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import AvatarImg from "@/components/atoms/Avatar";
import Image from "next/image";
import { useState } from "react";
import { BiCommentEdit, BiFlag, BiHide, BiLike, BiShare } from "react-icons/bi";
import {
  IoIosArrowDown,
  IoIosMore,
  IoMdGlobe,
  IoMdLock,
  IoMdPeople,
} from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import * as styles from "./styles";
import { PostMedia, UserPostProps } from "./types";
import { CommentInput } from "../../molecules/CommentInput";
import { Comment } from "../../molecules/Comment";
import { renderPrivacyIcon } from "@/utils/renderPrivacyIcon";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { PrivacyOption } from "@/components/molecules/PublicationInput/types";

export const UserPost: React.FC<UserPostProps> = ({
  post,
  loggedUserId,
  ...props
}) => {
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [postMenuOpen, setPostMenuOpen] = useState(false);
  const [privacy, setPrivacy] = useState<"public" | "friends" | "only-me">(
    post.privacy
  );
  const [privacyMenuOpen, setPrivacyMenuOpen] = useState(false);

  const changePrivacy = (privacy: PrivacyOption) => {
    setPrivacy(privacy);
    setPrivacyMenuOpen(false);
  };
  return (
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
              <div className={styles.privacyAndTimeContainer}>
                <span className={styles.postTime}>2h</span>
                <div
                  className="flex flex-row"
                  onClick={() =>
                    loggedUserId === post.ownerId
                      ? setPrivacyMenuOpen(!privacyMenuOpen)
                      : null
                  }
                >
                  {renderPrivacyIcon(privacy)}
                  {loggedUserId === post.ownerId && (
                    <IoIosArrowDown
                      className={`${
                        privacyMenuOpen ? styles.privacyMenuButtonIcon : ""
                      }`}
                    />
                  )}
                </div>
                {privacyMenuOpen && (
                  <div className={styles.privacyMenuContainer}>
                    <div className={styles.privacyMenuOptions}>
                      <button
                        className={styles.privacyMenuItem}
                        onClick={() => {
                          changePrivacy("public");
                        }}
                      >
                        <IoMdGlobe />
                        Público
                      </button>
                      <button
                        className={styles.privacyMenuItem}
                        onClick={() => {
                          changePrivacy("friends");
                        }}
                      >
                        <IoMdPeople />
                        Amigos
                      </button>
                      <button
                        className={styles.privacyMenuItem}
                        onClick={() => {
                          changePrivacy("only-me");
                        }}
                      >
                        <IoMdLock />
                        Somente eu
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className={styles.postMenu}
            onClick={() => {
              setPostMenuOpen(!postMenuOpen);
            }}
          >
            <IoIosMore />
          </div>
          {postMenuOpen && (
            <div className={styles.postMenuOptions}>
              {post.ownerId === loggedUserId && (
                <>
                  <button
                    className={styles.postMenuOption}
                    onClick={() => {
                      // TODO - implement edit post
                    }}
                  >
                    Editar
                    <MdOutlineEdit />
                  </button>
                  <button
                    className={styles.postMenuOption}
                    onClick={() => {
                      // TODO - implement delete post
                    }}
                  >
                    Excluir
                    <MdOutlineDelete />
                  </button>
                </>
              )}

              <button
                className={styles.postMenuOption}
                onClick={() => {
                  // TODO - implement hide post
                }}
              >
                Ocultar
                <BiHide />
              </button>
              <button
                className={styles.postMenuOption}
                onClick={() => {
                  // TODO - implement report post
                }}
              >
                Denunciar
                <BiFlag />
              </button>
            </div>
          )}
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
                setShowCommentModal(!showCommentModal);
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
        {showCommentModal &&
          (post.commentsList ? (
            <div className={styles.commentsContainer}>
              <CommentInput
                loggedUserName="Dinho Stork"
                loggedUserPhoto="
                https://avatars.githubusercontent.com/u/5059050?v=4"
                postId={post.id}
              />

              {post.commentsList.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </div>
          ) : (
            ""
          ))}
      </div>
    </div>
  );
};
