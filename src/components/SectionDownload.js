import styles from "./SectionDownload.module.css";
import BlueButton from "./UI/BlueButton";
import Chrome from "../assets/logo-chrome.svg";
import Firefox from "../assets/logo-firefox.svg";
import Opera from "../assets/logo-opera.svg";
import Dots from "../assets/bg-dots.svg";

const SectionDownload = () => {
  return (
    <section className={styles.download}>
      <div className={`${styles.container} ${styles.flow}`}>
        <div className={styles.downloadDescription}>
          <h2>Download the extension</h2>
          <p>
            We've got more browser in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <img src={Chrome} alt="" />
            <h3>Add to Chrome</h3>
            <p>Minimum version 62</p>
            <img src={Dots} className={styles.dots} alt="" />
            <BlueButton
              style={{
                paddingBlock: "10px",
                fontSize: "14px",
                lineHeight: "28px",
                letterSpacing: "0.25px",
              }}
            >
              Add & Install Extension
            </BlueButton>
          </div>
          <div className={styles.card}>
            <img src={Firefox} alt="" />
            <h3>Add to Chrome</h3>
            <p>Minimum version 55</p>
            <img src={Dots} className={styles.dots} alt="" />
            <BlueButton
              style={{
                paddingBlock: "10px",
                fontSize: "14px",
                lineHeight: "28px",
                letterSpacing: "0.25px",
              }}
            >
              Add & Install Extension
            </BlueButton>
          </div>
          <div className={styles.card}>
            <img src={Opera} alt="" />
            <h3>Add to Chrome</h3>
            <p>Minimum version 46</p>
            <img src={Dots} className={styles.dots} alt="" />
            <BlueButton
              style={{
                paddingBlock: "10px",
                fontSize: "14px",
                lineHeight: "28px",
                letterSpacing: "0.25px",
              }}
            >
              Add & Install Extension
            </BlueButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDownload;
