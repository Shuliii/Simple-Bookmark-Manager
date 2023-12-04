import styles from "./FooterHero.module.css";
import RedButton from "./UI/RedButton";

const FooterHero = () => {
  return (
    <div className={styles.footerHero}>
      <div className={`${styles.container} ${styles.flow} ${styles.content}`}>
        <p>35,000+ Already Joined</p>
        <h3>Stay up-to-date with what we're doing</h3>
        <form>
          <input type="email" placeholder="Enter your email address" />
          <RedButton type="submit">Contact Us</RedButton>
        </form>
      </div>
    </div>
  );
};

export default FooterHero;
