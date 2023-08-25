import { Center, Flex, Image, Box } from "@chakra-ui/react";
// import React from "react";
import Lacasera from "../../../assets/lacasera.png";
import Cardify from "../../../assets/cardify.png";
import Ship from "../../../assets/ship.png";
import Altschool from "../../../assets/Altschool.png";
import Heyfood from "../../../assets/heyfood.png";
import Halal from "../../../assets/halal.png";
import { useEffect, useRef } from "react";
import '../index.css'

const Sponsors = () => {

    return (
        <Box mb='12' w={['95%', '75%']} mx='auto'>
            <Center
                fontSize={{ base: "32px", lg: "45px" }}
                fontWeight="500"
                color='#1E3747'
                mb='5'
                id="title"
            >
                Our Sponsors
            </Center>
            <Box 
                boxShadow='lg' 
                borderRadius='16px' 
                px='5' 
                display='flex' 
                alignItems='center' 
                justifyContent='center' 
                mx='auto'
                w='100%'
                h='auto'
                overflow='auto'
            >
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    gap={[6, 0]}
                    w='100%'
                >
                    <Image src={Lacasera} alt={""} />
                    <Image src={Cardify} alt={""} />
                    <Image src={Ship} alt={""} />
                    <Image src={Altschool} alt={""} />
                    <Image src={Heyfood} alt={""} />
                    <Image src={Halal} alt={""} />
                </Flex>
            </Box>
        </Box>
    );
};

export default Sponsors;
