import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function BannerCarousel() {
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
      title: "ASHWAGANDHA",
      text: "A star performer for stress and energy in a potent, organic caplet.",
      image:
        "https://cdn.shopify.com/s/files/1/0399/1728/9633/files/hero-desktop-ashwagandha_x720.jpg?v=1608662725",
    },
    {
      title: "",
      text: "",
      image:
        "https://cdn.shopify.com/s/files/1/0272/4714/9155/files/web-produt_banner.jpg?v=1633430085",
    },
    {
      title: "",
      text: "",
      image:
        "https://www.beauticool.com/product_images/1476724541_himalaya1.jpg",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}

      {/* <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      /> */}

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
        <BsChevronCompactLeft size="40px" />
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
        <BsChevronCompactRight size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"100%"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="66%"
                left="-50%"
                transform="translate(0, -50%)"
              >
                <Heading
                  bg={"white"} fontWeight="500"
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                >
                  {card.title}
                </Heading>
                <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
                  {card.text}
                </Text>
                <Button colorScheme="teal" size="sm" width="100px">
                  Shop Now
                </Button>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
