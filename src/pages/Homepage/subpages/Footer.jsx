import { Box, Image, Text, Icon, Stack } from '@chakra-ui/react'
import React from 'react'
import logo from "../../../assets/gdg-logo.svg";
import { Slack, Instagram } from 'iconsax-react';
import {FaLinkedin, FaTwitterSquare, FaInstagramSquare} from 'react-icons/fa'
import {AiFillSlackCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box as='footer'>
        <Box maxW='500px' mx='auto' mb={10}>
            <Stack spacing={8}>
                  <Box>
                      <Image src={logo} display='block' mx='auto' />
                  </Box>
                  <Box textAlign='center' px={[3,0]}>
                      <Text color="#6A7C88" fontSize={18}>
                          We strive to create a space that fosters collaboration and learning among tech enthusiasts
                          of all levels. Whether you're a beginner or an expert, our community welcomes you.
                      </Text>
                  </Box>

                  <Box>
                      <Stack direction='row' justifyContent='center' spacing={5} alignItems='center' fontSize={25} color='#E05D2F'>
                        <Icon as={AiFillSlackCircle} />
                        <Icon as={FaInstagramSquare} />
                        <Icon as={FaTwitterSquare} />
                        <Icon as={FaLinkedin} />
                      </Stack>
                  </Box>
            </Stack>
        </Box>
        <Box bg='#E05D2F' h='70px' color='white' textAlign='center' display='flex' alignItems='center' justifyContent='center'>
            <Text>&copy; 2023 Ibadan devwebsite</Text>
        </Box>
    </Box>
  )
}

export default Footer