import styles from "./SectionHero.module.css";

import { ReactComponent as Hero } from "../assets/illustration-hero.svg";

const SectionHero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} ${styles.grid}`}>
        <div className={styles.heroDescription}>
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className={styles.buttonContainer}>
            <button>Get it on Chrome</button>
            <button>Get it on Firefox</button>
          </div>
        </div>
        <div className={styles.heroPicture}>
          <Hero className={styles.img} />
          <div className={styles.capsuleBlue}></div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
