import { useState } from "react";

import styles from "./Navbar.module.scss";

const MobileNavbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div id={styles["hamburger-icon"]}>
      <span onClick={() => setIsClicked((prev) => !prev)}>
        <div
          className={
            isClicked ? `${styles.open} ${styles.bar1}` : `${styles.bar1}`
          }
        ></div>
        <div
          className={
            isClicked ? `${styles.open} ${styles.bar2}` : `${styles.bar2}`
          }
        ></div>
        <div
          className={
            isClicked ? `${styles.open} ${styles.bar3}` : `${styles.bar3}`
          }
        ></div>
      </span>

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
