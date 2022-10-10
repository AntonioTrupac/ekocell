import { useState } from "react";

import styles from "./Navbar.module.scss";

const MobileNavbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  console.log(isClicked);

  return (
    <div id={styles["hamburger-icon"]}>
      <div onClick={() => setIsClicked((prev) => !prev)}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <ul
        className={
          isClicked
            ? `${styles.open} ${styles["mobile-menu"]}`
            : `${styles["mobile-menu"]}`
        }
      >
        <li>
          <a href="/naslovna" className={styles.link}>
            Naslovna
          </a>
        </li>
        <li>
          <a href="/o-nama" className={styles.link}>
            O nama
          </a>
        </li>
        <li>
          <a href="/izolacija" className={styles.link}>
            Izolacija
          </a>
        </li>
        <li>
          <a href="/kontakt" className={styles.link}>
            Kontakt
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
