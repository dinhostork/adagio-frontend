import Image from "next/image";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import * as styles from "./styles";
import { JamSession } from "./types";
import { randomStoriesGenerator } from "@/utils/fakeJamStoriesGenerator";

export const JamSessionStories = () => {
  const [stories, setStories] = useState<JamSession[]>([]);

  useEffect(() => {
    setStories(randomStoriesGenerator(10));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <span className={styles.title}>Jam Sessions</span>
        <div className={styles.itemsContainer}>
          <div className={styles.itemContainer}>
            <div className={styles.addButtonContainer}>
              <FiPlus />
            </div>
            <span className={styles.memberCount}>Iniciar Jam</span>
          </div>
          {stories.map((story) => (
            <div className={styles.itemContainer} key={story.id}>
              <div className={styles.imageContainer}>
                <Image
                  src={story.ownerPhoto}
                  alt={story.ownerName}
                  width={112}
                  height={112}
                  className={styles.image}
                />
                <div className={styles.gradientOverlay}>
                  <span className={styles.genre}>{story.genre}</span>
                  <span className={styles.memberCountOverlay}>
                    {story.members > 0 ? "+" + story.members : ""}
                  </span>
                </div>
              </div>
              <span className={styles.ownerName}>
                {story.ownerName.length > 12
                  ? story.ownerName.split(" ")[0]
                  : story.ownerName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
