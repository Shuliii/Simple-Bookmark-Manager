import { useState } from "react";
import styles from "./SectionFeatures.module.css";

const SectionFeatures = () => {
  const [state, setState] = useState(0);

  const clickHandler = (e) => {
    const content = e.target.innerHTML;
    content === "Simple Bookmarking" && setState(0);
    content === "Speedy Searching" && setState(1);
    content === "Easy Sharing" && setState(2);
  };

  let content;

  if (state === 0) {
    content = <div className={styles.featurePicture}>0</div>;
  } else if (state === 1) {
    content = <div>1</div>;
  } else {
    content = <div>2</div>;
  }

  return (
    <section className={styles.features}>
      <div className={`${styles.container} ${styles.flow}`}>
        <div className={styles.featureDescription}>
          <h2>Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li
              className={state === 0 ? styles.active : null}
              onClick={clickHandler}
            >
              Simple Bookmarking
            </li>
            <li
              className={state === 1 ? styles.active : null}
              onClick={clickHandler}
            >
              Speedy Searching
            </li>
            <li
              className={state === 2 ? styles.active : null}
              onClick={clickHandler}
            >
              Easy Sharing
            </li>
          </ul>
        </nav>
        {content}
      </div>
    </section>
  );
};

export default SectionFeatures;
