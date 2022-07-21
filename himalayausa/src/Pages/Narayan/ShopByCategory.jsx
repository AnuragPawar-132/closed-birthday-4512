import React from "react";
import { Text, Container, Flex, Box} from "@chakra-ui/react";

const ShopByCategory = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <Container>
        <Text fontSize="3xl" textAlign="center" fontWeight="500">
          Shop By Category
        </Text>
      </Container>
      <Flex flexWrap="wrap">
              <Box >
              </Box>        
      </Flex>
    </div>
  );
};

export default ShopByCategory;
