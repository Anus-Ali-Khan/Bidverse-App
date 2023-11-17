import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Products from "./pages/Productscreen";
import Favourites from "./pages/Favourites";
import MyProfile from "./pages/MyProfile";
import SingleProduct from "./pages/SingleProduct";
import CreateProduct from "./pages/CreateProduct";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/createproduct" element={<CreateProduct />} />
          <Route path="/singleProduct" element={<SingleProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
