import { Box, Heading, Text, Image } from '@chakra-ui/react'
import React from 'react'
import ellipseBg from '../../../assets/ellipse-bg.png'
import maskImage from '../../../assets/mask-image.png'
import Cards from '../../../components/cards'

const CardSection = () => {
  return (
    <Box 
        w='90%' 
        mx='auto' 
        bg='#D9D9D9' 
        h='614px' 
        borderRadius={24} 
        backgroundSize='contain' 
        bgImage={ellipseBg} 
        backgroundRepeat='no-repeat' 
        backgroundPosition='bottom'
        position='relative'
        top='130px'
    >
        <Cards 
            hText='Discussion Forum' 
            paragraph='Join groups and discussions centered around your specific interests within the tech industry.' 
            background='#FBBC04'
            top='-50px'
            left='-20px'
            angle='-17'
        />
         <Cards 
            hText='Discussion Forum' 
            paragraph='Join groups and discussions centered around your specific interests within the tech industry.' 
            background='#4285F4'
            top='-50px'
            right='-20px'
            angle='17'
        />

        <Cards 
            hText='Discussion Forum' 
            paragraph='Join groups and discussions centered around your specific interests within the tech industry.' 
            background='#34A853'
            top='370px'
            left='-30px'
            angle='-17'
        />
         <Cards 
            hText='Discussion Forum' 
            paragraph='Join groups and discussions centered around your specific interests within the tech industry.' 
            background='#DA5847'
            top='370px'
            right='-30px'
            angle='17'
        />
        <Box textAlign='center' w='550px' mx='auto' position='absolute' inset='0' zIndex='3' top='10px'>
            <Heading fontSize={35} lineHeight='55px'>
                  Fostering collaboration and learning among tech of all enthusiasts level
            </Heading>
        </Box>
        <Box w='100%' position='absolute' h='560px' bottom='0'>
            <Image src={maskImage} w='100%' h='100%' />
        </Box>
    </Box>
  )
}

export default CardSection