import Link from "next/link";
import Links from "../Links/Links";
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logo}><Link href="./">Saurav</Link></div>
      <div className="header-menu">
        <div className="menuLinks">
            <Links />
        </div>
      </div>
    </header>
  );
}

export default Navbar;