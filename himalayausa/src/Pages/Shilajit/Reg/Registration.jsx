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
import { useReducer, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../../Redux/AuthReducer/action';
import { REGISTER_SUCCESS } from '../../../Redux/AuthReducer/actionTypes';


function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return {
        ...state,
        name: action.payload
      }
    case 'username':
      return {
        ...state,
        username: action.payload
      }
    case 'email':
      return {
        ...state,
        email: action.payload
      }
    case 'password':
      return {
        ...state,
        password: action.payload
      }
    // case 'username':
    //   return{
    //     ...state,
    //     username:action.payload
    //   }
    //   case 'mobile':
    //     return{
    //       ...state,
    //       mobile:action.payload
    //     }
    //     case 'description':
    //       return{
    //         ...state,
    //         description:action.payload
    //       }
    default: return state
  }
}
const initialState = {
  name: '',
  username: '',
  email: '',
  password: '',

}
export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setter] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(state)
  const signuphandler = () => {
    dispatch(register(state)).then((r) => {
      if (r === REGISTER_SUCCESS) {
        navigate('/Login',)
      }
    })
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white', 'white')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={10} px={10}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'} color={'gray.600'}>
            Create an Account
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Personal Information
          </Text>
        </Stack>

        <Stack spacing={6} color={'gray.600'}>
          {/* <HStack> */}
          <Box color={'gray.600'}>
            <FormControl id="firstName" isRequired >
              <HStack>
                <FormLabel>First Name </FormLabel>
                <Box >
                  <FormLabel ml={16}><span >Required Fields</span> </FormLabel>
                </Box>

              </HStack>

              <Input type="text"
                value={state.fname}
                onChange={(e) => setter({ type: 'fname', payload: e.target.value })}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl id="lastName" isRequired>
              <FormLabel>Last Name </FormLabel>
              <Input type="text"
                value={state.lname}
                onChange={(e) => setter({ type: 'lname', payload: e.target.value })}
              />
            </FormControl>
          </Box>
          {/* </HStack> */}
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email"

              value={state.email}
              onChange={(e) => setter({ type: 'email', payload: e.target.value })}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'}
                value={state.password}
                onChange={(e) => setter({ type: 'password', payload: e.target.value })}

              />
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

              }}
              onClick={signuphandler}
            >
              CREATE
            </Button>

          </Stack>
          <Stack pt={6}>
          <Text mt={-10} align="left">
            <RouterLink to="/Shop" color={'#a3b49b'}>or
              Return to Store</RouterLink>
          </Text>
        </Stack>
          <Stack pt={6}>
            <Text align={'center'}>
              Already a user? <RouterLink to="/Login" color={'#a3b49b'}>Login</RouterLink>
            </Text>
          </Stack>

        </Stack>
      

      </Stack>
    </Flex>

  );
}