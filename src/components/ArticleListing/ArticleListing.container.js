import { useEffect, useState } from "react";
import ArticleListing from "./ArticleListing";

function ArticleListingContainer() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=2x4KUAcLSwFMuIZxVpNyTb2GYSyi9tvS"
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return <ArticleListing results={results} />;
}

export default ArticleListingContainer;
