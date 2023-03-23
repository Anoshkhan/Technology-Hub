import React from 'react';
import { Box, Heading, Image, Container, Stack, Text} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img7 from "../assets/7.webp";
import img2 from "../assets/22.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";
import services from "../assets/s.jpg";

const headingOptions = {
  pos: 'absolute',
  w: '40%',
  top: '70%',
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
        <Container maxW={'container.xl'} minH={'100vh'} p="16">
            <Heading 
            textTransform={'uppercase'}
            py="3"
            width={'fit-content'}
            borderBottom={'2px solid'}
            m='auto'
            >
              Services
            </Heading>

            <Stack 
            h='full'
            p={'4'}
            alignItems={'center'}
            direction={['column','row']}//responsive design row and columns according to screensize

            >
            <Image src={services} h={['40', '350']} marginRight={['0','3']} w={['120%', '100%']}/>
            <Text letterSpacing={"widest"} lineHeight={"1.5"} p={['0','5']} justifyContent={'center'} marginTop={'4'} color={'purple'}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Sed doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </Text>
            </Stack>
        </Container>

    </Box>
  )
};
 const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={2000} showStatus={false}>
        <Box w="full" h={'100vh'}>
            <Image src={img7} h="full" w={"full"} objectFit={'cover'}/>
            <Heading bgColor={'blackAlpha.600'} color={"white"} {...headingOptions}>Watch the Future</Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img2} h="full" w={"full"} objectFit={'cover'}/>
            <Heading bgColor={'blackAlpha.600'} color={"white"} {...headingOptions}>Future is Gaming</Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img3} h="full" w={"full"} objectFit={'cover'}/>
            <Heading bgColor={'blackAlpha.600'} color={"white"} {...headingOptions}>I'm a gamer</Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img4} h="full" w={"full"} objectFit={'cover'}/>
            <Heading bgColor={'blackAlpha.600'} color={"white"} {...headingOptions}>With You All Night</Heading>
        </Box>
    </Carousel>
 );

export default Home