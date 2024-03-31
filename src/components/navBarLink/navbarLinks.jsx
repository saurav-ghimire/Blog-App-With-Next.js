"use client"
import Link from "next/link";
import styles from "./navbarLinks.module.css"
import { usePathname } from "next/navigation";

function NavbarLink({item}) {
  
  const pathname = usePathname();

  return (<Link className={`${styles.menulinks} ${pathname === item.path && styles.activeMenuLinks}`} href={item.path}>{item.title}</Link>);
}

export default NavbarLink;