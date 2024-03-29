import { useContext } from "react";
import ArticleListing from "../ArticleListing";
import ArticleDetails from "../ArticleDetails";
import { MainContext } from "../../context/MainContext";

function Articles() {
  const { selectedArticle } = useContext(MainContext);
  return selectedArticle === null ? <ArticleListing /> : <ArticleDetails />;
}

export default Articles;
