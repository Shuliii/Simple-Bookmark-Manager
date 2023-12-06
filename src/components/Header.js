import useWindows from "../hooks/use-windows";
import styles from "./Header.module.css";
import RedButton from "./UI/RedButton";

import { ReactComponent as Logo } from "../assets/logo-bookmark.svg";
import Hamburger from "../assets/icon-hamburger.svg";

const Header = () => {
  const { width } = useWindows();
  let content = (
    <div>
      <img src={Hamburger} />
    </div>
  );

  if (width > 1024) {
    content = (
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
    );
  }
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.flow}`}>
        <div>
          <Logo />
        </div>

        {content}
      </div>
    </header>
  );
};

export default Header;
