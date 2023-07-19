"use client";
import React, { useRef, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  IconButton,
  Stack,
  CardBody,
  Card, Image, Badge
} from "@chakra-ui/react";
import BlogImage from "../../assets/about (4).png";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import Testing from "../../components/testing";
import Design1 from "../../assets/Frame 1000004323.png";
import Design2 from "../../assets/Frame 1000004323 (1).png";
import Design3 from "../../assets/Image.png";
import { Fade, Zoom, Slide, Bounce, } from 'react-reveal'
import Jump from 'react-reveal/Jump'

const Blog = () => {

  return (
    <>
      <Box
        w="90%"
        mx='auto'
        height="auto"
        mt='7'
      >
        <Zoom>
          <Box>
            <Image
              src={BlogImage}
              alt={""}
              objectFit='cover'
              borderRadius='24px'
              w='100%'
              h={{ base: '550px', lg: '100%' }}
            />
          </Box>
        </Zoom>
      </Box>

      <Box w='80%' mx='auto' my='16'>
        <Flex alignItems='center' justifyContent='space-between' flexWrap='wrap'>
          <Bounce>
            <Heading mb='4'>Latest News</Heading>
          </Bounce>

          <Slide right>
            <Box
              display="flex"
              columnGap="20px"
              alignItems="center"
              color="#213C4E"
            >
              <ChevronLeftIcon />
              <Box display='flex' alignItems='center' gap={4} w={{ base: '250px', lg: 'auto' }} overflow='auto'>
                <Text>Business</Text>
                <Text>Design</Text>
                <Text>Development</Text>
                <Text>Tech</Text>
                <Text>Development</Text>
                <Text>Branding</Text></Box>
              <ChevronRightIcon />
            </Box>
          </Slide>
        </Flex>
      </Box>

      <Stack
        alignItems={{ base: 'center', lg: 'flex-start' }}
        justifyContent={{ base: 'center', lg: 'space-between' }}
        w='80%'
        mx='auto'
        my='8'
        direction={{ base: 'column-reverse', lg: 'row' }}
      >
        <Box my={{ base: '10', lg: 0 }} w={{ base: '100%', lg: '65%' }}>
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
        </Box>

        <Box mb='8' w={{ base: '100%', lg: '28%' }}>
          <Box>
            <Zoom>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.300" />}
                />
                <Input placeholder="Search..." borderRadius="24px" />
              </InputGroup>
            </Zoom>

            <Slide right>
              <Heading fontSize={22} fontWeight='medium' my='8'>
                Recent Posts
              </Heading>
            </Slide>

            <Box
              display="flex"
              overflow="hidden"
              columnGap="30px"
              border="none"
              pb="42px"
            >
             <Slide top>
                <Image
                  src={Design1}
                  alt="Your Image"
                  style={{ objectFit: 'cover', borderRadius: 10 }}
                  height='100px'
                  width='100px'
                />
             </Slide>
              <Box alignSelf="center">
                <Box>
                 <Slide right>
                    <Text
                      fontSize="15px"
                      lineHeight="24px"
                      fontWeight="400"
                      color="#6A7C88"
                      mb='3'
                    >
                      Design . Jan 2, 2023
                    </Text>
                 </Slide>

                  <Bounce>
                    <Heading
                      fontSize="15px"
                      lineHeight="24px"
                      fontWeight="500"
                      width="154px"
                    >
                      Inspiration for Content Creating
                    </Heading>
                  </Bounce>
                </Box>
              </Box>
            </Box>


            <Box
              display="flex"
              overflow="hidden"
              columnGap="30px"
              border="none"
              pb="42px"
            >
              <Slide top>
                <Image
                  src={Design2}
                  alt="Your Image"
                  style={{ objectFit: 'cover', borderRadius: 10 }}
                  height='100px'
                  width='100px'
                />
              </Slide>
              <Box alignSelf="center">
                <Box>
                  <Slide right>
                    <Text
                      fontSize="15px"
                      lineHeight="24px"
                      fontWeight="400"
                      color="#6A7C88"
                      mb='3'
                    >
                      Design . Jan 2, 2023
                    </Text>
                  </Slide>

                  <Bounce>
                    <Heading
                      fontSize="15px"
                      lineHeight="24px"
                      fontWeight="500"
                      width="154px"
                    >
                      Inspiration for Content Creating
                    </Heading>
                  </Bounce>
                </Box>
              </Box>
            </Box>

            

            <Heading
              fontSize="22px"
              lineHeight="28px"
              fontWeight="400"
              pb="32px"
            >
              Tags
            </Heading>

            <Box>
              <Flex columnGap="15px" pb="20px">
                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  Brand
                </Button>

                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  Development
                </Button>

                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  Logo
                </Button>
              </Flex>

              <Flex columnGap="15px" pb="20px">
                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  Clients
                </Button>
                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  AR/VR
                </Button>

                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  Startup
                </Button>
              </Flex>

              <Flex columnGap="15px">
                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  Portfolio
                </Button>
                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  Business
                </Button>

                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  Brand
                </Button>
              </Flex>
            </Box>

          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Blog;



export const SinglePost = () => {

  return (
    <Box w='100%' mb='16'>
      <Stack direction={{ base: 'column', lg: 'row' }} justifyContent='space-between' alignItems={{ base: 'flex-start', lg: 'center' }}>
        <Box w={{ base: '100%', lg: '65%' }} mb='4'>
          <Fade top>
            <Box bg='#FCEFEA' py='1.5' px='3.5' borderRadius='85px' w='100px'><Text color='#E05D2F' fontSize={14} fontWeight='medium'>QA Testing</Text></Box>
          </Fade>
          <Slide left>
            <Heading my='3.5' fontSize={22} color='#1E3747'>The Best Productivity Apps for 2021 - Updated List</Heading>
          </Slide>
          <Bounce>
            <Box w='100%' border='1px dashed #BAC3C8' my='3'></Box>
          </Bounce>

         <Bounce>
            <Stack direction='row' alignItems='center' gap={2}>
              <Text color='#6A7C88' fontSize={14}>May 02, 2022</Text>

              <Box w='6.5px' h='6.5px' borderRadius='50%' bg='#E05D2F'></Box>
              <Text color='#6A7C88' fontSize={14}>Nattasha</Text>
            </Stack>
         </Bounce>

        </Box>

        <Box w={{ base: '80%', lg: '30%' }}>
          <Zoom>
          <Image
            src={Design3}
            alt="Your Image"
            style={{ objectFit: 'cover', borderRadius: 10 }}
            height='155px'
            width='100%'
          />
          </Zoom>
        </Box>

      </Stack>
    </Box>
  )
}