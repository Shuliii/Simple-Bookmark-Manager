import styles from "./Footer.module.css";
// import { ReactComponent as Logo } from "../assets/logo-bookmark.svg";
import Logo from "../components/UI/Logo";
import Facebook from "../assets/icon-facebook.svg";
import Twitter from "../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.container} ${styles.flow}`}>
        <div className={styles.description}>
          {/* <img src={Logo} alt="Logo" /> */}
          <Logo />
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.socialMedia}>
          <img src={Facebook} alt="facebook logo" />
          <img src={Twitter} alt="twitter logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
