import "./App.scss";
import Header from "./components/Header";
import { ContextWrapper } from "./context/MainContext";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <ContextWrapper>
          <Articles />
        </ContextWrapper>
      </div>
    </div>
  );
}

export default App;
