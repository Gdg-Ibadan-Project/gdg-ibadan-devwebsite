import React from 'react'
import {Box, Flex, Text, UnorderedList, ListItem, Image, Heading} from '@chakra-ui/react'
import AboutImg from "../../../assets/about-img.png";

const About = () => {
  return (
    <Box>
      <Flex
          justifyContent={{ base: 'center', lg: 'space-around' }}
          alignItems='center'
          w='100%'
          mx='auto'
          flexWrap='wrap'
          mt='5rem'
          flexDirection='row-reverse'
      >
          <Box
              w={{ base: "88%", lg: "30%" }}
            //   p={[3,0]}
              mb='8'
          >
                  <Heading
                      color="#1E3747"
                      fontWeight="500"
                      fontSize={{ base: "32px", lg: "47px" }}
                      lineHeight={{ base: "40px", lg: "57px" }}
                      pb="38px"
                  >
                      About Us
                  </Heading>
                  <UnorderedList
                      fontSize="16px"
                      fontWeight="500"
                      lineHeight="20px"
                      columnGap="37px"
                      display="flex"
                      mb='5'
                  >
                      <ListItem color="#0F9D58">Connect</ListItem>
                      <ListItem color="#4285F4">Learn</ListItem>
                      <ListItem color="#EA4335">Grow</ListItem>
                  </UnorderedList>
              <Text
                  // pt="20px"
                  color="#6A7C88"
                  fontSize={18}
                  fontWeight="normal"
                  lineHeight="35px"
                  mb='7'
                  // width={{ base: "302px", lg: "367px" }}
                  w={['100%', '100%']}
                  as="p"
              // fontFamily="Google Sans Display, sans-serif"
              >
                We strive to create a space that fosters collaboration and learning
                among tech enthusiasts of all levels. Whether you're a beginner or
                an expert, our community welcomes you.
              </Text>
          </Box>
          <Box
              w={{ base: "100%", lg: "60%" }}
              mb='10'
          >
            <Image src={AboutImg} w='100%' h='100%' alt="" objectFit='cover' />
          </Box>
      </Flex>
    </Box>
  )
}

export default About