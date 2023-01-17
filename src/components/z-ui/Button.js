import classes from "./Button.module.css";
import Link from "next/link";

const Button = ({
  variant = "primary",
  onClick,
  link,
  newTab = false,
  children,
}) => {
  if (link) {
    return (
      <Link href={link} legacyBehavior>
        <a
          className={`${classes.button} ${classes[variant]}`}
          target={newTab ? "_black" : "_self"}
        >
          {children}
        </a>
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
