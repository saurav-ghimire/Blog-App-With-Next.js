"use client"
import { useState } from "react";
import NavbarLink from "../navBarLink/navbarLinks";
import styles from "./Links.module.css";

function Links() {
  const [showMenu, setShowMenu] = useState(true);
  const menuLinks = [
    { title: 'home', path: '/' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
    { title: 'blog', path: '/blog' }
  ];

  const session = true;
  const isAdmin = true;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      {/* Mobile Menu Button */}
      <button className={styles.menuButton} onClick={toggleMenu}>
        Menu
      </button>

      {/* Render regular menu links */}
      {showMenu && (
        <div className={styles.menuLinks}>
          {menuLinks.map(data => (
            <NavbarLink key={data.title} item={data} />
          ))}

          {/* Conditional Rendering for Admin and Logout Links */}
          {session && (
            <>
              {isAdmin && <NavbarLink item={{ title: 'Admin', path: '/admin' }} />}
              
              <button className={styles.logoutBtn}>Logout</button>
            </>
          )}

          {/* Show Login if not in session */}
          {!session && <NavbarLink item={{ title: 'Login', path: '/login' }} />}
        </div>
      )}
    </div>
  );
}

export default Links;
