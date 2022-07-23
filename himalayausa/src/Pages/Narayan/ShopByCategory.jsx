import React from "react";
import { Box, Text, Image, Stack } from "@chakra-ui/react";
import styles from "./ShopByCategory.module.css"
import { useNavigate} from "react-router-dom";

const ShopByCategory = () => {
  const navigate= useNavigate();

  return (
    <div style={{ marginTop: "100px" }}>
      <div mt={16} display="flex" alignItems="center" flexDirection="column">
        <Text fontSize="3xl" fontWeight="500" textAlign="center">
          Shop By Category
        </Text>
        <div display="flex" justifyContent="center" gap="50px">
          <Stack
            direction={["column", "row"]}
            spacing="24px"
            alignItems="center"
            justifyContent="center"
          >
            <Box  onClick={()=>navigate("/HerbalSupplements")}
              w="379px"
              h="470px"
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                className={styles.nimages101}
                src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_1024x.png?v=1607451904"
                alt="Supplyments"
                height="350px"
                width="350px"
              />
              <Text fontWeight="500" fontSize="1.2em" mt="10px">
                Supplements
              </Text>
              <Text color="#a9b9a1">See All Supplements</Text>
            </Box>
            <Box onClick={()=>navigate("/OralCare")}
              w="379px"
              h="470px"
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                className={styles.nimages101}
                src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/WCC-SIMPLY-MINT-RENDER-WITH-BRUSH-High-Res_1024x.png?v=1607451904"
                alt="Supplyments"
                height="350px"
                width="350px"
              />
              <Text fontWeight="500" fontSize="1.2em" mt="10px">
                Oral Care
              </Text>
              <Text color="#a9b9a1">See All Oral Care</Text>
            </Box>
            <Box onClick={()=>navigate("/PersonalCare")}
              w="379px"
              h="470px"
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                className={styles.nimages101}
                src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/Face_Wash-Balancing-Box-Bottle-square_1024x.png?v=1607451904"
                alt="Supplyments"
                height="350px"
                width="350px"
              />
              <Text fontWeight="500" fontSize="1.2em" mt="10px">
                Personal Care
              </Text>
              <Text color="#a9b9a1">See All Personal Care</Text>
            </Box>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
