import { Box, Stack, Heading, Text, Image } from '@chakra-ui/react'
import React, {useEffect, useRef} from 'react'
import speakerImg from '../../../assets/double-speaker.png'
import map from '../../../assets/map-bg.png'
import {Roll, Slide} from 'react-reveal'
import Jump from 'react-reveal/Jump';

const Mission = () => {
   
    return (
        <Box my='20'>
            <Stack spacing={{ base: 16, lg: 0 }} p='6' direction={{ base: 'column-reverse', lg: 'row' }} alignItems='center' justifyContent='space-around'>
                <Roll>
                <Box maxW={{ base: '100%', lg: '450px' }} position='relative'>
                    <Box backdropBlur='xl'>
                        <Image
                            src={speakerImg}
                            alt="Your Image"
                            objectFit='cover'
                            w='100%'
                        />
                    </Box>
                    <Box position='absolute' top='0' right={{ base: '0', lg: '-150px' }} zIndex='-1'>
                        <Image
                            objectFit='cover'
                            w='100%'
                            src={map}
                            alt="Your Image"
                        />
                    </Box>
                </Box>
                </Roll>
                <Box maxW='380px'>
                    <Jump>
                    <Heading fontSize={{ base: 35, lg: 40 }} fontWeight='bold' mb='6' color='#1E3747'>Our Mission</Heading>
                    </Jump>
                    <Slide right>
                        <Text fontSize={{ base: 18, lg: 18 }} fontWeight='normal' color='#6A7C88'>
                            Access a wealth of knowledge and resources in our extensive library of tech content.
                        </Text>
                    </Slide>
                </Box>
            </Stack>
        </Box>
    )
}

export default Mission