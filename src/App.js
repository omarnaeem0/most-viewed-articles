import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import { useEffect, useState } from "react";

function App() {
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
  console.log("==========", results);
  return (
    <div className="App">
      <List results={results} />
    </div>
  );
}

export default App;
