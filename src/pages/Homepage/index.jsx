"use client";
import React from "react";
import {
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList, Image, 
} from "@chakra-ui/react";
// import Header from "../../assets/gdg-header.jpg";
// import carousel1 from "../../assets/carousel-image2.jpg";
// import carousel2 from "../../assets/carousel-image3.jpg";
// import carousel3 from "../../assets/carousel-image4.jpg";
// import carousel4 from "../../assets/carousel-image5.jpg";
// import carousel5 from "../../assets/carousel-image6.jpg";
// import carousel6 from "../../assets/carousel-image7.jpg";
// import carousel7 from "../../assets/carousel-image8.jpg";
// import About from "../../assets/images asset.png";
// import Organisers from "../../components/organisers";
// import Sponsors from "../../components/sponsors";
// import { Swiper, SwiperSlide } from 'swiper/react'
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import Features from "../../components/Features/Features";
// import { Zoom, Slide, Roll } from "react-reveal";
// import Jump from "react-reveal/Jump";
// import Button from '../../components/Button'
import Navbar from '../../components/Navbar/Navbar'
import Hero from './subpages/Hero'
import About from './subpages/About'
import Sponsors from "./subpages/Sponsors";
import Organisers from "./subpages/Organisers";
import Footer from "./subpages/Footer";
import CardSection from "./subpages/CardSection";

const Home = () => {
  return (
    <Box as='section'>
      <Navbar />
      <Hero />
      <About />
      <Sponsors />
      <CardSection />
      <Organisers />
      <Footer />
    </Box>
  );
};

export default Home;
