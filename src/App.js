import './Assets/Styles/App.css';
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={MainPage} />
    </BrowserRouter>
  );
}

export default App;
