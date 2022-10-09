import { useEffect, useState } from "react";

import styles from "./Navbar.module.scss";

const MobileNavbar = () => {
  const [menu, setMenu] = useState<Element | null>(null);
  const toggleMobileMenu = (menu: Element | null): any => {
    console.log("log me", menu);
    menu && menu.classList.toggle("open");
  };

  useEffect(() => {
    const selectMenu = document.querySelector("hamburger-menu");
    setMenu(selectMenu);
  }, [menu]);

  return (
    <div id={styles["hamburger-icon"]} onClick={() => toggleMobileMenu(menu)}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>

      <ul className={styles["mobile-menu"]}>
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
