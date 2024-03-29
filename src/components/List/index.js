import classNames from "classnames";
import styles from "./styles.module.scss";

export default function List({ children, className }) {
  return <ul className={classNames(styles.list, className)}>{children}</ul>;
}
