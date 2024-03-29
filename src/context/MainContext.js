import { createContext } from "react";

export const MainContext = createContext({
  results: [],
  setResults: () => {},
  selectedArticle: null,
  setSelectedArticle: () => {},
});
