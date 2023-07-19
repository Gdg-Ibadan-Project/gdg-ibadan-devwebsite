import React from 'react'
import { Box, Image, Text, VStack, Progress } from '@chakra-ui/react'
import logo from '../../assets/GDG-logo.png'
import {Zoom, Bounce} from 'react-reveal'
import Jump from 'react-reveal/Jump';

const Loader = ({progress}) => {
  console.log(progress);
  return (
    <Box w='100%' h='100vh' display='flex' alignItems='center' justifyContent='center'>
        <VStack textAlign='center' spacing={5}>
            <Bounce><Image src={logo} display='block' mx='auto' /></Bounce>
            <Bounce><Text fontWeight='bold' color='#1E3747' fontSize={22}>GDG IBADAN</Text></Bounce>
            {/* <Box mx='auto' w='350px'>
                <Progress value={progress} colorScheme='twitter' w='100%' borderRadius={12} mb='1.5' />
                <Text fontWeight='medium'>{progress}%</Text>
            </Box> */}
        </VStack>
    </Box>
  )
}

export default Loader