"use client";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import Lead from "../../../assets/abidemi.webp";
import CoOrganiser from "../../../assets/josh.webp";
import Organiser from "../../../assets/bash.webp";
import Secretary from "../../../assets/wura.webp";
import { Link } from "react-router-dom";
// import Buttons from "../buttons";
import Rec from "../../../assets/Rectangle 9789.png"
// import Button from '../Button'
import '../index.css'

const Organisers = () => {

    return (
        <>
            <Box
                bgColor="#E9ECED"
                mt={{ base: "52px", lg: "304px" }}
                textAlign="center"
                pb='10'
                w='90%'
                minH='600px'
                mx='auto'
                borderRadius={24}
                mb='80px'
            >
                
                    <Heading
                        textAlign="center"
                        fontSize={{ base: "32px", lg: "45px" }}
                        lineHeight={{ base: "45px", lg: "57px" }}
                        fontWeight="500"
                        pt={{ base: "61px", lg: "93px" }}
                        mb='20'
                        id="title"
                    >
                        Let’s Meet the Organisers
                    </Heading>
                
                <Flex
                    w='90%'
                    mx='auto'
                    justifyContent={['center', 'space-between', 'space-between']}
                    flexWrap='wrap'
                >
                    <OrganizerCard image={Lead} role='Organizer' name='Abidemi Tiamiyu' />
                    <OrganizerCard image={CoOrganiser} role='Organizer' name='Olajide Joshua' />
                    <OrganizerCard image={Organiser} role='WTM Ibadan Lead' name='Basheeroh Akinpelu' />

                        <Box position='relative' w='250px' h='250px' mb={[8, 5, 5]} borderRadius={12}>
                            <Image src={Secretary} w='100%' objectFit='cover' borderRadius={12} boxShadow='md' />
                            <Box position='absolute' top='180px' left='-80px'>
                                <Image src={Rec} w='330px' h='180px' />
                            </Box>
                            <Box position='absolute' zIndex='1' bottom='-25px' textAlign='left'>
                                <Heading fontWeight='medium' fontSize='17px' mb='1' color='#E05D2F' id='title'>WTM Ibadan Co-Lead</Heading>
                                <Text color='#1E3747' fontSize={14.5} fontWeight='medium' className="text">Wuraola Akinlade</Text>
                            </Box>
                        </Box>

                </Flex>
            </Box>
        </>
    );
};

export default Organisers;


export const OrganizerCard = ({ role, name, image }) => {

    return (
            <Box as='div' position='relative' w='250px' h='250px' mb={[20, 5, 5]} borderRadius={12}>
                <Box>
                    <Image src={image} w='100%' objectFit='cover' borderRadius={12} boxShadow='md' />
                    <Box position='absolute' top='180px' left='-80px'>
                        <Image src={Rec} w='310px' h='180px' />
                    </Box>
                    <Box position='absolute' zIndex='1' bottom='-25px' textAlign='left' overflow='hidden'>
                        <Heading fontWeight='medium' fontSize='17px' mb='1' color='#E05D2F' id="title">{role}</Heading>
                        <Text color='#1E3747' fontSize={14.5} fontWeight='medium' className="text">{name}</Text>
                    </Box>
                </Box>
            </Box>
    )
}
