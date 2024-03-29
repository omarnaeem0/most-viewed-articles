import { useContext, useEffect, useState } from "react";
import ArticleListing from "./ArticleListing";
import { MainContext } from "../../context/MainContext";
import Loader from "../Loader";
import { fetchMostPopularArticles } from "../../api";

function ArticleListingContainer() {
  const { results, setResults } = useContext(MainContext);
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
  }, []);
  if (loading) {
    return <Loader color={"black"} />;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return <ArticleListing results={results} />;
}

export default ArticleListingContainer;
