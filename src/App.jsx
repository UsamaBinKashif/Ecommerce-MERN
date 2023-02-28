import { useState } from "react";
import Home from "./pages/Home/Home";
import ProductList from "./pages/Products/ProductList";
import Announcement from "./components/Announcement/Announcement";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
function App() {
  return (
    <div>
      <Announcement />
      <Navbar />
      {/* <Home /> */}
      {/* <ProductList /> */}
      <ProductDetail/>
      <Footer />
    </div>
  );
}

export default App;
