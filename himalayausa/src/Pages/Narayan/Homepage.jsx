import React from "react";
import BestSellers from "./BestSellers";
import BannerCarousel from "./Carousel";
import ReviewsCarousel from "./Reviews";
import ShopByCategory from "./ShopByCategory";
import Wisdom from "./Wisdom";

const Homepage = () => {
  return (
    <div>
      <div>
        <BannerCarousel />
        <ShopByCategory />
        <BestSellers />
        <Wisdom />
       <ReviewsCarousel/>
      </div>
    </div>
  );
};

export default Homepage;
