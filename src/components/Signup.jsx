import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'120vh'} p='16'>
      <form>
        <VStack spacing={'8'} alignItems='stretch' w={['full', '96']} m={'auto'} my='16'>
          <Heading alignSelf={'center'} size={'lg'}>TECHNOLOGY HUB</Heading>
          <Avatar boxSize={'32'} alignSelf={'center'}/>
          <Input placeholder='Name' type={'text'} required focusBorderColor='purple.500'/>
          <Input placeholder='Email' type={'email'} required focusBorderColor='purple.500'/>
          <Input placeholder='Password' type={'password'} required focusBorderColor='purple.500'/>
          <Button colorScheme={'purple'} type={'submit'}>Register</Button>
          <Text alignSelf={'flex-end'}>
            Already register? {" "}
            <Button variant={'link'} colorScheme={'purple'}>
            <Link to={'/login'}> Log in</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  )
}


export default Signup