import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.css";

type ButtonProps = {
  children: ReactNode;
  to?: string; // If provided, renders a Link
  onClick?: () => void; // If provided, renders a button
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

export function Button({
  children,
  to,
  onClick,
  icon,
  iconPosition = "left",
}: ButtonProps) {
  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      <span>{children}</span>
      {icon && iconPosition === "right" && icon}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={styles.button}>
        {content}
      </Link>
    );
  }

  // Default to a normal button
  return (
    <button onClick={onClick} className={styles.button}>
      {content}
    </button>
  );
}
