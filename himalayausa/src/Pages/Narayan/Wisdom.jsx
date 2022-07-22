import React from "react";
import { Text } from "@chakra-ui/react";

const Wisdom = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
        justifyContent: "center",
        backgroundColor: "#f7f8fa",
        padding: "60px",
        margin: "80px",
      }}
    >
      <div>
        <img
          src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/StressCareA-Main-647x1024.png?v=1591359475"
          alt=""
          width="150px"
          height="237px"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "800px",
        }}
      >
        <Text fontSize="35px" fontWeight="500">
          Unlock the Wisdom of Herbs
        </Text>
        <Text fontSize="26px" fontWeight="400">
          with Herbal Supplements, Toothpaste & More!
        </Text>
        <Text fontSize="16px" fontWeight="400">
          Since 1930, Himalaya has been passionate about the healing wisdom of
          herbs. We offer a wide range of clinically-studied herbal supplements,
          toothpaste and personal care products that unlock the powerful healing
          benefits of herbs.
        </Text>
      </div>
    </div>
  );
};

export default Wisdom;
