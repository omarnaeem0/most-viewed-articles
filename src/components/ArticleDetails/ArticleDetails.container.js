import { useContext } from "react";
import ArticleDetails from "./ArticleDetails";
import { MainContext } from "../../context/MainContext";

function ArticleDetailsContainer() {
  const { results, selectedArticle, setSelectedArticle } =
    useContext(MainContext);
  const data = results[selectedArticle];
  return <ArticleDetails data={data} setSelectedArticle={setSelectedArticle} />;
}

export default ArticleDetailsContainer;
