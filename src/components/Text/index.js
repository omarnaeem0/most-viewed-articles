import styles from "./styles.module.scss";
import classNames from "classnames";

/* variants: date | heading | section | title | paragraph | cta */

export default function Text({ variant, children, className }) {
  return (
    <p className={classNames(styles[variant || "title"], className)}>
      {children}
    </p>
  );
}
