import { useState } from "react";
import { motion } from "framer-motion";
import BlueButton from "./UI/BlueButton";
import styles from "./SectionFeatures.module.css";
// import { ReactComponent as Tab1 } from "../assets/illustration-features-tab-1.svg";
import Tab1 from "../assets/illustration-features-tab-1.svg";
import Tab2 from "../assets/illustration-features-tab-2.svg";
import Tab3 from "../assets/illustration-features-tab-3.svg";

const SectionFeatures = () => {
  const [state, setState] = useState(0);

  const clickHandler = (e) => {
    const content = e.target.innerHTML;
    content === "Simple Bookmarking" && setState(0);
    content === "Speedy Searching" && setState(1);
    content === "Easy Sharing" && setState(2);
  };

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const slideLeft = {
    initial: {
      x: 75,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  let content;

  if (state === 0) {
    content = (
      <motion.div
        key={Math.random()}
        variants={variants}
        initial="initial"
        animate="animate"
        className={styles.featureTab}
      >
        <div className={styles.featurePicture}>
          <img src={Tab1} alt="" />
          <div className={styles.capsuleBlue}></div>
        </div>
        <motion.div
          variants={slideLeft}
          initial="initial"
          animate="animate"
          className={styles.featureTabDescription}
        >
          <h2>Bookmark in one click</h2>
          <p>
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
          <BlueButton
            style={{
              paddingBlock: "10px",
              paddingInline: "24px",
              fontSize: "14px",
              letterSpacing: "0.25px",
              lineHeight: "28px",
              fontWeight: "500",
            }}
          >
            More Info
          </BlueButton>
        </motion.div>
      </motion.div>
    );
  } else if (state === 1) {
    content = (
      <motion.div
        key={Math.random()}
        variants={variants}
        initial="initial"
        animate="animate"
        className={styles.featureTab}
      >
        <div className={styles.featurePicture} style={{ paddingLeft: 75 }}>
          <img src={Tab2} alt="" />
          <div className={styles.capsuleBlue}></div>
        </div>
        <motion.div
          variants={slideLeft}
          initial="initial"
          animate="animate"
          className={styles.featureTabDescription}
        >
          <h2>Intelligent Search</h2>
          <p>
            Our powerful serch feature will help you find saved sites in no time
            at all. No need to trawl through all of your bookmarks.
          </p>
          <BlueButton
            style={{
              paddingBlock: "10px",
              paddingInline: "24px",
              fontSize: "14px",
              letterSpacing: "0.25px",
              lineHeight: "28px",
              fontWeight: "500",
            }}
          >
            More Info
          </BlueButton>
        </motion.div>
      </motion.div>
    );
  } else {
    content = (
      <motion.div
        key={Math.random()}
        variants={variants}
        initial="initial"
        animate="animate"
        className={styles.featureTab}
      >
        <div className={styles.featurePicture} style={{ paddingLeft: 75 }}>
          <img src={Tab3} alt="" />
          <div className={styles.capsuleBlue}></div>
        </div>
        <motion.div
          variants={slideLeft}
          initial="initial"
          animate="animate"
          className={styles.featureTabDescription}
        >
          <h2>Share your bookmarks</h2>
          <p>
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </p>
          <BlueButton
            style={{
              paddingBlock: "10px",
              paddingInline: "24px",
              fontSize: "14px",
              letterSpacing: "0.25px",
              lineHeight: "28px",
              fontWeight: "500",
            }}
          >
            More Info
          </BlueButton>
        </motion.div>
      </motion.div>
    );
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
