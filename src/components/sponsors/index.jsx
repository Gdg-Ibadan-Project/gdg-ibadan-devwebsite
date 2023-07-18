import { Center, Flex, Image, Box } from "@chakra-ui/react";
// import React from "react";
import Lacasera from "../../assets/lacasera.png";
import Cardify from "../../assets/cardify.png";
import Ship from "../../assets/ship.png";
import Altschool from "../../assets/Altschool.png";
import Heyfood from "../../assets/heyfood.png";
import Halal from "../../assets/halal.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Sponsors = () => {
  

  return (
    <Box mb='12' w='100%' mx='auto'>
      <Center
        fontSize={{ base: "32px", lg: "45px" }}
        fontWeight="500"
        lineHeight={{ base: "40px", lg: "57px" }}
        color='#1E3747'
      >
        Our Sponsors
      </Center>
      <Flex
        alignItems="center"
        oberflow="auto"
        justifyContent="space-between"
        mx='auto'
        overflow='auto'
        w='90%'

        // columnGap={{ base: "10px", lg: "52px" }}
      >
        <Image src={Lacasera} alt={""} />
        <Image src={Cardify} alt={""} />
        <Image src={Ship} alt={""} />
        <Image src={Altschool} alt={""} />
        <Image src={Heyfood} alt={""} />
        <Image src={Halal} alt={""} />
      </Flex>
    </Box>
  );
};

export default Sponsors;
