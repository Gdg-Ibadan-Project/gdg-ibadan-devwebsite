import { Box, Button } from '@chakra-ui/react'
import React from 'react'

const index = ({bg, color, fontSize, text, fontWeight, width, height}) => {
  return (
    <Box my='3'>
        <Button 
          bg='#E05D2F' 
          color='white' 
          fontSize={fontSize} 
          fontWeight={fontWeight} 
          width={width} 
          _hover={{ bg: 'rgba(224, 93, 47, 0.8)'}}
          height={height}
          boxShadow='md'
        >
          {text}
        </Button>
    </Box>
  )
}

export default index