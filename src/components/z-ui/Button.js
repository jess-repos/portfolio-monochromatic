import classes from "./Button.module.css";
import Link from "next/link";

const Button = ({ variant = "primary", onClick, link, children }) => {
  if (link) {
    return (
      <Link href={link} legacyBehavior>
        <a className={`${classes.button} ${classes[variant]}`}>{children}</a>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${classes.button} ${classes[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
