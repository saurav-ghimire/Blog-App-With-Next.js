import Link from "next/link";
import Links from "../Links/Links";


function Navbar() {
  return (
    <header>
      <div className="logo"></div>
      <div className="header-menu">
        <Links />
      </div>
      <div className="header-menu"></div>
    </header>
  );
}

export default Navbar;