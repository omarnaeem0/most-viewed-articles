import ArticleListItem from "../ArticleListItem";
import List from "../List";

function ArticleListing({ results }) {
  return (
    <List>
      {results.map((item, index) => (
        <ArticleListItem item={item} index={index} key={item.id} />
      ))}
    </List>
  );
}

export default ArticleListing;
