import "./Assets/Styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalState from "./Context/GlobalState";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Route path="/" exact component={MainPage} />
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
