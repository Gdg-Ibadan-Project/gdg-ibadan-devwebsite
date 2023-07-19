// "use client";
import React from "react";
import EventCard from "../../components/eventcard";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text, Image
} from "@chakra-ui/react";
import EventImg from "../../assets/aboutImg.png";
import Group from "../../assets/groups.png";
import Buttons from "../../components/buttons";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { BeatLoader } from "react-spinners";
import {data} from '../../components/data/data'
import Reveal from 'react-reveal/Reveal';
import {Zoom, Fade, Bounce, Jump} from 'react-reveal'

const Event = () => {
  
  return (
    <>
      <Box
        w="90%"
        height="auto"
        mt='5'
        mx='auto'
        position="relative"
      >
       <Zoom>
        <Box height={{ base: "700px", lg: '550px' }}>
          <Image
            src={EventImg}
            alt={""}
            w='100%'
            h='100%'
            objectFit='cover'
            borderRadius={12}
          />
        </Box>
        </Zoom>
      </Box>

      <Box position="absolute" top="30rem" bottom="0rem">
        <Image src={Group} alt={""} />
      </Box>
      <Bounce>
      <Text
        my='10'
        textAlign="center"
        fontSize={{ base: "32px", lg: "42px" }}
        fontWeight="500"
        lineHeight={{ base: "40px", lg: "57px" }}
      >
        Upcoming Events
      </Text>
      </Bounce>
      <Box
        w='80%'
        mx='auto'
        display='flex'
        justifyContent='space-between'
        mb='12'
        flexWrap='wrap'
      >
        {/* <Fade top style={{width: '50%'}}> */}
          <Flex
            fontSize="16px"
            alignItems='center'
            fontWeight="400"
            w={{ base: '100%', lg: '50%' }}
            gap={6}
            mb='5'
            flexWrap={{ base: 'wrap', lg: 'nowrap' }}
          >
            <Input placeholder="Date" w={{ base: '100%', lg: '200px' }} />
            <Input placeholder="Keyword" w={{ base: '100%', lg: '200px' }} />
            <Button bg='#E05D2F' w={{ base: '100%', lg: '200px' }} h='43px' color='white' boxShadow='md'>Find Event</Button>
          </Flex>
        {/* </Fade> */}
        <Flex
          columnGap={{ base: "45px", lg: "179px" }}
          fontSize="16px"
          lineHeight="24px"
          fontWeight="500"
        >

          <Zoom>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} fontSize={15}>
              Upcoming Events
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} href="https://gdg.community.dev/gdg-ibadan/#past-events" target="_blank">
                Past Events
              </MenuItem>
              <MenuItem as={Link} href="https://gdg.community.dev/gdg-ibadan/#upcoming-events" target='_blank'>
                Future Events
              </MenuItem>
            </MenuList>
          </Menu>
          </Zoom>
        </Flex>
      </Box>

      <Flex
        w='80%'
        mx='auto'
        justifyContent={{ base: 'center', lg: 'space-between' }}
        flexWrap='wrap'
        alignItems='center'
      >
        {data.map((event, index) => <Bounce><EventCard key={event.id} id={event.id} /></Bounce>)}
      </Flex>
      <Box
        textAlign="center"
        pt={{ base: "0px", lg: "60px" }}
        // pb={{ base: "0px", lg: "96px" }}
        display={{ base: "none", lg: "block" }}
        color="#E05D2F"
      >
        <Text
          fontSize="16px"
          fontWeight="500"
          lineHeight="20px"
          pb={{ base: "0px", lg: "14px" }}
        >
          Load More
        </Text>
        <Button
          isLoading
          colorScheme="white"
          spinner={<BeatLoader size={8} color="#E05D2F" />}
        >
          Click me
        </Button>
      </Box>
    </>
  );
};

export default Event;
