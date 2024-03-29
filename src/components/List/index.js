import ListItem from "../ListItem";
import styles from './styles.module.scss';

export default function List({ results }) {
  return (
    <ul className={styles.list}>
      {results.map((item) => (
        <ListItem item={item} />
      ))}
    </ul>
  );
}
