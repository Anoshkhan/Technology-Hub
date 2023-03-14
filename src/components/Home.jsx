import React from 'react';
import { Box, Heading, Image} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assets/1.jpg";
import img2 from "../assets/22.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
  pos: 'absolute',
  w: '40%',
  top: '50%',
  left: '30%',
  tranform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '3',
  size: '2xl',
};

const Home = () => {
  return (
    <Box>
        <MyCarousel />
    </Box>
  )
};
 const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={2000} showStatus={false}>
        <Box w="full" h={'100vh'}>
            <Image src={img1} h="full" w={"full"} objectFit={'cover'}/>
            <Heading bgColor={'blackAlpha.600'} color={"white"} {...headingOptions}>Watch the Future</Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img2} h="full" w={"full"} objectFit={'cover'}/>
            <Heading bgColor={'blackAlpha.600'} color={"white"} {...headingOptions}>Future is Gaming</Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img3} h="full" w={"full"} objectFit={'cover'}/>
            <Heading bgColor={'blackAlpha.600'} color={"white"} {...headingOptions}>Watch the Future</Heading>
        </Box>
    </Carousel>
 );

export default Home