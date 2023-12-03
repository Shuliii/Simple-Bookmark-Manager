import styles from "./Header.module.css";
// import Logo from "../assets/logo-bookmark.svg";

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
          <button>Login</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
