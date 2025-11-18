import { BrowserRouter } from "react-router-dom";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PortfolioContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
