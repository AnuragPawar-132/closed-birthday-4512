import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Login() {
  return (
    <Flex bg={"#fff"}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack >
          <Heading color={'gray.600'} fontSize={'4xl'}>Already Registered?</Heading>
          <Text fontSize={'lg'} color={'gray.600'} align={"left"}>
            Login
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={"#fff"}

          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4} color={'gray.600'} >
            <FormControl id="email" color={'gray.600'} isRequired>
              {/* <FormLabel>Email address</FormLabel> */}
              <HStack>
                <FormLabel >Email address</FormLabel>
                <Box >
                  <FormLabel ml={16}><span >Required Fields</span> </FormLabel>
                </Box>

              </HStack>
              <Input type="email" bg={"white"} color={'gray.600'} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'#a3b49b'}
                color={'white'}
                _hover={{
                  bg: '#a3b49b',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}