import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import NotFound from "./components/page-not-found/NotFound";
import ShopWomen from "./pages/shop-women/ShopWomen";
import ShopMen from "./pages/shop-men/ShopMen";
import SelectedProducts from "./pages/selected-products/SelectedProducts";
import { SingleProduct } from "./components/single-product/SingleProduct";
import Auth from "./components/auth/Auth";
import Orders from "./components/orders/Orders";
import CheckoutSuccess from "./components/checkout-success/CheckoutSuccess";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop-women" element={<ShopWomen />} />
        <Route exact path="/shop-men" element={<ShopMen />} />
        <Route exact path="/:shop/:id" element={<SingleProduct />} />
        <Route exact path="/selected-products" element={<SelectedProducts />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/checkout-success" element={<CheckoutSuccess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
