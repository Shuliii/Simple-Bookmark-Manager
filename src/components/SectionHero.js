import useWindows from "../hooks/use-windows";
import styles from "./SectionHero.module.css";
import BlueButton from "./UI/BlueButton";
import WhiteButton from "./UI/WhiteButton";

import Hero from "../assets/illustration-hero.svg";

const SectionHero = () => {
  const { width } = useWindows();
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
            <BlueButton
              style={
                width > 1024
                  ? {
                      paddingBlock: "10px",
                      paddingInline: "24px",
                      fontSize: "14px",
                      letterSpacing: "0.25px",
                      lineHeight: "28px",
                      fontWeight: "500",
                    }
                  : {
                      paddingBlock: "10px",
                      fontSize: "14px",
                      letterSpacing: "0.25px",
                      lineHeight: "28px",
                      fontWeight: "500",
                      width: "50%",
                    }
              }
            >
              Get it on Chrome
            </BlueButton>
            <WhiteButton
              style={
                width > 1024
                  ? {
                      paddingBlock: "10px",
                      paddingInline: "24px 25px",
                      fontSize: "14px",
                      letterSpacing: "0.25px",
                      lineHeight: "28px",
                      fontWeight: "500",
                    }
                  : {
                      paddingBlock: "10px",
                      fontSize: "14px",
                      letterSpacing: "0.25px",
                      lineHeight: "28px",
                      fontWeight: "500",
                      width: "50%",
                    }
              }
            >
              Get it on Firefox
            </WhiteButton>
          </div>
        </div>
        <div className={styles.heroPicture}>
          <img src={Hero} alt="" />
          <div className={styles.capsuleBlue}></div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
