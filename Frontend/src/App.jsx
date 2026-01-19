import { BrowserRouter, Route, Routes } from "react-router-dom";
import kids_banner from "./Assets/banner_kids.png";
import men_banner from "./Assets/banner_mens.png";
import women_banner from "./Assets/banner_women.png";
import Checkout from "./Components/Checkout/Checkout";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart";
import Loginsignup from "./Pages/Loginsignup";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import Shopcategory from "./Pages/Shopcategory";
// import Sidediv from "./Components/Sidediv/Sidediv";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <Sidediv /> */}
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<Shopcategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<Shopcategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<Shopcategory banner={kids_banner} category="kid" />}
          />
          <Route path="/product/:id" element={<Product />}>
            <Route element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Loginsignup />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
