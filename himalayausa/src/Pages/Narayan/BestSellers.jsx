import React from "react";
import { Text } from "@chakra-ui/react";
import BestSellerCarousel from "./BestSellerCrausel";

const BestSellers = () => {
 
  return (
    <div style={{ marginTop: "100px" }}>
      <div mt={16} display="flex" alignItems="center" flexDirection="column">
        <Text fontSize="3xl" fontWeight="500" textAlign="center">
          Best Sellers
        </Text>
        <BestSellerCarousel />
      </div>
    </div>
  );
};

export default BestSellers;
