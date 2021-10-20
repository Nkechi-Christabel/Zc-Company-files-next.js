import Trash from "./Trash";
import styles from "./trash.module.css";
import useFetch from "./useFetch";

function TrashApp() {
  return (
    <div className={`TrashApp h-full w-full bg-trashViewBg ${styles.font}`}>
      <Trash />
    </div>
  );
}

export default TrashApp;
