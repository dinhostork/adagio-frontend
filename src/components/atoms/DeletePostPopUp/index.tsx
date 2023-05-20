import { MdOutlineDelete } from "react-icons/md";
import { deletePost } from "./actions";
import { DeletePostPopUpProps } from "./types";
import * as styles from "./styles";

export const DeletePostPopUp: React.FC<DeletePostPopUpProps> = ({
  postId,
  open,
  onClose,
}) => {
  return (
    <div
      className={styles.backdrop}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      style={{ display: open ? "block" : "none" }}
    >
      <div className={styles.container}>
        <div className={styles.backdropOverlay} aria-hidden="true"></div>
        <span className={styles.hiddenScreenReader} aria-hidden="true">
          &#8203;
        </span>
        <div className={styles.dialogContainer}>
          <div className={styles.dialogHeader}>
            <div className={styles.iconContainer}>
              <div className={styles.iconFullContainer}>
                <MdOutlineDelete
                  className={styles.deleteIcon}
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className={styles.dialogContent}>
              <h3 className={styles.dialogTitle}>Excluir publicação</h3>
              <div className={styles.dialogDescription}>
                <p className={styles.information}>
                  Tem certeza que deseja excluir esta publicação? Esta ação não
                  pode ser desfeita.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.dialogButtonsContainer}>
            <button
              type="button"
              className={styles.confirmButton}
              onClick={() => {
                deletePost(postId);
                onClose();
              }}
            >
              Excluir
            </button>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
