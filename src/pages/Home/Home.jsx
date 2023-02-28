import React from "react";
import Categories from "../../components/Categories/Categories";
import Slider from "../../components/Slider/Slider";
import Products from "../../components/PopularProducts/Products";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
     
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      
    </div>
  );
};

export default Home;
