import { useContext, useState } from "react";
import "./App.scss";
import ArticleListing from "./components/ArticleListing";
import Header from "./components/Header";
import { MainContext } from "./context/MainContext";
import ArticleDetails from "./components/ArticleDetails";

function App() {
  const [results, setResults] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <MainContext.Provider
          value={{ results, setResults, selectedArticle, setSelectedArticle }}
        >
          {selectedArticle === null ? <ArticleListing /> : <ArticleDetails />}
        </MainContext.Provider>
      </div>
    </div>
  );
}

export default App;
