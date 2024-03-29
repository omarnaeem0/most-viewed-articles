import styles from './styles.scss';

export default function ListItem({ item }) {
  return (
    <li className={styles.listItem}>
      <h4>{item.title}</h4>
      <p>{item.abstract}</p>
      {JSON.stringify(item)}
    </li>
  );
}
