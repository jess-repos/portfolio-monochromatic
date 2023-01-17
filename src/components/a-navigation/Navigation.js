import classes from "./Navigation.module.css";

import { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navToggler = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <nav className={classes.nav}>
      <Link href="/">
        <div className={classes.logo}>
          <span></span>ark
        </div>
      </Link>

      <ul
        className={`${classes.items} ${isNavOpen && classes.toggle}`}
        onClick={navToggler}
      >
        <li>
          <Link href={"/"}>HOME</Link>
        </li>
        <li className={classes.highlight}>
          <Link href={"/#portfolio"}>PORTFOLIO</Link>
        </li>
        <li>
          <Link href={"/#skills"}>SKILLS</Link>
        </li>
        <li>
          <Link href={"/#services"}>SERVICES</Link>
        </li>
        <li>
          <Link href={"/#contact"}>CONTACT</Link>
        </li>
      </ul>
      <div
        className={`${classes.burger} ${isNavOpen && classes.toggle}`}
        onClick={navToggler}
      >
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line3}></div>
      </div>
    </nav>
  );
};

export default Navigation;
