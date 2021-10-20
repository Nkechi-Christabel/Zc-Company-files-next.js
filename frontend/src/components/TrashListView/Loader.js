import React from "react";
import styles from "./trash.module.css";

function Loader() {
  return (
    <div className={`text-center mt-60 ${styles.preloader}`}>
      <div
        className={`text-secondary text-center uppercase tracking-widest text-xs ${styles.loading}`}
      >
        Loading...
      </div>
      <span
        className={`mx-1 inline-block ${styles.line} ${styles.line1}`}
      ></span>
      <span
        className={`mx-1 inline-block ${styles.line} ${styles.line2}`}
      ></span>
      <span
        className={`mx-1 inline-block ${styles.line} ${styles.line3}`}
      ></span>
      <span
        className={`mx-1 inline-block ${styles.line} ${styles.line4}`}
      ></span>
      <span
        className={`mx-1 inline-block ${styles.line} ${styles.line5}`}
      ></span>
      <span
        className={`mx-1 inline-block ${styles.line} ${styles.line6}`}
      ></span>
      <span
        className={`mx-1 inline-block ${styles.line} ${styles.line7}`}
      ></span>
      <span
        className={`mx-1 inline-block ${styles.line} ${styles.line8}`}
      ></span>
      <span
        className={`mx-1 inline-block ${styles.line} ${styles.line9}`}
      ></span>
      <span
        className={`mx-1 inline-block ${styles.line} ${styles.line10}`}
      ></span>
      <span
        className={`mx-1 inline-block ${styles.line} ${styles.line11}`}
      ></span>
      <span
        className={`mx-1 inline-block ${styles.line} ${styles.line12}`}
      ></span>
    </div>
  );
}

export default Loader;
