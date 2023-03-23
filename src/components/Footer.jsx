import { Box, Button, Heading, HStack, Stack, VStack, Input, Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineAlert, AiOutlineGithub, AiOutlineGitlab, AiOutlineLinkedin, AiOutlineMail} from 'react-icons/ai';
const Footer = () => {
  return (
    <Box 
    bgColor={'blackAlpha.900'}
    minH={'40'}
    color={'whiteAlpha.900'}
    p='16' 
    >
    <Stack direction={['column','row']}>
        <VStack alignItems={'stretch'} w={'full'} > 
            <Heading textTransform={'uppercase'} size={'md'} py={2} textAlign={['center','left']}>Subscribe to get Update</Heading>
            <HStack py={2} borderBottom={'2px solid white'}>
            <Input 
                placeholder="Enter Your Email..."
                border={'none'}
                outline={'none'}
            />
            <Button p='0' colorScheme={'purple'} borderRadius={'0px 20px 0px 0px'}>
                <AiOutlineAlert size={'20'}/>
            </Button>
            </HStack>
        </VStack>
        <VStack 
        w={'full'}
        borderLeft={['none', '1px solid white']}
        borderRight={['none', '1px solid white']}
        >
          <Heading textAlign={'center'} textTransform={'uppercase'}>
            Video Hub
          </Heading>
          <Text>All rights received</Text>
        </VStack>
        <VStack w={'full'} >
          <Heading textTransform={'uppercase'} size={'md'}  marginBottom={'4'}>
            Social Media
          </Heading>
          <HStack>
            <a href=''><AiOutlineMail size={'20'} /></a>
            <a href=''><AiOutlineGithub  size={'22'} /></a>
            <a href=''><AiOutlineLinkedin  size={'24'} /></a>
          </HStack>
        </VStack>
    </Stack>
    </Box>
  )
}

export default Footer