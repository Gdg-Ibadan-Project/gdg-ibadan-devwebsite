import { Box, Heading, Text, Image } from '@chakra-ui/react'
import React from 'react'
import ellipseBg from '../../../assets/ellipse-bg.png'
import maskImage from '../../../assets/mask-image.png'
import Cards from '../../../components/cards'
import '../index.css'

const CardSection = () => {
  return (
    <Box 
        w='90%' 
        mx='auto' 
        bg='#D9D9D9' 
        h={['auto', '614px']} 
        borderRadius={24} 
        backgroundSize='contain' 
        bgImage={ellipseBg} 
        backgroundRepeat='no-repeat' 
        backgroundPosition='bottom'
        position={['static', 'relative']}
        top={[0, '130px']}
        p={[3, 0]}
    >
        <Box textAlign='center' w={['300px', '550px']} mb='5' mx='auto' position={['static', 'absolute']} inset={['none', 0]} zIndex={['none', 3]} top={[0, '25px']} display={['block', 'none']}>
            <Heading fontSize={[29, 35]} lineHeight='50px' id='title'>
                  Fostering collaboration and learning among tech of all enthusiasts level
            </Heading>
        </Box>
        <Cards 
            hText='Discussion Forum' 
            paragraph='Join groups and discussions centered around your specific interests within the tech industry.' 
            background='#FBBC04'
            top='-50px'
            left='-20px'
            angle='-17'
        />
         <Cards 
            hText='Access' 
            paragraph='Access a wealth of knowledge and resources in our extensive library of tech content.' 
            background='#4285F4'
            top='-50px'
            right='-20px'
            angle='17'
        />

        <Cards 
            hText='Connect' 
            paragraph='Connect with fellow tech enthusiasts through our online community.' 
            background='#34A853'
            top='370px'
            left='-30px'
            angle='-17'
        />
         <Cards 
            hText='Events' 
            paragraph='Attend exclusive events and meetups to learn from industry experts and expand your network.' 
            background='#DA5847'
            top='370px'
            right='-30px'
            angle='17'
        />
        <Box textAlign='center' w={['300px', '550px']} mx='auto' position={['static', 'absolute']} inset={['none', 0]} zIndex={['none', 3]} top={[0, '25px']} display={['none', 'block']}>
            <Heading fontSize={35} lineHeight='50px' id='title'>
                  Fostering collaboration and learning among tech of all enthusiasts level
            </Heading>
        </Box>
        <Box w='100%' position='absolute' display={['none', 'block']} h='560px' bottom='0'>
            <Image src={maskImage} w='100%' h='100%' />
        </Box>
    </Box>
  )
}

export default CardSection