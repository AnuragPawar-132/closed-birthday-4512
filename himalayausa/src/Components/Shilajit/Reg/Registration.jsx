import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export default function Registration() {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={10} px={10}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
            Create an Account
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'} >
            Personal Information
            </Text>
          </Stack>
          {/* <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={12}> */}
            <Stack spacing={6}>
              {/* <HStack> */}
                <Box>
                  <FormControl id="firstName" isRequired>
                  <HStack>
                  <FormLabel>First Name </FormLabel>
                  <Box >
                  <FormLabel ml={16}><span >Required Fields</span> </FormLabel>
                  </Box>
                 
                  </HStack>
                   
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name </FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              {/* </HStack> */}
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'#a3b49b'}
                  color={'white'}
                  _hover={{
                    bg: '#a3b49b',
                
                  }}>
                  CREATE
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'#a3b49b'}>Login</Link>
                </Text>
              </Stack>
              
            </Stack>
            <Stack pt={6}>
                <Text mt={-10}
               
                >
                   <Link color={'#a3b49b'}>or 
                    Return to Store</Link>
                </Text>
              </Stack>
          {/* </Box> */}
        </Stack>
      </Flex>
    );
  }