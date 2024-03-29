import { createContext, useState } from "react";

export const MainContext = createContext({
  results: [],
  selectedArticle: null,
});

export const ContextWrapper = ({
  children,
  defaultResults = [],
  defaultSelectedArticle = null,
}) => {
  const [results, setResults] = useState(defaultResults);
  const [selectedArticle, setSelectedArticle] = useState(
    defaultSelectedArticle
  );

  return (
    <MainContext.Provider
      value={{ results, setResults, selectedArticle, setSelectedArticle }}
    >
      {children}
    </MainContext.Provider>
  );
};
