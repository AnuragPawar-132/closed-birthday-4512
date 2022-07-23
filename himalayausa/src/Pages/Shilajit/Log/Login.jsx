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
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../Redux/AuthReducer/action';
import { LOGIN_SUCCESS } from '../../../Redux/AuthReducer/actionTypes';

export default function Login() {
  const [useremail,setUseremail]=useState("");
  const [password,setPassword] = useState("");
  const isLoading = useSelector(state=>state.AuthReducer.isLoading)
 
  const navigate=useNavigate();
  const dispatch = useDispatch(); 

  const loginHandler=()=>{
    if(useremail && password){
      const params={ useremail, password}
      dispatch(login(params)).then(
        res=>{
          if(res===LOGIN_SUCCESS){
              navigate("/",{replace:true})
          }
          else{
            //err
          }
        }
      )

    }
  }

  const handlelogin=()=>{
    navigate("/Registration",{replace:true})
  }
  return (
    <Flex 
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.50')}>
    
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack >
          <Heading color={'gray.600'} fontSize={'4xl'}>Already Registered?</Heading>
          <Text fontSize={'lg'} color={'gray.600'} align={"left"}>
            Login
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
         
          bg={useColorModeValue('white', 'gray.200')}
          boxShadow={'lg'}
          p={8}
          
          >
          <Stack spacing={4} color={"black"} >
            <FormControl id="email" isRequired>
             
              <HStack>
                <FormLabel >Email address</FormLabel>
                <Box >
                  <FormLabel ml={16}><span >Required Fields</span> </FormLabel>
                </Box>

              </HStack>
              <Input 
              type="email"
              color={"black"}
              // placeholder="Enter Email"
              value={useremail} 
              onChange={e=>setUseremail(e.target.value)}
              />
              
            </FormControl>

   
            <FormControl id="password" isRequired
              
            >
              <FormLabel>Password</FormLabel>
              <Input type="password" 
                value={password} 
                onChange={e=>setPassword(e.target.value)}
             
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
               
                <Link color={'#a3b49b'}>Lost your password?</Link>
              </Stack>
              <Button
                bg={'#a3b49b'}
                color={'white'}
                _hover={{
                  bg: '#a3b49b',
                }}
                onClick={loginHandler}
                isLoading={isLoading}
                
                >
               LOGIN
              </Button>
            </Stack>
          </Stack>
        </Box>

        <Stack>
          <Text color={'black'} align="left" fontSize='2xl'  fontWeight={"bold"}>
          New Customer
          </Text>
          <Text color={'black'} align="left" fontSize='2xl'>
          By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.
          </Text>
          

         
          <Button
              w={"full"}
                bg={'#a3b49b'}
                color={'white'}
                _hover={{
                  bg: '#a3b49b',
                }}
               onClick={handlelogin}
                >
               CRAETE AN ACCOUNT
              </Button>
             
        </Stack>
      </Stack>
    </Flex>
  );
}