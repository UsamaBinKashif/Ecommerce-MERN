import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Categories from "../../components/Categories/Categories";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Image from "../../components/Image/Image";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Image />
    </div>
  );
};

export default Home;
