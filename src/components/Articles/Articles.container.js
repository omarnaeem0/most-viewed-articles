import { useContext, useEffect, useState } from "react";
import ArticleListing from "../ArticleListing";
import ArticleDetails from "../ArticleDetails";
import { MainContext } from "../../context/MainContext";
import Loader from "../Loader";
import { fetchMostPopularArticles } from "../../api";

function Articles() {
  const {  results, setResults, selectedArticle } = useContext(MainContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    (async function () {
      try {
        const data = await fetchMostPopularArticles();
        setResults(data.results);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    })();
  }, [setResults]);
  if (loading) {
    return <Loader color={"black"} />;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return selectedArticle === null ? <ArticleListing results={results}/> : <ArticleDetails />;
}

export default Articles;
