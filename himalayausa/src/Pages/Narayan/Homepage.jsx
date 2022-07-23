import React from "react";
import BestSellers from "./BestSellers";
import BannerCarousel from "./Carousel";
import ReviewsCarousel from "./Reviews";
import ShopByCategory from "./ShopByCategory";
import Social from "./Social";
import Wisdom from "./Wisdom";
import { Image } from '@chakra-ui/react'

const Homepage = () => {
  return (
    <div >
      <div >
        <Image marginTop="20px" src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/hero-desktop-ashwagandha_x720.jpg?v=1608662725" />
        
        <ShopByCategory />
        <BannerCarousel />
        <BestSellers />
        <Wisdom />
        <ReviewsCarousel />
        <Social/>
      </div>
    </div>
  );
};

export default Homepage;
