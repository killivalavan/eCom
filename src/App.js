import "./Styles/App.css";
import About from "./Components/Pages/About";
import Cart from "./Components/Pages/Cart";
import HomePage from "./Components/Pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import ProductDetails from "./Components/Pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Cart" element={<Cart />}></Route>
        <Route
          exact
          path="/ProductDetails"
          element={<ProductDetails />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
