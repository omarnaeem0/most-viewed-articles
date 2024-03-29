import ArticleListItem from "../ArticleListItem";
import List from "../List";
import styles from "./styles.module.scss";

function ArticleListing({ results }) {
  return (
    <List className={styles.container}>
      {results.map((item, index) => (
        <ArticleListItem item={item} index={index} key={item.id} />
      ))}
    </List>
  );
}

export default ArticleListing;
