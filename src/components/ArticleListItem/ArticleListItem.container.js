import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import ListItem from "../ListItem";

function ArticleListItemContainer({ item, index }) {
  const { setSelectedArticle } = useContext(MainContext);
  return <ListItem item={item} index={index} onClick={setSelectedArticle} />;
}

export default ArticleListItemContainer;
