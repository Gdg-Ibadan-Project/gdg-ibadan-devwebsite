"use client";  
import React from "react";
import { Box, Card, Heading, Text, Image } from "@chakra-ui/react";
import Access from "../../assets/access.png";
import Jump from 'react-reveal/Jump';
import {Slide, Bounce, Zoom} from 'react-reveal'

export default function Cards({ hText, paragraph, background, color, mb, hoverBg }) {
  return (
    <>
      <Zoom>
      <Card
        width={{ base: "100%px", md: '250px', lg: "26                         0px" }}
        height={{ base: '300px', lg: "277px" }}
        background={background}
        color="#fff"
        borderRadius="32px"
        fontFamily="'Google Sans Display', sans-serif"
        boxShadow="md"
        _hover={{ bg: hoverBg, color: '#303030'}}
      >
        <Box
        p='6'
        >
          <Slide top>
              <Image
                src={Access}
                alt={""}
                // bg={hoverBg}
                _hover
                style={{
                  paddingBottom: "16px",
                }}
              />
          </Slide>
            <Jump> 
              <Heading
              as="h1"
              fontSize="16px"
              fontWeight="500"
              lineHeight="24px"
              pb="16px"
            >
              {hText}
            </Heading>
            </Jump>
         <Jump>
              <Text
                as="p"
                fontSize={{ base: '19px', lg: '16px' }}
                fontWeight="400"
                lineHeight="27px"
                fontFamily="'Google Sans Display', sans-serif"
              >
                {paragraph}
              </Text>
         </Jump>
        </Box>
      </Card>
      </Zoom>
    </>
  );
}
