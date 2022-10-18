import { useState } from "react";

import styles from "./Navbar.module.scss";

const MobileNavbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={styles["burger-wrapper"]}>
      <span onClick={() => setIsClicked((prev) => !prev)}>
        {isClicked ? (
          <img src="./close.svg" alt="Close menu" width={35} height={35} />
        ) : (
          <img src="./menu.svg" alt="Open menu" width={35} height={35} />
        )}
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
