import styles from "./Header.module.css";
import RedButton from "./UI/RedButton";

import { ReactComponent as Logo } from "../assets/logo-bookmark.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.flow}`}>
        <div>
          <Logo />
        </div>

        <nav className={styles.nav}>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
          <RedButton
            style={{
              paddingBlock: "12px 11px",
              paddingInline: "33px 32px",
              fontSize: "13px",
              letterSpacing: "1.5px",
              lineHeight: "17px",
              fontWeight: "500",
              textTransform: "Uppercase",
            }}
          >
            Login
          </RedButton>
        </nav>
      </div>
    </header>
  );
};

export default Header;
