import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p='16'>
      <form>
        <VStack spacing={'8'} alignItems='stretch' w={'96'} m={'auto'} my='16'>
          <Heading alignSelf={'center'}>Welcome Back</Heading>
          <Input placeholder='Email' type={'email'} required focusBorderColor='purple.500'/>
          <Input placeholder='Password' type={'password'} required focusBorderColor='purple.500'/>
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}> Forget Password</Link>
          </Button>
          <Button colorScheme={'purple'} type={'submit'}>Log In</Button>
        </VStack>
      </form>
    </Container>
  )
}

export default Login