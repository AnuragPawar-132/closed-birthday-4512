import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
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
  slidesToShow: 3,
  slidesToScroll: 2,
};

export default function ReviewsCarousel() {
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
      review:
        "We've Tried countless fluoride-free toothpastes, and this is our favorite!",
      author: "Botanique Complete Care Toothpaste - peppermint",
    },
    {
      review:
        "I'm amazed. I'm less irritable and tired, and more calm and centered.",
      author: "Ashwagandha",
    },
    {
      review:
        "Recommonded to me by my local health food store. This product is a godsend",
      author: "LiverCare®",
    },
    {
      review:
        "I've seen such a drastic difference in my memory, it's hard to belive.",
      author: "Bacopa",
    },
    {
      review:
        "Other whitening toothpastes have not given me these kind of results.",
      author: "Botanique Complete Care Toothpaste - Mint",
    },
    {
      review:
        "Since takin this product, I have cut back consideraly on sugary snacks.",
      author: "Gymnema",
    },
    {
      review:
        "I will never use another toothpaste as long as i can get this one",
      author: "Botanique Complete Care Toothpaste",
    },
    {
      review:
        "I work in the supplement industry, and THIS is the Turmeric you should use.",
      author: "Turmeric 95®",
    },
    {
      review: "Seriously, they are the most effective cough drops ever.",
      author: "Koflet Lozenges®",
    },
    {
      review: "Can't go a day without it. A total game-changer for stress.",
      author: "Ashwagandha",
    },
  ];

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
          {cards.map((card, index) => (
            <Box key={index} height={"100%"} width="400px" padding="20px">
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="200px" position="relative">
                <Stack
                  spacing={6}
                  w={"full"}
                  maxW={"lg"}
                  position="absolute"
                  top="50%"
                  left="-50%"
                  transform="translate(0, -50%)"
                  border="1px solid lightgray"
                  padding="10px"
                >
                  <Text fontWeight="500">
                    {`"`}
                    {card.review}
                    {`"`}
                  </Text>
                  <Text>{card.author}</Text>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </div>
    </Box>
  );
}
