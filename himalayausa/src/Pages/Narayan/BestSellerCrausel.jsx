import React from "react";
import { axios } from "axios";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Image,
  Text,
  Container,
  Button,
  Flex
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons

import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsHandbag,
} from "react-icons/bs";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  autoplay: true,
  speed: 400,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  
};

export default function BestSellerCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState("");

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "Organic Ashwagandha",
      image:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaAshwagandha30ctCarton-Bottle_front_-600x600-950dd6f_edd94945-f1dd-40b5-b41e-81f2d635daa3_800x.png?v=1655738427",
      price: 14.95,
    },
    {
      title: "Simply Mint Whitening Toothpaste",
      image:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Whitening-Mint---Box-Tube_800x.png?v=1597743896",
      price: 5.99,
    },
    {
      title: "LiverCare®",
      image:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Himalaya_LiverCare_42ct_-_Carton_Bottle_800x.png?v=1654789186",
      price: 17.95,
    },
    {
      title: "ImmunoCare®",
      image:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/ImmunoCare-120---Box-Bottle_800x.png?v=1595814320",
      price: 24.95,
    },
    {
      title: "Neem & Pomegranate Original Toothpaste",
      image:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Neem-and-Pom---Box-Tube_800x.png?v=1597744049",
      price: 5.99,
    },
    {
      title: "Organic Amla",
      image:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaAmla60ct-CartonandBottle-600x600-950dd6f_800x.png?v=1655738075",
      price: 19.95,
    },
    {
      title: "Organic Bitter Melon",
      image:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaBitterMelon30ct-CartonBottle-600x600-950dd6f_800x.png?v=1655738669",
      price: 12.95,
    },
    {
      title: "Organic Gymnema",
      image:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaGymnema30ct-CartonBottle-600x600-950dd6f_800x.png?v=1655739688",
      price: 14.95,
    },
  ];
  
  const addtocart = (elem) => {
    console.log(elem)
    axios.post(`https://my-himalayausa-project.herokuapp.com/cart`, {
        Name: elem.title,
        Img: elem.image,
        Price: elem.price,
        count: 1,
      })
      .then((r) => {
        console.log(r);
        alert("product added to cart successfully");
      })
      .catch((err) => {
        console.log("error")
      });
  };

  return (
    <Box position={"relative"} width={"full"} overflow={"hidden"}>
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BsChevronCompactLeft size="30px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BsChevronCompactRight size="30px" />
      </IconButton>
      {/* Slider */}
      <div
        style={{
          justifyContent: "center",
          paddingLeft: "100px",
          paddingRight: "100px",
          alignItems: "center",
        }}
      >
        <Slider
          {...settings}
          ref={(slider) => setSlider(slider)}
          overflow={"hidden"}
        >
          {cards.map((elem, index) => (
            <Box key={index} height={"100%"} width="268px" padding="20px">
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="400px" position="relative">
                <Stack
                  spacing={6}
                  w={"full"}
                  maxW={"lg"}
                  position="absolute"
                  top="50%"
                  left="-50%"
                  transform="translate(0, -50%)"
                >
                  <Image src={elem.image} width="268px" height="268px" />
                  <Text bg={"white"} fontWeight="500" marginLeft="20px">
                    {elem.title}
                  </Text>
                  <Flex gap="10px">
                    <Button
                      bg="#a9b9a1"
                      size="md"
                      width="100px"
                      onClick={() => addtocart(elem)}
                    >
                      <BsHandbag size="20px" />
                    </Button>
                    <Text>${elem.price}</Text>
                  </Flex>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </div>
    </Box>
  );
}
