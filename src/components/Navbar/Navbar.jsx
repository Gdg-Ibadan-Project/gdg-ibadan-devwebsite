import {
  Heading,
  Box,
  Text,
  Flex,
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack, Image, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure, VStack,
} from "@chakra-ui/react";
import React, {useState} from "react";
import logo from "../../assets/gdg-logo.svg";
import aboutIcon from "../../assets/about-icon.svg";
import jobIcon from "../../assets/job-icon.svg";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons'
import Button from '../Button'

const Navbar = () => {
  return (
    <Box as='nav' w='100%' py='5'>
      <Image src={logo} display='block' mx='auto' />
    </Box>
  );
};

export default Navbar;




// export const SideNav = ({setOpenModal}) => {
//   const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })
//   const btnRef = React.useRef();
//   return (
//     <Drawer
//       isOpen={isOpen}
//       placement='right'
//       onClose={onClose}
//       finalFocusRef={btnRef}
//       size='lg'
//       closeOnOverlayClick={false}
//     >
//       <DrawerOverlay />
//       <DrawerContent>
//         <DrawerHeader mt='1' mb='8'>
//             <Stack direction='row' justifyContent='space-between'>
//               <Image src={logo} />
//               <CloseIcon onClick={() => setOpenModal(false)} color='#E05D2F' fontWeight='extrabold' fontSize={20} />
//             </Stack>
//         </DrawerHeader>

//         <DrawerBody>
//             <VStack spacing={7}>
//               <Menu isLazy color="#1E3747">
//                 <MenuButton fontWeight="medium" fontSize={15}>
//                   GDG Ibadan <ChevronDownIcon />
//                 </MenuButton>
//                 <MenuList>
//                 <Link to='/about' onClick={() => setOpenModal(false)}>
//                   <MenuItem as="a" href="#" fontSize={14}>
//                     <Flex alignItems='center' gap={2}>
//                       <Image src={aboutIcon} />
//                       <Text>About GDG Ibadan</Text>
//                     </Flex>
//                   </MenuItem>
//                 </Link>

//                 <Link to='/jobs' onClick={() => setOpenModal(false)}>
//                   <MenuItem as='a' href='#' fontSize={14}>
//                     <Flex alignItems='center' gap={2}>
//                       <Image src={jobIcon} />
//                       <Text>Job Board</Text>
//                     </Flex>
//                   </MenuItem>
//                 </Link>

//                 </MenuList>
//               </Menu>
//               <Link to='/events'><Text fontWeight="medium" fontSize={15} onClick={() => setOpenModal(false)}>Events</Text></Link>
//               <Link to='/blog'><Text fontWeight="medium" fontSize={15} onClick={() => setOpenModal(false)}>Blog</Text></Link>
//               <Link to='/signin'>
//                 <Button bg='#E05D2F' w='150px' h='45px' color='white' boxShadow='md' onClick={() => setOpenModal(false)}>Register </Button>
//               </Link>
//             </VStack>
//         </DrawerBody>
//       </DrawerContent>
//     </Drawer>
//   )
// }
