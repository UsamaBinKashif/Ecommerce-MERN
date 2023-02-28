import { useState } from "react";
import Home from "./pages/Home/Home";
import ProductList from "./pages/Products/ProductList";
import Announcement from "./components/Announcement/Announcement";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
function App() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Home />
      {/* <ProductList /> */}
      {/* <ProductDetail/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <Cart/> */}
      <Footer />
    </div>
  );
}

export default App;
