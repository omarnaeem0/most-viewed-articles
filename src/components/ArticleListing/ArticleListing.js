import List from "../List";
import ListItem from "../ListItem";
import styles from './styles.module.scss';

function ArticleListing({results}) {
  return (
    <List className={styles.container}>
      {results.map((item) => (
        <ListItem item={item} />
      ))}
    </List>
  );
}

export default ArticleListing;
