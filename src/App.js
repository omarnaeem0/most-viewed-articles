import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=2x4KUAcLSwFMuIZxVpNyTb2GYSyi9tvS"
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
      });
  }, []);
  console.log("==========", results);
  return (
    <div className="App">
      <List results={results} />
    </div>
  );
}

export default App;
